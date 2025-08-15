<template>
	<view class="page">
		<block v-for="(item,index) in num" :key="index">
		<image
		  class="banner"
		  :style="{ height: `calc(80vh / ${num})` }"
		  src="/static/images/welecome.png"
		/>
		</block>
		<view class="logo">
			<image src="/static/images/logo2.png" mode=""></image>
		</view>
	</view>
</template>
<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	const num = ref(1) //广告为数

	onMounted(() => {
		setTimeout(() => {
			uni.switchTab({
				 url: '/pages/index/index-v'
			})
		},2000)
	})
</script>

<style lang="scss" scoped>
	page {
		background: #fff;
	}

	.banner {
		width: 100%;
		vertical-align: middle;
		// height: 80vh;
	}

	.logo {
		width: 100%;
		height: 20vh;
		display: flex;
		justify-content: center;

		image {
			width: 250rpx;
			height: 80rpx;
			margin-top: 50rpx;
		}
	}
</style>