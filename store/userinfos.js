import {
	defineStore
} from 'pinia';
import {
	getUserinfo
} from '@/api/public.js'
export const userinfoStore = defineStore('userinfos', {
	state: () => {
		return {
			userinfo: {}, //用户信息
		};
	},
	actions: {
		async getUserinfo() {
			const res = await getUserinfo({ id: uni.getStorageSync('userinfo').id})
             this.userinfo = res.data
			 console.log(this.userinfo,'this.userinfo = res.da');
		},
	},
});