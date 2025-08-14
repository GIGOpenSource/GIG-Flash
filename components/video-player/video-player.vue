<template>
	<!-- 视频 -->
	<view>
		<video id="myVideo" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4" object-fit="cover"
			@error="videoErrorCallback" enable-danmu danmu-btn controls
			style="width: 100%; height: 460rpx;"></video>

		<!-- 视频price -->
		<view class="price-line">
			<view class="price">66钻石购买（会员价21钻石）</view>
			<view class="tip">会员充值，新用户首充好礼</view>
		</view>

		<!-- 一件三联 -->
		<view class="three-piece">
			<view class="piece-item">
				<up-icon name="chat" size="36" color="#A1A6AF"></up-icon>
				<text>2.2万</text>
			</view>
			<view class="piece-item">
				<up-icon name="heart" size="36" color="#A1A6AF"></up-icon>
				<text>2.2万</text>
			</view>
			<view class="piece-item">
				<up-icon name="star" size="36" color="#A1A6AF"></up-icon>
				<text>2.2万</text>
			</view>
			<view class="piece-item">
				<up-icon name="share" size="36" color="#A1A6AF"></up-icon>
				<text>2.2万</text>
			</view>
		</view>


	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	// 视频价格
	.price-line {
		padding: 10rpx 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 11px;
		background: rgba(20, 20, 20, 1);
	}

	.three-piece {
		display: flex;
		align-items: center;
		padding: 40rpx 0;
		border-bottom: 2rpx solid rgba(255, 255, 255, .1);

		.piece-item {
			flex: 1;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;

			text {
				font-size: 10px;
			}
		}
	}
</style>