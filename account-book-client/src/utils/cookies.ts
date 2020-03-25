/**
 * cookie操作
 */
export default {
    getCookie(key: string): any {
        if (document.cookie.length > 0) {
            let start: number = document.cookie.indexOf(key + "=");
            if (start !== -1) {
                start = start + key.length + 1;
                let end: number = document.cookie.indexOf(";", start);
                if (end === -1) {
                    end = document.cookie.length;
                }
                return unescape(document.cookie.substring(start, end));
            }
        }
        return "";
    },
    setCookie(key: string, value: string, expiredays: number) {
        const exdate: Date = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie =
            key +
            "=" +
            escape(value) +
            (expiredays == null ? "" : ";expires=" + exdate.toUTCString());
    },
    delCookie(key: string, domain: string = "") {
        const exdate: Date = new Date();
        document.cookie =
            key + "=" + (domain ? `;domain=${domain}` : "") + (";expires=" + (exdate as any).toGMTString()) + ";path=/";
    },
};
