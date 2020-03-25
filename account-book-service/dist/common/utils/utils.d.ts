import { ERROR_CODES } from '../../consts';
export declare function getNotEmptyOption(): {
    message: string;
    context: {
        errorCode: ERROR_CODES;
    };
};
export declare function getWrongTypeOption(type: string): {
    message: string;
    context: {
        errorCode: ERROR_CODES;
    };
};
export declare function getNotPositiveOption(): {
    message: string;
    context: {
        errorCode: ERROR_CODES;
    };
};
