"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet = require("helmet");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const api_params_validation_pipe_1 = require("./common/pipes/api-params-validation.pipe");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(helmet());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalPipes(new api_params_validation_pipe_1.ApiParamsValidationPipe());
    app.enableCors({
        origin: '*',
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map