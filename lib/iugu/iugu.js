"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iugu_methods_1 = __importDefault(require("./iugu_methods"));
var customers_1 = __importDefault(require("./resources/customers"));
var payment_token_1 = __importDefault(require("./resources/payment_token"));
var invoices_1 = __importDefault(require("./resources/invoices"));
var charges_1 = __importDefault(require("./resources/charges"));
var accounts_1 = __importDefault(require("./resources/accounts"));
var marketplaces_1 = __importDefault(require("./resources/marketplaces"));
var plans_1 = __importDefault(require("./resources/plans"));
var subscriptions_1 = __importDefault(require("./resources/subscriptions"));
var transfers_1 = __importDefault(require("./resources/transfers"));
var Iugu = (function () {
    function Iugu() {
    }
    Object.defineProperty(Iugu.prototype, "customers", {
        get: function () {
            return customers_1.default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iugu.prototype, "paymentToken", {
        get: function () {
            return payment_token_1.default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iugu.prototype, "invoices", {
        get: function () {
            return invoices_1.default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iugu.prototype, "charge", {
        get: function () {
            return charges_1.default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iugu.prototype, "accounts", {
        get: function () {
            return accounts_1.default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iugu.prototype, "marketplaces", {
        get: function () {
            return marketplaces_1.default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iugu.prototype, "plans", {
        get: function () {
            return plans_1.default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iugu.prototype, "subscriptions", {
        get: function () {
            return subscriptions_1.default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iugu.prototype, "transfers", {
        get: function () {
            return transfers_1.default;
        },
        enumerable: false,
        configurable: true
    });
    Iugu.prototype.setApiKey = function (apikey) {
        iugu_methods_1.default.setApiKey(apikey);
    };
    return Iugu;
}());
exports.default = new Iugu();
