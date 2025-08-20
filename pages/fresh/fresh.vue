<template>
	<z-paging ref="paging">
		<template #top>

			<!-- 导航栏 -->
			<up-navbar bgColor="transparent" placeholder :autoBack="false" :fixed="false">
				<template #left>
					<tabs :list="list" @change="onTabChange"></tabs>
				</template>
			</up-navbar>

		</template>

		<view class="content">
			<swiper class="swiper" duration="300" :current="currentPage">
				<swiper-item>
					<view class="card-list">
						<!-- <up-image src="/static/images/fresh1.png" width="345rpx" height="245rpx" radius="20rpx"
							mode="cover" style="margin-bottom: 20rpx;" @click="handleClickRoute('ai')"></up-image> -->
						<up-image src="/static/images/fresh2.png" width="345rpx" height="245rpx" radius="20rpx"
							mode="cover" style="margin-bottom: 20rpx;" @click="handleClickRoute('game')"></up-image>
						<up-image src="/static/images/fresh3.png" width="345rpx" height="245rpx" radius="20rpx"
							mode="cover" @click="handleClickRoute('app')" style="margin-left: 20rpx;"></up-image>
						<up-image src="/static/images/fresh4.png" width="345rpx" height="245rpx" radius="20rpx"
							mode="cover" @click="handleClickRoute('vip')"></up-image>
					</view>
				</swiper-item>
				<swiper-item>
					<!-- 任务中心 -->
					<task-page></task-page>
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
	import TaskPage from './TaskPage.vue'

	const currentPage = ref(0)

	const list = ref([{
			name: '推荐'
		},
		{
			name: '任务中心'
		}

	])



	const onTabChange = (tab) => {
		currentPage.value = tab.index
	}

	const handleClickRoute = (url) => {
		if (url === 'ai') return
		uni.navigateTo({
			url: '/pages/fresh/recommend/' + url
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 20rpx;
	}

	.swiper {
		height: 92vh;
	}

	.card-list {
		display: flex;
		flex-wrap: wrap;
	}
</style>