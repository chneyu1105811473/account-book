import { HttpException, HttpStatus } from '@nestjs/common';
import { IResponse } from '../interfaces/response.interface';
export declare class AccessForbidden extends HttpException {
    constructor(options: IResponse<any>, status?: HttpStatus);
}
