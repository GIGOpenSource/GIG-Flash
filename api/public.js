import {
	getRequest,
	postRequest
} from '@/utils/http.js'

export const getAdsList = (params) => {
	return getRequest('/ads/list', params)
}
export const getUserinfo = (params) => {
	return getRequest('/users', params)
}