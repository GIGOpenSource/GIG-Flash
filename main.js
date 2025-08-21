import App from './App'
import uviewPlus from '@/uni_modules/uview-plus'
import {
	createPinia
} from 'pinia'

const pinia = createPinia()


uni.$zp = {
	config: {
		//配置分页默认pageSize为15
		'default-page-size': 20,
		//...
	}
}


// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)

	app.use(uviewPlus).use(pinia)
	return {
		app
	}
}
// #endif