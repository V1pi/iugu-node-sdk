"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __importDefault(require("./common"));
var utils_1 = __importDefault(require("../utils"));
var IuguPaymentsTokens = (function (_super) {
    __extends(IuguPaymentsTokens, _super);
    function IuguPaymentsTokens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IuguPaymentsTokens.prototype.checkCreate = function (obj) {
        if (!utils_1.default.validateCreditCardNumber(obj.data.number)) {
            throw new Error('Cartão de crédito inválido');
        }
    };
    Object.defineProperty(IuguPaymentsTokens.prototype, "routeName", {
        get: function () {
            return 'payment_token';
        },
        enumerable: false,
        configurable: true
    });
    return IuguPaymentsTokens;
}(common_1.default));
exports.default = new IuguPaymentsTokens();
