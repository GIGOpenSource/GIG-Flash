<template>
	<view class="">
		<view v-for="(item,index) in 8" :key="index" class="con">
			<view class="desc">点赞了</view>
			<view class="bg">
				<view class="top">
					<view class="left">
						<up-avatar :src="src" size="40"></up-avatar>
						<view class="message">
							<text>mask</text>
						</view>
					</view>
					<view class="follow">
						<text>关注</text>
						<up-icon name="more-dot-fill" color="#ffffff" size="28"></up-icon>
					</view>
				</view>
				<view class="title">标题内容标题内容标题内容</view>
				<view class="images">
					<image src="/static/tsp-icon/touxiang.jpg" mode=""></image>
				</view>
			</view>
			<view class="bottom">
				<view class="">
					2025-05-05 18:00:00
				</view>
				<view class="right">
					<view class="">
						<up-icon name="thumb-up" color="#ffffff" size="26"></up-icon>
						<text>224</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const src = ref('http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg')
</script>

<style lang="scss" scoped>
	.con {
		background: #212028;
		margin-bottom: 20rpx;
		padding: 20rpx;
		border-radius: 15rpx;
		.bg{
			background: #28272e;
			// padding:20rpx;
			padding: 20rpx 20rpx 0 20rpx;
			box-sizing: border-box;
			margin-top: 20rpx;
			border-radius: 20rpx;
		}
		.desc{
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		

		.follow {
			display: flex;
			text{
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
		color: rgba(255, 255, 255, .6);
		font-size: 28rpx;

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