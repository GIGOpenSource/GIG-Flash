<template>
    <view class="">
		<person/>
	</view>
</template>

<script setup>
import person from './components/person.vue'
uni.$getRequest('/ads/list?adType=banner&isValid=true&currentPage=1&pageSize=10',{}).then(res => {
	console.log(111111111111111111);
})
</script>

<style lang="scss" scoped>
	
</style>