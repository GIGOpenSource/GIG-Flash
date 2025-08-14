<template>
	<view class="page">
		<view class="top">
			<view class="">
				全部评论（56）
			</view>
			<view class="tabs">
				<text :class="current == 0 ? 'current':''" @click="current = 0">推荐</text>
				<text> / </text>
				<text :class="current == 1 ? 'current':''" @click="current = 1">最新</text>
			</view>
		</view>
		<view class="center" v-for="(item,index) in 10" :key="index">
			<up-avatar :src="src" size="40"></up-avatar>
			<view class="right">
				<view class="r-top">
					<view class="info">
						<text class="name">mask</text>
						<text class="time">2025-05-05 18:00:00</text>
					</view>
					<view class="give">
						<up-icon name="heart" color="#D9D9D9" size="22"></up-icon>
						<text>2.5w</text>
					</view>
				</view>
				<view class="">
					评价内容评价内容评价内容评价内容评价内容评价内容
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
	const current = ref(0)
</script>

<style lang="scss" scoped>
	.page {
		background: #212028;
		margin: 20rpx;
		padding: 20rpx;
		font-size: 28rpx;
		border-radius: 20rpx;
		.tabs{
			color: rgb(255, 255, 255,.5);
			.current{
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
				margin-left: 20rpx;
				padding-bottom: 20rpx;
                border-bottom: 1rpx solid rgba(255, 255, 255, .1);
				.r-top {
					display: flex;
					width: 100%;
					justify-content: space-between;
					margin-bottom: 20rpx;
					color: rgb(255, 255, 255,.6);

					.info {
						display: flex;
						flex-direction: column;
						.name{
							color: #fff;
						}
						.time{
							font-size: 24rpx;
						}
					}

					.give {
						display: flex;
						align-items: center;
                       text{
						   margin-left: 10rpx;
					   }
					}
				}


			}
		}
	}
</style>