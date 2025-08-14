<template>
	<view class="">
		<up-navbar bgColor="transparent" placeholder :autoBack="false" :fixed="false">
			<template #left>
				<up-icon name="arrow-left" color="#ffffff" size="20"></up-icon>  
			</template>
			<template #center>
				设置
			</template>
			<template #right>
				<up-icon name="more-dot-fill" color="#ffffff" size="28"></up-icon>
			</template>
		</up-navbar>
		<view class="form" v-for="(item,index) in form" :key="index" @click="toPath(item.path)">
			<view class="">{{item.title}}</view>
			<up-icon name="arrow-right" color="#ffffff" size="20"></up-icon>  
		</view>
	</view>
</template> 

<script setup>
import {ref,reactive} from 'vue'
const form = reactive([{
	title:'资料编辑',
	path:'/pages/my/data-editing'
},{
	title:'任务编辑',
	path:''
},{
	title:'消费与充值',
	path:''
},{
	title:'我的钱包',
	path:''
},{
	title:'在线客服',
	path:''
},{
	title:'邀请码填写',
	path:''
},{
	title:'创作者申请（后期上线）',
	path:''
}])
 const toPath = (url) => {
		   uni.navigateTo({
		   	url
		   })
	  }
</script>

<style lang="scss" scoped>
	.form{
		display: flex;
		padding: 30rpx 0;
		justify-content: space-between;
		margin: 0 30rpx;
		border-bottom: 1rpx solid rgba(255, 255, 255, .1);
	}
	.form:nth-of-type(8){
		border-bottom: none;
	}
</style>