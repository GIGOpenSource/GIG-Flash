import {
	getRequest,
	postRequest
} from '@/utils/http.js'

//创建社区内容
export const createCommunity = (params) => {
	return postRequest('/social/dynamics/create', params)
}

//获取推荐社区列表
export const communityList = (params) => {
	return postRequest('/social/dynamics/query', params)
}
//关注
export const getFollwingList = (params) => {
	return getRequest('/social/dynamics/following', params)
}
//最新
export const getLatestList = (params) => {
	return getRequest('/social/dynamics/latest', params)
}
//详情
export const getDetails = (params) => {
	return getRequest('/social/dynamics/detail', params)
}

//同城


//点赞
export const addLike = (params) => {
	return postRequest('/social/dynamics/like/increase', params)
}

//取消点赞
export const likeDelete =  params => {
    return postRequest('/social/dynamics/like/decrease', params);
}

//分享
export const addShare = (params) => {
	return postRequest('/social/dynamics/share/increase', params)
}

//创建评论
export const addComment = (params) => {
	return postRequest('/comments/create', params)
}

//获取评论
export const getCommentList = (params) => {
	return getRequest('/comments/list', params)
}




