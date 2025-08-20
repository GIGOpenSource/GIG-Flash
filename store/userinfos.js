import {
	defineStore
} from 'pinia';

export const userinfoStore = defineStore('userinfos', {
	state: () => {
		return {
			userinfo: {},//用户信息
		};
	},
	actions: {
		getUserinfo() {
			console.log('ZOULEMA ')
				uni.$getRequest('/users' , {id:uni.getStorageSync('userinfo').id}).then(res => {
					console.log(1111232221222211145111);
					this.userinfo = res.data
				})
		},
	},
});