<template>
	<view class="">
		<up-navbar bgColor="transparent" placeholder :autoBack="true" :fixed="false">
			<template #left>
				<up-icon name="arrow-left" color="#ffffff" size="20"></up-icon>
			</template>
			<template #center>
				资料编辑
			</template>
			<template #right>
				保存
			</template>
		</up-navbar>
		<view class="avatar" @click="uploadImage">
			<up-image :show-loading="true" :src="src" width="80px" height="80px" shape="circle"></up-image>
		</view>
		<view class="form" v-for="(item,index) in form" :key="index">
			<text>{{item.name}}</text>
			<up-textarea v-if="index == 2" v-model="item.key" placeholder="请输入内容" count maxlength="20"
				border="none"></up-textarea>
			<input type="text" v-else :placeholder="'请输入' + item.name" v-model="item.key" />

		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	const src = ref('https://cdn.uviewui.com/uview/album/1.jpg');
	const form = reactive([{
		name: '昵称',
		type: 'input',
		key: 'nickname'
	}, {
		name: 'ID',
		type: 'input',
		key: 'id'
	}, {
		name: '签名',
		type: 'textera',
		key: 'sign'
	}])
	const uploadImage = () => {
		uni.chooseImage({
			count: 1,
			type: 'file',
			success: (res) => {

			}
		})
	};
</script>

<style lang="scss" scoped>
	.avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 50rpx 0 30rpx 0;
	}

	.form {
		display: flex;
		margin: 20rpx;

		input {
			background: #212028;
			margin-left: 20rpx;
			padding: 15rpx 20rpx;
			width: 80%;
			border-radius: 10rpx;
		}

		text {
			display: block;
			width: 80rpx;
		}
	}

	.u-textarea {
		margin-left: 20rpx;
		background-color: #212028;
	}
</style>

<style>
	.u-textarea__count {
		background-color: #212028 !important;
	}
</style>