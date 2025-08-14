<template>
	<z-paging ref="paging" v-model="dataList" @query="queryList">
		<up-navbar bgColor="transparent" placeholder :autoBack="true" :fixed="false">
			<template #left>
				<up-icon name="arrow-left" color="#ffffff" size="20"></up-icon>
			</template>
			<template #center>
				<up-tabs :list="tabs" @click="click" lineColor="#fff" :activeStyle="{ color: '#ffffff' }"
					:inactiveStyle="{ color: 'rgba(255,255,255,.4 )' }">
				</up-tabs>
			</template>
			<template #right>
				<up-icon name="more-dot-fill" color="#ffffff" size="28"></up-icon>
			</template>
		</up-navbar>

		<view class="content">
			<messageList v-if="current == 0" />
			<interact v-if="current == 1" />
			<noticeList v-if="current == 2" />
		</view>

	</z-paging>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import noticeList from './components/notice-list.vue'
	import messageList from './components/message-list.vue'
	const tabs = reactive([{
		name: '消息'
	}, {
		name: '互动'
	}, {
		name: '通知'
	}])
	const current = ref(0)
	const paging = ref(null)
	// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
	const dataList = ref([])
	const click = (item) => {
		current.value = item.index
	}
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
</script>

<style lang="scss" scoped>
	.content {
		margin: 20rpx;
	}
</style>