"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'stock',
            protoPath: (0, path_1.join)(__dirname, 'stock.proto'),
            url: 'localhost:5000',
        },
    });
    await app.listen();
    console.log('stock-service gRPC running on port 5000');
}
bootstrap();
//# sourceMappingURL=main.js.map