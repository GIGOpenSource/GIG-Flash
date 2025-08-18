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
				<view @click="pubilsh">发布</view>
			</template>
		</up-navbar>
		<block v-for="(item,index) in form" :key="index">
			<textarea v-if="index == 2" :placeholder="item.name"></textarea>
			<view class="images" v-else-if="index == 3">
				<up-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
					:maxCount="10" uploadIcon="plus"></up-upload>
			</view>
			<view v-else class="back">
				<input  type="text" :placeholder="item.name" @focus="choose(index)" />
				<up-icon v-if="index == 0 || index == 4" name="arrow-right" color="#ffffff" size="20"></up-icon>
			</view>
		</block>
		<up-picker :show="show" :columns="columns" @cancel="show = false" @confirm="confirm"></up-picker>
	</view>
</template>


<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	const form = reactive([{
		name: '选择发布类型'
	}, {
		name: '输入发布标题'
	}, {
		name: '输入发布内容'
	}, {
		name: '图片'
	}, {
		name: '是否免费'
	}, {
		name: '设置价格（元）'
	}])
	const fileList1 = ref([]);
	const show = ref(false);
	const columns = reactive([
		['中国', '美国', '日本']
	]);

	// 删除图片
	const deletePic = (event) => {
		fileList1.value.splice(event.index, 1);
	};

	// 新增图片
	const afterRead = async (event) => {
		// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
		let lists = [].concat(event.file);
		let fileListLen = fileList1.value.length;
		lists.map((item) => {
			fileList1.value.push({
				...item,
				status: 'uploading',
				message: '上传中',
			});
		});
		for (let i = 0; i < lists.length; i++) {
			const result = await uploadFilePromise(lists[i].url);
			let item = fileList1.value[fileListLen];
			fileList1.value.splice(fileListLen, 1, {
				...item,
				status: 'success',
				message: '',
				url: result,
			});
			fileListLen++;
		}
	};

	const uploadFilePromise = (url) => {
		return new Promise((resolve, reject) => {
			let a = uni.uploadFile({
				url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
				filePath: url,
				name: 'file',
				formData: {
					user: 'test',
				},
				success: (res) => {
					setTimeout(() => {
						resolve(res.data.data);
					}, 1000);
				},
			});
		});
	};
	const choose = (index) => {
		if (index == 0) {
			columns[0] = ['视频', '动态']
			show.value = true
		} else if (index == 4) {
			columns[0] = ['是', '否']
			show.value = true
		}

	}
	const confirm = () => {
		show.value = false
	}
	const pubilsh = () => {
		uni.showToast({
			title: "发布成功",
			success:()=> {
				uni.navigateBack()
			}
		})
	}
</script>

<style lang="scss" scoped>
	.back,textarea {
		background: #212028;
		margin: 20rpx;
		padding: 20rpx;
		border-radius: 20rpx;
		width: 89%;
		display: flex;
		input{
			width: 95%;
		}
	}

	.images {
		margin: 0 20rpx;
	}
</style>
<style>
	/deep/ .u-upload__button {
		background: #212028 !important;
	}
</style>