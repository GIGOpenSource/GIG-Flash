import {
	getRequest,
	postRequest
} from '@/utils/http.js'

export const updataUserinfo = (params) => {
	return postRequest('/users', params)
}