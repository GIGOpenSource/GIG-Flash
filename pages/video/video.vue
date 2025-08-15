<template>
	<z-paging ref="pagingRef" v-model="dataList" @query="queryList">

		<template #top>
			<view class="back" @click="handlClickBack">
				<up-icon name="arrow-left" size="18" color="#fff"></up-icon>
			</view>
			<!-- 视频 -->
			<video-player></video-player>

			<!-- 广告 -->
			<advertisement></advertisement>

			<up-tabs :list="tabs" :activeStyle="{
			    color: '#fff',
			    fontWeight: 'bold',
			    transform: 'scale(1.05)'
			}" :inactiveStyle="{
			    color: 'rgba(255,255,255, .5)',
			    transform: 'scale(1)'
			}" lineColor="#fff" @click="handleClickTab"></up-tabs>
		</template>


		<template #bottom>

			<view class="comment-btn" v-show="currentTab === 1">
				<up-input placeholder="输入评论内容" border="surround" shape="circle" :customStyle="{
						backgroundColor:'#fff',
					}" v-model="commenValue"></up-input>

				<up-button text="发表" shape="circle" class="custom-style" @click="publish"></up-button>
			</view>
		</template>

		<!-- 简介 -->
		<introduction v-show="currentTab === 0"></introduction>

		<!-- 评论 -->
		<comment-page v-show="currentTab === 1" :list="commentList"></comment-page>
	</z-paging>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'

	import videoPlayer from '@/components/video-player/video-player.vue'
	import advertisement from '@/components/advertisement/advertisement.vue'
	import Introduction from './components/Introduction.vue'
	import CommentPage from './components/CommentPage.vue'

	const pagingRef = ref(null)
	const dataList = ref([])

	const currentTab = ref(0)
	const tabs = ref([{
		name: '简介'
	}, {
		name: '评论'
	}])
	const commentList = reactive([{
		time:'2025-12-20 18:00:00',
		con:'是神落在人间的镜子，风一吹，碎了满吹，碎了满吹，碎了满吹，碎了满吹，碎了满',
		givenum:102,
		flag:false
	},{
		time:'2025-12-20 18:00:00',
		con:'是神落在人间的镜子，风一吹，碎了满吹，碎了满吹，碎了满吹，碎了满吹，碎了满',
		givenum:10,
		flag:true
	}])

	const commenValue = ref('')

	const handleClickTab = (e) => {
		currentTab.value = e.index
	}
	const handlClickBack = (e) => {
		uni.navigateBack()
	}

	const queryList = () => {}
	
	const publish = () => {
			let time =  uni.$u.timeFormat(Date.now(), 'yyyy-mm-dd hh:MM:ss');
			 commentList.unshift({
				 con:commenValue.value,
				 time:time,
				 givenum:0
			 })
			 con.value = ''
		}
		
</script>

<style lang="scss" scoped>
	.comment-btn {
		padding: 24rpx 30rpx;
		background: linear-gradient(175.26deg, #311F4F 14.46%, #1E1B33 122.11%);
		display: flex;
		align-items: center;

		.u-input--circle {
			padding: 3px 20rpx !important;
		}
	}

	.back {
		border-radius: 50%;
		padding: 10rpx;
		background-color: rgba(0, 0, 0, 0.2);
		position: fixed;
		top: 40rpx;
		left: 30rpx;
		z-index: 99;
	}

	.custom-style {
		width: 100rpx;
		height: 64rpx;
		background: linear-gradient(180deg, #5662E1 0%, #614793 100%);
		color: #fff;
		border: none;
		margin-left: 20rpx;

	}
</style>