<template>
  <tabs 
    v-model="activeTab" 
    :list="tabList"
    :scroll="true"
    :bar-width="50"
    @change="onTabChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import Tabs from '@/components/tabs/tabs.vue'

const activeTab = ref(0)
const tabList = ref([{ name: '标签1' }, { name: '标签2' }])

const onTabChange = (index) => {
  console.log('当前激活的 tab:', index)
}
</script>