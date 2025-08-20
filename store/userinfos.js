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
		async getUserinfo(params) {
			const res = await getUserinfo(params)
             this.userinfo = res.data
			 console.log(this.userinfo,'this.userinfo = res.da');
		},
	},
});