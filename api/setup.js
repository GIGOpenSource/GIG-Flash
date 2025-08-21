import {
	getRequest,
	postRequest
} from '@/utils/http.js'

export const updataUserinfo = (params) => {
	return postRequest('/users', params)
}

// 登录
export const login = (data) => {
	console.log('data', data, );
	return postRequest('/auth/login', data, {
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}