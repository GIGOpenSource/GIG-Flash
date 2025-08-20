<template>
	<z-paging ref="pagingRef" v-model="dataList" @query="queryList">
		<view class="content">

			<BannerSwiper />

			<view class="card-list">
				<card-view v-for="item in 10" @click="handleToLongVideo"></card-view>
			</view>

		</view>
	</z-paging>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	defineProps(['tabIndex', 'current'])

	import BannerSwiper from './components/BannerSwiper/BannerSwiper.vue';
	import CardView from './components/CardView/CardView.vue';

	const dataList = ref([])

	const queryList = () => {}

	const handleToLongVideo = () => {
		uni.navigateTo({
			url: '/pages/video/video'
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 20rpx;
	}

	.card-list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;

		.card-view {
			margin-right: 30rpx;
			margin-bottom: 30rpx;

			&:nth-child(2n) {
				margin-right: 0;
			}
		}
	}
</style>