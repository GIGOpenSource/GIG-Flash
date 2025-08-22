import {
	getRequest,
	postRequest,
	putRequest
} from '@/utils/http.js'

export const updataUserinfo = (id,params) => {
	return putRequest('/users/'+id, params)
}

// 登录
export const login = (data) => {
	return postRequest('/auth/login', data, {
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}