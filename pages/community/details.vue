<template>
	<z-paging ref="paging" v-model="dataList" @query="queryList">
		<up-navbar bgColor="transparent" placeholder :autoBack="true" :fixed="false">
			<template #left>
				<up-icon name="arrow-left" color="#ffffff" size="20"></up-icon>
			</template>
			<template #center>
				动态详情
			</template>
		</up-navbar>
		<!-- 作品 -->
		<view class="content">
			<active :isList="false"/>
		</view>
		<!-- 评论 -->
		<comment :list="commentList"/>
		<view style="height: 100rpx;"></view>
		<!-- 发表评论 -->
		<view class="bottom">
			<input type="text" v-model="con" placeholder="输入评价内容" />
			<view class="publish" @click="publish">发表</view>
		</view>
	</z-paging>
</template>

<script setup>
	import {
		ref,reactive
	} from 'vue';
	import comment from './components/comment.vue'
	import SocialPost from './components/SocialPost.vue'
	const paging = ref(null)
	// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
	const dataList = ref([])
   const con = ref('')
   const commentList = reactive([
	  {
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:false,
		  givenum:20
	  }, {
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:true,
		   givenum:10,
		   
	  },{
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:true,
		   givenum:10,
		   
	  },{
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:true,
		   givenum:10,
		   
	  },{
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:true,
		   givenum:10,
		   
	  },{
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:true,
		   givenum:10,
		   
	  },{
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:true,
		   givenum:10,
		   
	  },{
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:true,
		   givenum:10,
		   
	  },{
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:true,
		   givenum:10,
		   
	  },{
		  con:'评价内容',
		  time:'2025-05-05 18:00:00',
		  flag:true,
		   givenum:10,
		   
	  },
   ])

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
		}]);
		// })
	}
	const publish = () => {
		let time =  uni.$u.timeFormat(Date.now(), 'yyyy-mm-dd hh:MM:ss');
		 commentList.unshift({
			 con:con.value,
			 time:time,
			  givenum:0
		 })
		 con.value = ''
	}
	
</script>

<style lang="scss" scoped>
	.content {
		margin: 20rpx;
	}

	.bottom {
		background: linear-gradient(175.26deg, #311F4F 14.46%, #1E1B33 122.11%);
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		padding: 30rpx 30rpx 60rpx 30rpx;
		box-sizing: border-box;
		justify-content: space-between;
		font-size: 26rpx;

		input {
			background: #fff;
			width: 80%;
			font-size: 26rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 60rpx;
			text-indent: 30rpx;
			color: #000;
		}

		.publish {
			background: linear-gradient(180deg, #5662E1 0%, #614793 100%);
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			width: 100rpx;
			border-radius: 60rpx;
		}
	}
</style>