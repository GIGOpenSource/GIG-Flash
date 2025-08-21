import { getRequest, postRequest } from "@/utils/http";

// 查询列表内容
export const getContentList =  params => {
    return getRequest('/content/core/list', params);
}