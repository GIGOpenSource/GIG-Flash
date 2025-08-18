<template>
	<view class="">
		<view v-for="(item,index) in isList ? list : list.slice(0,1)" :key="index" class="con"
			@click="uni.navigateTo({url:'/pages/community/details'})">
			<view class="top">
				<view class="left">

					<view class="" @click.stop="topath"><up-avatar :src="src" size="40" ></up-avatar></view>
					<view class="message">
						<text>mask</text>
						<text class="time">2025-05-05 18:00:00</text>
					</view>
				</view>
				<view class="follow">
					<text v-if="isfollow && item.isFollow == 1" @click.stop="follow(index)">关注</text>
					<view class="" @click.stop="oparea">
						<up-icon name="more-dot-fill" color="#ffffff" size="28" v-if="more"></up-icon>
					</view>

				</view>
			</view>
			<view class="title">标题内容标题内容标题内容</view>
			<view class="images">
				<image src="/static/tsp-icon/touxiang.jpg" mode="" @click="previewImage"></image>
			</view>
			<view class="bottom">
				<view class="">
					<up-icon name="share-square" color="#ffffff" size="26"></up-icon>
					<text>{{item.sharenum}}</text>
				</view>
				<view class="right">
					<view class="" @click.stop="give(index)">

						<up-icon :name="item.flag? 'thumb-up-fill':'thumb-up'" :color="item.flag? '#ff0000':'#ffffff'"
							size="26"></up-icon>
						<text>{{item.givenum}}</text>
					</view>
					<view class="">
						<up-icon name="order" color="#ffffff" size="26"></up-icon>
						<text>{{item.commentnum}}</text>
					</view>
				</view>
			</view>
		</view>
		<operation :show="show" @update:show="val => show = val" />
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	const src = ref('http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg')
	const show = ref(false)


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
		}

	})
	const list = reactive([{
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}, {
		id: 1,
		flag: false,
		givenum: 2,
		sharenum: 20,
		commentnum: 10,
		isFollow: 1 //1关注，2取消关注
	}])
	const give = (index) => {
		list[index].flag = !list[index].flag
		if (list[index].flag) {
			list[index].givenum += 1
		} else {
			list[index].givenum -= 1
		}
	}
	const follow = (index) => {
		list[index].isFollow = 2
		uni.showToast({
			title: "关注成功"
		})
	}
	const oparea = () => {
		show.value = true
	}
	//预览图片
	const previewImage = () => {
		uni.previewImage({
			urls: ['/static/tsp-icon/touxiang.jpg']
		});
	}
	const topath = () => {
		if(props.isPath){
			 uni.navigateTo({url:'/pages/my/person'})
		}
		
	}
</script>

<style lang="scss" scoped>
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
					color: rgba(255, 255, 255, .6);
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