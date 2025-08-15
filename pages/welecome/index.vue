<template>
	<view class="page">
		<block v-for="(item,index) in num" :key="index">
			<image class="banner" :style="{ height: `calc(80vh / ${num})` }" src="/static/images/welecome.png" />
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

	import {
		onHide
	} from '@dcloudio/uni-app'

	const num = ref(1) //广告为数

	onMounted(() => {
		const isFirst = uni.getStorageSync('isFirst')
		console.log('isFirst', isFirst);
		if (isFirst === false) {
			setTimeout(() => {
				uni.switchTab({
					// #ifdef APP-PLUS
					url: '/pages/index/index'
					// #endif
					// #ifndef APP-PLUS
					url: '/pages/index/index-v'
					// #endif
				})
			}, 3000)
		} else {
			setTimeout(() => {
				uni.navigateTo({
					url: '/pages/guide/guide'
				})
			}, 3000)
		}

	})

	onHide(() => {
		uni.setStorageSync('isFirst', false)
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
		align-items: center;
		background-color: #fff;

		image {
			width: 250rpx;
			height: 80rpx;
		}
	}
</style>