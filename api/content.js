import { getRequest, postRequest } from "@/utils/http";

// 推荐列表
export const getContentList =  params => {
    return getRequest('/content/core/list', params);
}

