<template>
	<view class="page">
		 <scroll-view  class="bannerwrapper" scroll-y="true" @scrolltolower="lower">
			 	<image  v-for="(item,index) in bannerlist" :key="index" class="banner" :style="{ height: `calc(80vh / ${bannerlist.length >= 3 ? 3 : bannerlist.length})` }" :src="item.imageUrl" />
		 </scroll-view>
		<view class="logo">
			<image src="/static/images/logo2.png" mode="">12345</image>
		</view>
	</view>
</template>
<script setup>
	import {
		onMounted,
		reactive,
		ref
	} from 'vue';
	import {
		onHide,
		onReachBottom
	} from '@dcloudio/uni-app'
	import { getAdsList } from '@/api/public.js'
	let bannerlist = reactive([])
    const total = ref(0)
	const page = ref(1)
	onMounted(() => {
		const isFirst = uni.getStorageSync('isFirst')
		list()//获取轮播图列表
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
	const list = () => {
		getAdsList({
			 adType:'banner',
			 currentPage:page.value,
			 pageSize:20
		}).then(res => {
			 bannerlist = [...bannerlist,res.data.records]
			 total.value = res.data.total
		})
		
	}
   const lower = () => {
	   if(total.value > bannerlist.length){
		   total.value++
		    list()
	   }
	   
   }
</script>

<style lang="scss" scoped>
	page {
		background: #fff;
	}
   .bannerwrapper{
	   max-height: 80vh;
   }
	.banner {
		width: 100%;
		vertical-align: middle;
	}

	.logo {
		position: fixed;
		left: 0;
		bottom: 0;
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