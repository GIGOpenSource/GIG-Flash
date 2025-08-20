<template>
	<view class="">
		<person />
	</view>
</template>

<script setup>
	import person from './components/person.vue'
	import {
		userinfoStore
	} from '@/store/userinfos.js'
	const store = userinfoStore()
	store.getUserinfo()
	console.log(111111111)
</script>

<style lang="scss" scoped>

</style>