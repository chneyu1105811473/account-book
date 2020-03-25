import axios from "axios";
import { API_URL } from "@/global/const";
import commonUtil from "@/utils/common";
import { isEmpty, get } from "lodash";

const http = axios.create({
    timeout: 20000,
    baseURL: API_URL,
    responseType: "json",
    headers: {
        common: {
            Accept: "*/*",
        },
    },
});

http.interceptors.request.use(
    (config) => {
        config.headers.Authorization = commonUtil.getToken();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

const requestHandle = (params: object) => {
    return new Promise((resolve, reject) => {
        http(params).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            const data = get(err, "response.data");
            if (!isEmpty(data) && !validateUnth(data)) {
                return;
            }
            reject(data);
        });
    });
};

function validateUnth(data: any) {
    // 未授权或授权过期，重新登录 99999状态码待验证
    // if (data.errorCode === 99999) {
    //     commonUtil.delToken();
    //     window.location.href = "/";
    //     return false;
    // }
    return true;
}

export default {
    post(url: string, params: any) {
        return requestHandle({
            method: "post",
            url,
            data: params,
        });
    },
    get(url: string, params: any = null) {
        return requestHandle({
            method: "get",
            url: commonUtil.queryString(url, params),
        });
    },
    delete(url: string, params: any = null) {
        return requestHandle({
            method: "delete",
            url: commonUtil.queryString(url, params),
        });
    },
    put(url: string, params: any) {
        return requestHandle({
            method: "put",
            url,
            data: params,
        });
    },
};
