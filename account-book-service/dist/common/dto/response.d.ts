import { ERROR_CODES } from '../../consts';
export declare class ResWrapper<T> {
    readonly errorCode: ERROR_CODES;
    readonly message: string;
    readonly data: T;
    readonly success: boolean;
    constructor(errorCode: ERROR_CODES, message: string, data: T, success?: boolean);
}
