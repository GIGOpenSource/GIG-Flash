<template>
	<view class="">
		<person :userinfo="userinfo"/>
	</view>
</template>

<script setup>
	import { promise } from '../../uni_modules/uview-plus/libs/function/test'
import person from './components/person.vue'
	import { userinfoStore } from '@/store/userinfos.js'
	import { storeToRefs } from 'pinia'
	import { onMounted } from 'vue'
	const store = userinfoStore()
	onMounted(async () => {
	//获取用户信息	
	await store.getUserinfo()
		const { userinfo } = storeToRefs(store)
	})
	

</script>

<style lang="scss" scoped>

</style>