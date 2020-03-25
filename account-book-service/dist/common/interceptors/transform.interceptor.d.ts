import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ResWrapper } from '../dto/response';
export declare class TransformInterceptor<T> implements NestInterceptor<T, ResWrapper<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<ResWrapper<T>> | Promise<Observable<ResWrapper<T>>>;
}
