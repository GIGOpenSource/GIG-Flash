<template>

	<z-paging ref="paging" v-model="dataList" @query="queryList">
		<template #top>
			<!-- 导航栏 -->
			<up-navbar bgColor="transparent" placeholder :autoBack="false" :fixed="false">
				<template #left>
					<tabs :list="list" @change="onTabChange"></tabs>
				</template>

				<template #right>
					<view class="search" @click="uni.navigateTo({url: '/pages/search/search'})">
						<up-icon name="search" color="#fff" size="22"></up-icon>
						<text>搜索</text>
					</view>
				</template>
			</up-navbar>
		</template>
	<swiper :current="current"  @animationfinish="swiperAnimationfinish"  class="content">
			<swiper-item v-for="(item, index) in list.length" :key="index">
				<active></active>
			</swiper-item>
		
		</swiper>
		<dragball >
			<template #content>
				<view  class="dragball" @click="clicks">
				   <image src="/static/images/icon_add_community.png" mode=""></image>
				</view>
			</template>
		</dragball>

	</z-paging>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	import tabs from '@/components/tabs/tabs.vue'
	import SocialPost from './components/SocialPost.vue'
     const current = ref(0)
	const list = ref([{
			name: '推荐'
		},
		{
			name: '关注'
		},
		{
			name: '最新'
		},
		{
			name: '同城'
		}

	])

	const onTabChange = (index) => {
		current.value = index.index
	}

	const postData = ref([{
		avatar: 'https://img0.baidu.com/it/u=2381910767,1869190694&fm=253&app=138&f=JPEG?w=800&h=949',
		username: 'Mask',
		timestamp: '2025-05-05 18:00:00',
		content: '这里是标题内容 (20个字, 可为空)',
		image: 'https://img0.baidu.com/it/u=2381910767,1869190694&fm=253&app=138&f=JPEG?w=800&h=949',
		shares: 224,
		likes: 2488,
		comments: 121
	}])
	const paging = ref(null)
	// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
	const dataList = ref([])
   
	const queryList = (pageNo, pageSize) => {
		// 此处请求仅为演示，请替换为自己项目中的请求
		//       request.queryList({ pageNo,pageSize }).then(res => {
		// 	// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
		//           paging.value.complete(res.data.list);
		//       }).catch(res => {
		// 	// 如果请求失败写paging.value.complete(false);
		// 	// 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
		// 	// 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可

		paging.value.complete(postData.value);
	}
	const clicks = () => {
		uni.navigateTo({
			url:'/pages/community/publish'
		})
	}
	const swiperAnimationfinish = () => {
		console.log(1111);
	}
</script>
<style lang="scss" scoped>
	.content{
		margin: 20rpx;
		height: 90vh;
		overflow-y: scroll;
		swiper-item{
			width: 100%;
			height: 10000rpx;
		}
	}
	.dragball{
		 background: linear-gradient(180deg, #5662E1 0%, #614793 100%);
		 width: 100rpx;
		 height: 100rpx;
		 border-radius: 50%;
		 text-align: center;
		 line-height: 80rpx;
		 font-size: 90rpx;
		 font-weight: bold;
		 image{
			 width: 100%;
			 height: 100%;
		 }
	}
	

</style>