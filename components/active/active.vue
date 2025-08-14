<template>
	 <view class="">
		 <view v-for="(item,index) in 1" :key="index" class="con" @click="uni.navigateTo({url:'/pages/community/details'})">
		 	<view class="top">
		 		<view class="left">
		 			<up-avatar :src="src" size="40"></up-avatar>
		 			<view class="message">
		 				<text>mask</text>
		 				<text class="time">2025-05-05 18:00:00</text>
		 			</view>
		 		</view>
		 		<view class="">
		 			<up-icon name="more-dot-fill" color="#ffffff" size="28"></up-icon>
		 		</view>
		 	</view>
		 	<view class="title">标题内容标题内容标题内容</view>
		 	<view class="images">
		 		<image src="/static/tsp-icon/touxiang.jpg" mode=""></image>
		 	</view>
		 	<view class="bottom">
		 		<view class="">
		 			 <up-icon name="share-square" color="#ffffff" size="26"></up-icon>
		 			 <text>224</text>
		 		</view>
		 		<view class="right">
		 			 <view class="">
		 				 <up-icon name="thumb-up" color="#ffffff" size="26"></up-icon>
		 				 <text>224</text>
		 			 </view>
		 			 <view class="">
		 				 <up-icon name="order" color="#ffffff" size="26"></up-icon>
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
	.con{
		background: #212028;
		margin-bottom: 20rpx;
		padding: 20rpx;
		border-radius: 15rpx;
	}
.top{
	display: flex;
	align-items: center;
	justify-content:space-between;
	.left{
		display: flex;
		align-items: center;
		
		.message{
			display: flex;
			flex-direction: column;
			margin-left: 20rpx;
			.time{
				font-size: 18rpx;
				color: rgba(255, 255, 255, .6);
			}
		}
	}
}  
.title{
	margin: 20rpx 0;
}
.images{
	display: flex;
	flex-wrap: wrap;
	image{
		width: 48%;
		height: 300rpx;
		margin: 0 13rpx 30rpx 0;
	    border-radius: 15rpx;
	}
}
.bottom{
	display: flex;
	justify-content: space-between;
	view{
		display: flex;
		align-items: center;
		
		}
		.right{
			display: flex;
			view{
				margin-right: 7rpx;
			}
			
		}
	
}
</style>