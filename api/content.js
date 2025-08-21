import {
	getRequest,
	postRequest
} from "@/utils/http";

// 推荐列表
export const getContentList = params => {
	return getRequest('/content/core/list', params);
}

// 发现列表
export const discoverList = params => {
	return getRequest('/content/core/listForFX', params)
}