<template>
	<view class="">
		<view class="list" v-for="(item,index) in 10" :key="index">
			<view class="left">
				<up-avatar src="123445" size="40"></up-avatar>
				 <view style="margin-left: 20rpx;">
					  <view class="">某个发消息的人</view>
					  <view class="">您好</view>
				 </view>
			</view>
             <view class="right">
				  <view class="">2025-07-09</view>
				  <view class="">18:00:00</view>
			 </view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.list {
		padding: 20rpx 0;
		margin: 0 30rpx;
		border-bottom: 1rpx solid rgba(255, 255, 255, .1);
		color: rgba(255, 255, 255, .4);
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		.left{
			display: flex;
			align-items: center;
		}
             
	   .right {
	     display: flex;
	     flex-direction: column;
	     align-items: flex-end; 
	   }

		
	}
</style>