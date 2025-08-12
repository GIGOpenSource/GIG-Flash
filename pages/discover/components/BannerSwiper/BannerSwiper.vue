<template>
	<view class="banner-view">
		<up-swiper :list="list1" @change="change" @click="handleClickBanner" height="320rpx" radius="20rpx" imageMode="aspectFit" bgColor="transparent"></up-swiper>

		<view class="desc">
			<view class="title">男生组队打游戏时男生组队打游戏时男生组队打游戏时</view>
			<view class="auther">
				<up-avatar src="https://cdn.uviewui.com/uview/album/1.jpg" size="25"></up-avatar>
				<view class="name">zovod</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue';

	// 使用 reactive 创建响应式数组  
	const list1 = reactive([
		'https://cdn.uviewui.com/uview/album/1.jpg',
		'https://cdn.uviewui.com/uview/album/1.jpg',
		'https://cdn.uviewui.com/uview/album/1.jpg',
	]);

	const handleClickBanner = () => {}
</script>

<style lang="scss">
	.banner-view {
		background-color: rgba(255, 255, 255, .03);
		border-radius: 20rpx;
		padding-bottom: 10rpx;
	}

	.desc {
		padding: 10rpx 15rpx;
		font-size: 15px;
	}

	.title {
		max-height: 80rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box; //作为弹性伸缩盒子模型显示。
		-webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
		-webkit-line-clamp: 2;
	}

	.auther {
		margin-top: 20rpx;
		font-size: 11px;

		display: flex;
		align-items: center;

		.name {
			margin-left: 20rpx;
		}
	}
</style>