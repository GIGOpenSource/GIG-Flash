import {
	getRequest,
	postRequest
} from '@/utils/http.js'

// 广告查询
export const getAdsList = (params) => {
	return getRequest('/ads/list', params)
}
// 用户信息
export const getUserinfo = (params) => {
	return getRequest('/auth/current-user', params)
}

// 用户兴趣标签
export const userInterestLabel = params => {
	return getRequest('/user-interest-tags/list', params)
}