import { BadRequestException, HttpStatus } from '@nestjs/common';
import { IResponse } from '../interfaces/response.interface';
export declare class ParamsError extends BadRequestException {
    constructor(options: IResponse<any>, status?: HttpStatus);
}
