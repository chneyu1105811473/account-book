import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class ExceptionWrapper implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): any;
    private getRes;
    getMessage(message: object | string | undefined): any;
}
