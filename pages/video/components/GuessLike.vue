<template>
	<view class="guess-like">
		<view class="title">猜你喜欢</view>

		<view class="like-list">
			<view class="like-item" v-for="item in 20" @click="handleClickToPage(item)">
				<up-image :show-loading="true"
					src="https://qcloud.dpfile.com/pc/_vzQAXVr13f_7iwVuYMN-KZdECsM6WjeAFvnO_6J6g0hOLcGgiPlxc9FC8mAyrgC.jpg"
					width="150px" height="80px" radius="5px"></up-image>
				<view class="like-des">
					<view class="like-name">
						草青、花白、雪山巍，像走 进了宫崎骏动画里的夏天。
					</view>
					<view class="like-user">
						<up-avatar src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"
							size="25"></up-avatar>
						<view class="name">动画里的春天</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const handleClickToPage = (item) => {
		uni.navigateTo({
			url: '/pages/video/video',

		})
	}
</script>

<style lang="scss" scoped>
	.guess-like {
		margin-top: 40rpx;

		.title {
			font-size: 15px;
		}

		.like-list {
			margin-top: 20rpx;

			.like-item {
				display: flex;
				padding-bottom: 10rpx;

				.like-des {
					margin-left: 20rpx;
					font-size: 15px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.like-user {
						font-size: 11px;
						display: flex;
						align-items: center;

						.name {
							margin-left: 20rpx;
						}
					}
				}
			}
		}
	}
</style>