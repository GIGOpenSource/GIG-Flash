<template>
	<z-paging ref="paging" v-model="dataList" @query="queryList">
		<up-navbar bgColor="transparent" placeholder :autoBack="isBack" :fixed="false" >
			<template #left>
				<up-icon name="arrow-left" color="#ffffff" size="20" v-if="isBack"></up-icon>
			</template>
			<template #right>
				<text class="" @click="toPath('/pages/my/message')">消息中心</text>
				<text class="setup" @click="toPath('/pages/my/setup')">设置</text>
			</template>
		</up-navbar>
		<view class="content">
			<userinfo :isFollow="isBack"/>
			<vip v-if="!isBack"/>
			<!-- 动态，视频，互动 -->
			<view class="tabs">
				<view v-for="(item,index) in tarbar" :key="index" :class="current == index ? 'current':''"
					@click="clicks(index)">{{item}}</view>
			</view>
			<active v-if="current == 0" :isfollow="isBack" :more="true"/>
			<myvideo v-if="current == 1" />
			<interact v-if="current == 2" />
			
		</view>
		<view style="height: 80rpx;" v-if="isBack"></view>
	</z-paging>
	
	<view class="private-message" v-if="isBack" @click="toPath('/pages/my/dialogue')">私信</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		 onMounted 
	} from 'vue';
	import userinfo from './userinfo.vue'
	import vip from './vip.vue'
	const props = defineProps({
		isBack:{ 
			type:Boolean,
			default:false
		}
	})
	const list = ref([{
		name: '消息中心'
	}, {
		name: '设置'
	}])
	const tarbar = reactive(['动态', '视频', '互动'])
	const current = ref(0)
	const clicks = (index) => {
		current.value = index
	}
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
	const onTabChange = (tab) => {
		console.log(tab);
	}
	const toPath = (url) => {
		uni.navigateTo({
			url
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		// background: pink;
		margin: 30rpx;
	}

	.setup {
		margin-left: 30rpx;
	}

	.tabs {
		display: flex;
		margin: 30rpx 0;

		view {
			width: 33%;
			text-align: center;

			height: 70rpx;
			line-height: 70rpx;
			border-radius: 80rpx;
			color: #fff;

		}

		.current {
			background: #ffffff;
			color: #000;
		}
	}
	.private-message{
		background: linear-gradient(180deg, #5662E1 0%, #614793 100%);
		width: 92%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 80rpx;
       position: fixed;
	   left: 30rpx;
	   bottom: 30rpx;
	}
</style>