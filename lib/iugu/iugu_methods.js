"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __importDefault(require("./utils"));
var axios = __importStar(require("axios"));
var IuguMethods = (function () {
    function IuguMethods() {
    }
    Object.defineProperty(IuguMethods.prototype, "url", {
        get: function () {
            return 'https://api.iugu.com/v1';
        },
        enumerable: false,
        configurable: true
    });
    IuguMethods.prototype.setApiKey = function (apikey) {
        this.apiKey = apikey;
    };
    IuguMethods.prototype.createIuguMethod = function (method) {
        var self = this;
        return function (data, urlParams, queryParams) {
            return __awaiter(this, void 0, void 0, function () {
                var params, path, fullURL, configs, response, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!self.apiKey) {
                                throw new Error('Você deve chamar setApiKey');
                            }
                            if ((urlParams !== undefined && !method.urlParams) ||
                                (urlParams !== undefined &&
                                    !method.urlParams.every(function (param) { return urlParams.get(param) != null; }))) {
                                throw new Error('Você deve passar todos os parâmetros de URL. Esperado: ' + urlParams.keys() + ' Recebido: ' + method.urlParams);
                            }
                            if (data instanceof Object) {
                                if (method.checkErrors !== undefined) {
                                    method.checkErrors(data);
                                }
                                data = JSON.stringify(data);
                            }
                            params = urlParams || new Map();
                            path = utils_1.default.interpolateURL(method.path, params);
                            fullURL = self.url + path;
                            if (queryParams !== undefined && queryParams.size !== 0) {
                                fullURL += utils_1.default.interpolateQueryParams(queryParams);
                            }
                            configs = {
                                auth: {
                                    username: self.apiKey,
                                    password: ''
                                },
                                data: data,
                                url: fullURL,
                                method: method.method,
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            };
                            return [4, axios.default.request(configs)];
                        case 1:
                            response = _a.sent();
                            result = response.data;
                            return [2, result];
                    }
                });
            });
        };
    };
    return IuguMethods;
}());
exports.default = new IuguMethods();
