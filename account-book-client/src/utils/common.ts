import cookie from "./cookies";
import {toNumber} from "lodash";
export default {
    // 拼接url参数
    queryString(url: string, query: any): string {
        if (!query) {
            return url;
        }
        const list: string[] = [];
        for (const key in query) {
            if (query.hasOwnProperty(key)) {
                list.push(key + "=" + query[key]);
            }
        }
        const paramStr: string = list.join("&");
        return paramStr ? `${url}?${paramStr}` : url;
    },
    getToken() {
        return cookie.getCookie("token");
    },
    delToken() {
        cookie.delCookie("token");
    },
};

export function isPositive(value: string | number) {
    return toNumber(value) > 0;
}
