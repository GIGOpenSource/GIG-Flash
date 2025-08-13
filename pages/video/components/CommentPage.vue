<template>
	<view class="comment-page">

		<view class="comment-list">
			<view class="comment-item" v-for="item in 20">
				<view class="user-line">
					<view class="user">
						<up-avatar src="3"></up-avatar>
						<view class="info">
							<view class="name">路过人间</view>
							<view class="nums">2025-3-512</view>
						</view>
					</view>
					<view class="now">
						<up-icon name="heart" color="rgba(255,255,255,.5)">
						</up-icon>
						<text style="margin-left: 10rpx;">2355</text>
					</view>
				</view>

				<view class="des">
					湖是神落在人间的镜子，风一吹，碎了满吹，碎了满吹，碎了满吹，碎了满吹，碎了满
				</view>
			</view>
		</view>

	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.comment-page {
		padding: 20rpx;
	}
	
	.comment-item{
		padding-bottom: 40rpx;
		border-bottom: 2rpx solid rgba(255, 255, 255, .1);
		margin-bottom: 40rpx;
	}

	.user-line {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.user {
			display: flex;
			align-items: center;

			.info {
				margin-left: 10rpx;

				.name {
					font-size: 15px;
				}

				.nums {
					font-size: 15px;
					color: rgba(255, 255, 255, 0.6);
				}
			}

		}

		.now {
			font-size: 11px;
			display: flex;
			align-items: center;
		}
	}

	.des {
		font-size: 17px;
		margin-top: 20rpx;
	}
	

</style>