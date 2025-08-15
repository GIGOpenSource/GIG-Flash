<template>

	<z-paging ref="paging" :loading-more-enabled="false" v-model="dataList" @query="queryList">
		<template #top>

			<!-- 导航栏 -->
			<up-navbar bgColor="transparent" placeholder :autoBack="false" :fixed="false" @rightClick="rightClick">
				<template #left>
					<tabs :list="list" @change="onTabChange"></tabs>
				</template>

				<template #right>
					<view class="search">
						<up-icon name="search" color="#fff" size="22"></up-icon>
						<text>搜索</text>
					</view>
				</template>
			</up-navbar>

			<!-- tab分类 -->
			<up-tabs :list="categoryList" :current="currentCategory" @click="handleClickCategory"
				lineColor="transparent" :activeStyle="{
				  color: '#fff',
				  fontSize: '17px',
				  fontWeight: '400'
				}" :inactiveStyle="{
				  color: 'rgba(255,255,255, .6)',
				  fontSize: '15px',
				  fontWeight: '400'
				}" itemStyle="padding-left: 15px; padding-right: 5px; height: 34px;" />

		</template>


		<!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
		<!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
		<view class="content">
			<swiper :current="currentCategory" style="height: calc(100vh - 90px)">
				<swiper-item v-for="item in categoryList.length">
					<z-paging>
						<BannerSwiper />
						<view class="card-list">
							<card-view v-for="item in 10" @click="handleToLongVideo"></card-view>
						</view>
					</z-paging>


				</swiper-item>

			</swiper>

		</view>

	</z-paging>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import tabs from '@/components/tabs/tabs.vue'
	import CardView from './components/CardView/CardView.vue'
	import BannerSwiper from './components/BannerSwiper/BannerSwiper.vue'

	const list = ref([{
			name: '发现'
		},
		{
			name: '精选'
		}

	])

	const currentCategory = ref(0)
	const categoryList = ref([{
			name: '关注'
		},
		{
			name: '推荐'
		},
		{
			name: '最新'
		},
		{
			name: '最新'
		},
		{
			name: '最新'
		},
		{
			name: '最新'
		},
		{
			name: '最新'
		},
		{
			name: '最新'
		},
		{
			name: '最新'
		},
		{
			name: '最新'
		},
		{
			name: '最新'
		},
		{
			name: '最新'
		},
	])
	// 切换分类
	const handleClickCategory = (tab) => {
		console.log(tab);
		currentCategory.value = tab.index
		console.log('currentCategory', currentCategory.value);
	}
	const onTabChange = (tab) => {
		console.log(tab);
		currentCategory.value = 0
	}

	// 定义方法  
	const rightClick = () => {
		console.log('rightClick');
		uni.navigateTo({
			url: '/pages/search/search'
		})
	};

	const leftClick = () => {
		console.log('leftClick');
	};

	const paging = ref(null)
	// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
	const dataList = ref([])

	// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用paging.value.reload()即可
	const queryList = (pageNo, pageSize) => {
		// 此处请求仅为演示，请替换为自己项目中的请求
		//       request.queryList({ pageNo,pageSize }).then(res => {
		// 	// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
		//           paging.value.complete(res.data.list);
		//       }).catch(res => {
		// 	// 如果请求失败写paging.value.complete(false);
		// 	// 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
		// 	// 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
		paging.value.complete([{
			title: '123'
		}, {
			title: "2243"
		}, {
			title: "2243"
		}, {
			title: "2243"
		}, {
			title: "2243"
		}, {
			title: "2243"
		}, {
			title: "2243"
		}, {
			title: "2243"
		}, {
			title: "2243"
		}, {
			title: "2243"
		}, {
			title: "2243"
		}, {
			title: "2243"
		}]);
		// })
	}

	const handleToLongVideo = () => {
		uni.navigateTo({
			url: '/pages/video/video'
		})
	}
</script>

<style lang="scss">
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