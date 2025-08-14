<template>
	
	<z-paging ref="paging" v-model="dataList" @query="queryList">
		<template #top>
			
			<!-- 导航栏 -->
			<up-navbar bgColor="transparent" color="#fff" placeholder autoBack :fixed="false">
				<template #left>
					<up-icon name="arrow-left" color="#fff" size="18"></up-icon>
				</template>
				
				<template #center>
					<view>推荐APP</view>
				</template>
				
				<!-- <template #right>
					<up-icon name="more-dot-fill" color="#fff" size="18"></up-icon>
				</template> -->
			</up-navbar>
		</template>
		
		
		<!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
		<!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
	    <view class="content">
	    	<view class="app-item" v-for="item in 200">
				 <up-image  :src="src" radius="32rpx" width="120rpx" height="120rpx" @click="handleClickApp"></up-image>
				 <view class="app-name">app{{item}}</view>
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
	
.app-item{
	margin-left: 27rpx;
	text-align: center;
	margin-bottom: 20rpx;
	
	.app-name{
		font-size: 10px;
		margin-top: 5rpx;
	}
	&:nth-child(5n+1){
		margin-left: 0;
	}
}
}

</style>