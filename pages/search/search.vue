<template>
	<!-- 参考这个 -->
	<z-paging ref="paging" v-model="dataList" @query="queryList">
		<template #top>

			<!-- 导航栏 -->
			<up-navbar bgColor="transparent" leftIconColor="#fff" placeholder autoBack :fixed="false">
				<template #left>

				</template>

				<template #right>
					<view class="search">
						<view class="search_left">							
							<up-icon name="search" color="#fff" size="22"></up-icon>
							<input type="text" value="" placeholder="在这里输入消息内容" />
						</view>
						
						<text>搜索</text>
					</view>
				</template>
			</up-navbar>


		</template>


		<!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
		<!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
		<view class="content">
			<!-- 历史搜索 -->
			<view class="history_search">
				<view class="title_box">
					<view class="title">历史搜索</view>
					<view class="clear_btn" @click="clearHistoryHandle">
						清除
					</view>
				</view>
				<view class="history_list">
					<view class="item" v-for="i in 5" :key="i">
						历史搜索
					</view>
				</view>
			</view>

			<!-- 选择标签 -->
			<view class="select_tag">
				<view class="title">
					选择标签
				</view>
				<view class="tags_box">
					<view class="tag_list" v-for="(item,i) in tagsList" :key="i">
						<view class="tag_class">
							{{item.name}}：
						</view>
						<view class="lebel_list">
							<view :class="['item',sub?.checked?'active':'']" 
							 v-for="(sub,j) in item.children" :key='j' 
							 @click="selectLabelHandle(item,i,sub,j)">
								{{sub.label}}
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!--  -->
			<view class="all_video">
				<view class="title">
					全部视频列表
				</view>
				<view class="card-list">
					<card-view v-for="item in 6" @click="handleToLongVideo"></card-view>
				</view>
			</view>
		</view>

	</z-paging>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import CardView from '../discover/components/CardView/CardView.vue'
	// 标签数组
	const tagsList = ref([{
			name: '类型',
			children: [{
					label: '影片',
					value: 1
				},
				{
					label: '帖子',
					value: 2
				},
				{
					label: '动漫',
					value: 3
				}
			],
		},
		{
			name: '排序',
			children: [{
					label: '热门影视',
					value: 1
				},
				{
					label: '收藏最多',
					value: 2
				},
				{
					label: '最新上架',
					value: 3
				}
			],
		},
		{
			name: '标签',
			children: [{
					label: '全部标签',
					value: 1
				},
				{
					label: '标签1',
					value: 2
				},
				{
					label: '标签2',
					value: 3
				},
				{
					label: '标签4',
					value: 4
				},
				{
					label: '标签5',
					value: 5
				},
				{
					label: '标签6',
					value: 6
				}
			],
		},
		{
			name: '价格',
			children: [{
					label: '全类型',
					value: 1
				},
				{
					label: '免费VIP',
					value: 2
				},
				{
					label: '付费解锁',
					value: 3
				}
			],
		},
		{
			name: '时间',
			children: [{
					label: '本周',
					value: 1
				},
				{
					label: '本月',
					value: 2
				},
				{
					label: '半年',
					value: 3
				},
				{
					label: '更久',
					value: 4
				}
			],
		}
	])

	// 定义方法  
	const rightClick = () => {
		console.log('rightClick');
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
	
	// 清除历史搜索记录
		const clearHistoryHandle = ()=>{
	
	}
	//xuanzebiaoqian
	 const selectLabelHandle = (item,i,sub,j)=>{
		 item.children[j].checked = !sub?.checked
	 }
	 const handleToLongVideo = ()=>{
	 		  uni.navigateTo({
	 		  	url:'/pages/video/video'
	 		  })
	 }
	
</script>



<style lang="scss">
	.search{
		width: 600rpx;
		display: flex;
		justify-content: space-between;
		.search_left{
			display: flex;
			align-items: center;
		}
	}
	.content {
		padding: 20rpx;

		.history_search {
			margin-bottom: 6rpx;
			.title_box {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			color: rgba(255, 255, 255, 0.7);
			font-size: 30rpx;

			.history_list {
				display: flex;
				flex-wrap: wrap;
				margin-top: 26rpx;

				.item {
					background: rgba(255, 255, 255, 0.1);
					padding: 7rpx 23rpx;
					border-radius: 26rpx;
					margin: 0 40rpx 40rpx 0;
				}
			}
		}

		.select_tag {
			margin-bottom: 46rpx;
			.title {
				color: rgba(255, 255, 255, 0.7);
				font-size: 30rpx;
				margin-bottom: 20rpx;
			}

			.tags_box {
				background: rgba(255, 255, 255, 0.1);
				padding: 40rpx;
				border-radius: 10rpx;

				.tag_list {
					margin-bottom: 40rpx;
					display: flex;

					&:last-child {
						margin-bottom: 0;
					}

					.tag_class {
						width: 100rpx;
					}

					.lebel_list {
						display: flex;
						flex-wrap: nowrap;
						overflow-x: auto;
						flex:1;
						.item {
							margin-right: 40rpx;
							word-break: keep-all;
							&.active {
								color: mediumpurple;
							}
							
						}
					}
				}
			}
		}
	}





	.all_video {
		.title {
			color: rgba(255, 255, 255, 0.7);
			font-size: 30rpx;
			margin-bottom: 20rpx;
		}
		.card-list {
			display: flex;
			flex-wrap: wrap;
			margin-top: 20rpx;
		
			.card-view {
				margin-right: 20rpx;
				margin-bottom: 20rpx;
		
				&:nth-child(2n) {
					margin-right: 0;
				}
			}
		}
	}
</style>