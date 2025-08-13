<template>
	<view class="advertisement-container" v-if="showAdv">
		
		<view class="info-line">
			<up-image src='https://qcloud.dpfile.com/pc/_vzQAXVr13f_7iwVuYMN-KZdECsM6WjeAFvnO_6J6g0hOLcGgiPlxc9FC8mAyrgC.jpg' width="170rpx" height="100rpx" radius="10rpx"></up-image>
			
			<view class="desc">
				<view class="name">我的活a干不完</view>
				<view class="nums">累计下载24.3W</view>
			</view>
			</view>
			
			<up-icon name="close" size="30" color="#fff" @click="closeAdv"></up-icon>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	const showAdv = ref(true)
	
	const closeAdv = ()=>{
		showAdv.value = false
	}
</script>

<style lang="scss" scoped>

.advertisement-container{
	padding: 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid  rgba(255, 255, 255, .1) ;
	
	.info-line{
		display: flex;
		align-items: center;
		
		.desc{
			margin-left: 20rpx;
			
			.name{
				font-size: 15px;
				color: #fff;
			}
			
			.nums{
				background-color: #434249;
				padding: 5rpx 10rpx;
				border: 2rpx solid #FFFFFF80;
				color: #fff;
				border-radius: 10rpx;
				font-size: 11px;
				text-align: center;
				margin-top: 10rpx;
				line-height: 1.2;
			}
		}
	}
}
</style>