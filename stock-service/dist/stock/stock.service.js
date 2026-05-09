"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
let StockService = class StockService {
    constructor() {
        this.stocks = { 1: 10, 2: 5, 3: 0 };
    }
    checkAndReserve(productId, quantity) {
        const available = (this.stocks[productId] ?? 0) >= quantity;
        if (available)
            this.stocks[productId] -= quantity;
        return {
            available,
            message: available
                ? `Stock reserve (${quantity} unit(s) for product ${productId})`
                : `Stock insufficient for product ${productId}`,
        };
    }
};
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)()
], StockService);
//# sourceMappingURL=stock.service.js.map