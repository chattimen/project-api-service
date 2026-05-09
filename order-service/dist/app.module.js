"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const order_controller_1 = require("./order/order.controller");
const order_entity_1 = require("./order/order.entity");
const order_service_1 = require("./order/order.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'better-sqlite3',
                database: 'orders.db',
                entities: [order_entity_1.Order],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order]),
            microservices_1.ClientsModule.register([
                {
                    name: 'STOCK_PACKAGE',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        package: 'stock',
                        protoPath: (0, path_1.join)(__dirname, 'stock.proto'),
                        url: 'localhost:5000',
                    },
                },
                {
                    name: 'KAFKA_CLIENT',
                    transport: microservices_1.Transport.KAFKA,
                    options: { client: { brokers: ['localhost:9092'] } },
                },
            ]),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map