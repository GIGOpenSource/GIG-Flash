<template>
	<z-paging ref="paging" scroll-x  :loading-more-enabled="false" :refresher-enabled="false" v-model="dataList" @query="queryList">
		<template #top>
			
			<!-- 导航栏 -->
			<up-navbar bgColor="transparent" color="#fff" placeholder autoBack :fixed="false">
				<template #left>
					<up-icon name="arrow-left" color="#fff" size="18"></up-icon>
				</template>
				
				<template #center>
					<view>游戏详情</view>
				</template>
				
				<template #right>
					<view>分享</view>
				</template>
			</up-navbar>
		</template>
		
		<template #bottom>
			<view class="bottom-btn">
				<up-button text="立即下载" class="custom-down" shape="circle"></up-button>
			</view>
		</template>
		
		
	    <view class="content">
			
			<view class="game-info">
				<up-image :src="src" width="200rpx" height="200rpx" radius="30rpx"></up-image>
				
				<view class="info">
					<view class="name">App Name</view>
					<view class="des">七五零九南雄府出去就围绕出去奶萨反馈请问的栓红领巾嗲早就坏</view>
				</view>
			</view>
			
			<view class="screen-shoot">
				<view class="tit">游戏截图</view>
				 <scroll-view scroll-x="true"  style="white-space: nowrap;">
					 <view class="scroll-shoot">
						 <up-image src="/static/images/1.png" width="600rpx" height="320rpx" radius="30rpx" style="margin-right:40rpx ;" ></up-image>
						 <up-image src="/static/images/2.png" width="600rpx" height="320rpx" radius="30rpx" style="margin-right:40rpx ;"></up-image>
					 </view>
				 </scroll-view>
						
				
			</view>
			
			<view class="long-des">
				<view class="tit">游戏截图</view>
				<view class="des">文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容</view>
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
				paging.value.complete([{title:'123'},{title:"2243"},{title:"2243"},{title:"2243"},{title:"2243"},{title:"2243"},{title:"2243"},{title:"2243"},{title:"2243"},{title:"2243"},{title:"2243"},{title:"2243"}]);
			// })
	  }
</script>

<style lang="scss" scoped>


.content{
	padding: 20rpx;
	
	display: flex;
	flex-wrap: wrap;
	
	.game-info{
		display: flex;
		.info{
			margin-left: 20rpx;
			.name{
				margin-top: 20rpx;
				font-size: 21px;
			}
			.des{
				margin-top: 20rpx;
				font-size: 12px;
				color: rgba(255, 255, 255, .6);
			}
		}
		
	}
	
	.screen-shoot{
		margin-top: 50rpx;
		
		.tit{
			font-size: 15px;
			margin-bottom: 20rpx;
		}
		
		.scroll-shoot{
			display: flex;
		}
	}
}

.long-des{
	margin-top: 50rpx;
	
	.tit{
		font-size: 15px;
		margin-bottom: 20rpx;
	}
	.des{
		font-size: 17px;
		
	}
}

.bottom-btn{
	background: linear-gradient(180deg, #1A1921 0%, #312744 100%);
	padding: 40rpx 30rpx;
	
	.custom-down{
		background: linear-gradient(180deg, #5662E1 0%, #614793 100%);
		color: #fff;
		font-size: 17px;
		font-weight: 400;
		border: none;
		height: 85rpx;
	}
}
</style>