<template>

	<z-paging ref="paging" v-model="dataList" @query="queryList">
		<template #top>

			<!-- 导航栏 -->
			<up-navbar bgColor="transparent" color="#fff" placeholder autoBack :fixed="false">
				<template #left>
					<up-icon name="arrow-left" color="#fff" size="18"></up-icon>
				</template>

				<template #center>
					<view>游戏推荐</view>
				</template>

				<!-- <template #right>
					<up-icon name="more-dot-fill" color="#fff" size="18"></up-icon>
				</template> -->
			</up-navbar>
		</template>


		<!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
		<!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
		<view class="content">

			<up-swiper height="166" radius="15" :list="bannerList" @change="change" @click="click"></up-swiper>

			<!-- 游戏分类 -->
			<view class="game-category">
				<up-tabs :list="categoryList" lineColor="transparent" :activeStyle="{
					color: '#fff',
					fontSize:'17px',
					fontWeight: 'bold'
				}" :inactiveStyle="{
					color: 'rgba(255,255,255, 0.6)',
					fontSzie: '15px'
				}"
				itemStyle="padding-top: 20rpx;padding-right:20rpx; padding-left:0;"
				></up-tabs>
			</view>

			<!-- 游戏列表 -->
			<view class="game-list">
				<view class="game-item" v-for="item in 20">
					<view class="game">
						<up-image src="/static/images/3.png" width="120rpx" height="120rpx" radius="20rpx"></up-image>
						<view class="des">
							<view class="name">APp name{{ item }}</view>
							<view class="sub">游戏简介{{item}}解决盼盼接就盘盘盘盘</view>
						</view>
					</view>

					<up-button text="查看详情" shape="circle" class="custom-btn" @click="handleToDetail"></up-button>
				</view>
			</view>
		</view>

	</z-paging>
</template>

<script setup>
	import {
		ref
	} from 'vue'



	// 定义方法  
	const rightClick = () => {
		console.log('rightClick');
	};

	const leftClick = () => {
		console.log('leftClick');
	};

	const bannerList = ref(['/static/images/1.png', '/static/images/2.png', '/static/images/3.png'])

	const categoryList = ref([{
		name: "全部分类"
	}, {
		name: '分类1'
	},
	{
		name: '分类1'
	},
	{
		name: '分类1'
	},
	{
		name: '分类1'
	},
	{
		name: '分类1'
	},
	{
		name: '分类1'
	},{
		name: '分类1'
	},{
		name: '分类1'
	},
	{
		name: '分类1'
	},
	{
		name: '分类1'
	},
	{
		name: '分类1'
	},
	])

	const change = () => {}
	const click = () => {}
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
	
	const handleToDetail = ()=>{
		uni.navigateTo({
			url:'/pages/fresh/recommend/game-detail'
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 20rpx;




		.game-item {
			display: flex;
			align-items: center;
			margin-top: 20rpx;

			.game {
				display: flex;
				align-items: center;
				flex: 1;

				.des {
					margin-left: 20rpx;

					.name {
						font-size: 17px;
						font-weight: bold;
					}

					.sub {
						font-size: 11px;
					}
				}
			}

			.custom-btn {
				background: linear-gradient(180deg, #5662E1 0%, #614793 100%);
				width: 180rpx;
				height: 80rpx;
				border-radius: 40rpx;
				border: none;
				font-size: 15px;
				color: #fff;

			}
		}
	}
</style>