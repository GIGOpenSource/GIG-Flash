<template>
	<view class="page">
		<view class="top">
			<view class="">
				全部评论（{{list.length }}）
			</view>
			<view class="tabs">
				<text :class="current == 0 ? 'current':''" @click="current = 0">推荐</text>
				<text> / </text>
				<text :class="current == 1 ? 'current':''" @click="current = 1">最新</text>
			</view>
		</view>
		<view class="center" v-for="(item,index) in list" :key="index">
			<view class=""  @click.stop="uni.navigateTo({url:'/pages/my/person'})">
				<up-avatar :src="src" size="40"></up-avatar>
			</view>
			<view class="right">
				<view class="r-top">
					<view class="info">
						<text class="name">mask</text>
						<text class="time">{{item.time}}</text>
					</view>
					<view class="give" @click.stop="give(index)">

						<up-icon :name="item.flag?'heart-fill':'heart'" :color="item.flag?'#ff0000':'#D9D9D9'"
							size="22"></up-icon>
						<text>{{item.givenum}}</text>
					</view>
				</view>
				<view class="" @click="commentCon">
					{{item.con}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import {
		getCommentList
	} from '@/api/community.js'
	import {
		userinfoStore
	} from '@/store/userinfos'
	const {
		userinfo
	} = userinfoStore()
	const src = ref('http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg')
	const current = ref(0)
	const emits = defineEmits(['commentCon'])
	const props = defineProps({
		list: {
			type: Array,
			default: []
		},
		detailId:{
			type: Number,
			default: 0,
		},
		userid:{
			type: Number,
			default: 0,
		}
	})
	const give = (index) => {
		let list = props.list
		list[index].flag = !list[index].flag
		if (list[index].flag) {
			list[index].givenum += 1
		} else {
			list[index].givenum -= 1
		}
	}
	const commentCon = () => {
		emits('onfocus')
	}
	const getlist = () => {
		getCommentList({
			targetId:props.detailId,
			userId:props.userid,
			commentType:'COMMUNITY',
			currentPage:1,
			pageSize:20
		})
		.then(res => {
			console.log(res.data,'rrrr11234567678');
		})
	}
	onMounted(() => {
		getlist()
	})
</script>

<style lang="scss" scoped>
	.page {
		background: #212028;
		margin: 20rpx;
		padding: 20rpx;
		font-size: 28rpx;
		border-radius: 20rpx;

		.tabs {
			color: rgb(255, 255, 255, .5);

			.current {
				color: #fff;
			}
		}

		.top {
			display: flex;
			justify-content: space-between;
		}

		.center {
			display: flex;
			margin-top: 20rpx;

			.right {
				width: 600rpx;
				margin-left: 20rpx;
				padding-bottom: 20rpx;
				border-bottom: 1rpx solid rgba(255, 255, 255, .1);

				.r-top {
					display: flex;
					width: 100%;
					justify-content: space-between;
					margin-bottom: 20rpx;
					color: rgb(255, 255, 255, .6);

					.info {
						display: flex;
						flex-direction: column;

						.name {
							color: #fff;
						}

						.time {
							font-size: 24rpx;
						}
					}

					.give {
						display: flex;
						align-items: center;

						text {
							margin-left: 10rpx;
						}
					}
				}


			}
		}
	}
</style>