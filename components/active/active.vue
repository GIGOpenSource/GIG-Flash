<template>
	<scroll-view  scroll-y="true" @scrolltolower="lower" style="max-height: 90vh">
		<view v-for="(item, index) in isList ? list : list.slice(0, 1)" :key="index" class="con"
			@click="uni.navigateTo({ url: '/pages/community/details?id='+item.id +'&userid='+item.userId})">
			<view class="top">
				<view class="left">
					<view class="" @click.stop="topath"><up-avatar :src="item.userAvatar" size="40"></up-avatar></view>
					<view class="message">
						<text>{{item.userNickname}}</text>
						<text class="time">{{item.createTime}}</text>
					</view>
				</view>
				<view class="follow">
					<text v-if="isfollow && !item.isFollowed" @click.stop="follow(index)">关注</text>
					<view class="" @click.stop="oparea">
						<up-icon name="more-dot-fill" color="#ffffff" size="28" v-if="more"></up-icon>
					</view>
				</view>
			</view>
			<view class="title">{{item.title}}</view>
			<view class="images">
				<image v-for="(image,indx) in images" :key="indx" :src="image" mode="" @click="previewImage"></image>
			</view>
			<view class="distance" v-if="tabs == 3">距离你{{ (Math.random() * 50).toFixed(2) }}km</view>
			<view class="bottom">
				<view class="" @click.stop="share(index,item.id)">
					<up-icon name="share-square" color="#ffffff" size="26"></up-icon>
					<text>{{ item.shareCount }}</text>
				</view>
				<view class="right">
					<view class="" @click.stop="give(index,item.id)">
						<up-icon :name="item.isLiked ? 'thumb-up-fill' : 'thumb-up'"
							:color="item.isLiked ? '#ff0000' : '#ffffff'" size="26"></up-icon>
						<text>{{ item.likeCount }}</text>
					</view>
					<view class="">
						<up-icon name="order" color="#ffffff" size="26"></up-icon>
						<text>{{ item.commentCount }}</text>
					</view>
				</view>
			</view>
		</view>

		<operation :show="show" @update:show="(val) => (show = val)" />
	</scroll-view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted,
		watch
	} from 'vue';
	import {
		communityList,
		getFollwingList,
		getLatestList,
		getDetails,
		addLike,
		likeDelete,
		addShare
	} from '@/api/community.js'
	import {
		userinfoStore
	} from '@/store/userinfos'
	const {
		userinfo
	} = userinfoStore()
	const src = ref('http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg');
	const show = ref(false);
	const page = ref(1)
	const total = ref(0)
	const props = defineProps({
		//是否有更多按钮
		more: {
			type: Boolean,
			default: false,
			required: true
		},
		// 是否有关注
		isfollow: {
			type: Boolean,
			default: true
		},
		isList: {
			type: Boolean,
			default: true,
			required: true
		},
		//是否跳转
		isPath: {
			type: Boolean,
			default: false
		},
		tabs:{
			type: Number,
			default: 0,
		},
		detailId:{
			type: Number,
			default: 0,
		}
	});
	const list = ref([]);
	const give = (index,id) => {
		let params = {
			  userId:userinfo.id,
			  id:id
		}
		
		if(list.value[index].isLiked){
			 likeDelete(params).then(res => {
				list.value[index].likeCount -= 1;
			 })
		}else{
			addLike(params).then(res => {
				list.value[index].likeCount += 1;
			})
		}
		list.value[index].isLiked = !list.value[index].isLiked
	};
	const follow = (index) => {
		list[index].isFollow = 2;
		uni.showToast({
			title: '关注成功'
		});
	};
	const share = (index,id) => {
		    
		 addShare({
		 	userId:userinfo.id,
		 	id:id
		 }).then(res => {
		    list.value[index].shareCount++    
		 })
	}
	const oparea = () => {
		show.value = true;
	};
	//预览图片
	const previewImage = () => {
		uni.previewImage({
			urls: ['/static/tsp-icon/touxiang.jpg']
		});
	};
	const topath = () => {
		uni.navigateTo({
			url: '/pages/my/person'
		});
	};
	const getlist = async (newVal) => {
		let params = {
			currentPage: page.value,
			pageSize: 20
		}
		let res = {}
		if(newVal == 0 || newVal == 3){
			res =  await communityList(params)
			list.value = [...list.value,...res.data.records]
			total.value = res.data.total
		}else if(newVal == 1){
			params.userId = uni.getStorageSync('user_info').id
			res = await getFollwingList(params)
			list.value = [...list.value,...res.data.records]
			total.value = res.data.total
		}else if(newVal == 2){
			res = await getLatestList(params)
			list.value = [...list.value,...res.data.records]
			total.value = res.data.total
		}else if(newVal == 4){
			res = await getDetails({dynamic_id:props.detailId})
		    list.value = [res.data]
		}
		
	
	}
	
	const lower = () => {
		if (total.value > list.length) {
			total.value++
			getlist()
		}
	
	}
	// onMounted(() => {
	// 	getlist(0)
	// })
	watch(() => props.tabs, (newVal) => {
		list.value = []
	    getlist(newVal)
	},{ immediate: true });

</script>

<style lang="scss" scoped>
	.distance{
		margin-bottom: 20rpx;
		font-size: 24rpx;
	}
	.con {
		background: #212028;
		margin-bottom: 20rpx;
		padding: 20rpx;
		border-radius: 15rpx;
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.follow {
			display: flex;

			text {
				margin-right: 20rpx;
				border: 1rpx solid #ffffff;
				padding: 10rpx 40rpx;
				border-radius: 60rpx;
				font-size: 28rpx;
			}
		}

		.left {
			display: flex;
			align-items: center;

			.message {
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;

				.time {
					font-size: 18rpx;
					color: rgba(255, 255, 255, 0.6);
				}
			}
		}
	}

	.title {
		margin: 20rpx 0;
	}

	.images {
		display: flex;
		flex-wrap: wrap;

		image {
			width: 48%;
			height: 300rpx;
			margin: 0 13rpx 30rpx 0;
			border-radius: 15rpx;
		}
	}

	.bottom {
		display: flex;
		justify-content: space-between;

		view {
			display: flex;
			align-items: center;
		}

		.right {
			display: flex;

			view {
				margin-right: 7rpx;
			}
		}
	}
</style>