"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IuguUtils = (function () {
    function IuguUtils() {
    }
    IuguUtils.prototype.validateCreditCardNumber = function (value) {
        if (/[^0-9-\s]+/.test(value))
            return false;
        var nCheck = 0;
        var bEven = false;
        value = value.replace(/\D/g, '');
        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n);
            var nDigit = parseInt(cDigit, 10);
            if (bEven && (nDigit *= 2) > 9)
                nDigit -= 9;
            nCheck += nDigit;
            bEven = !bEven;
        }
        return nCheck % 10 === 0;
    };
    IuguUtils.prototype.formatUUID = function (e) {
        var t = e.toUpperCase().replace('-', '');
        return (t.substr(0, 8) +
            '-' +
            t.substr(8, 4) +
            '-' +
            t.substr(12, 4) +
            '-' +
            t.substr(16, 4) +
            '-' +
            t.substr(20, 12));
    };
    IuguUtils.prototype.validateAccountID = function (accountID) {
        return /^[a-fA-F0-9]{8}[a-fA-F0-9]{4}[a-fA-F0-9]{4}[a-fA-F0-9]{4}[a-fA-F0-9]{12}$/.test(accountID);
    };
    IuguUtils.prototype.interpolateURL = function (url, data) {
        return url.replace(/\{([\s\S]+?)\}/g, function (substring) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return data.get(args[0]) || substring;
        });
    };
    IuguUtils.prototype.interpolateQueryParams = function (params) {
        var qs = '?';
        params.forEach(function (value, key) {
            qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
        });
        qs = qs.substring(0, qs.length - 1);
        return qs;
    };
    return IuguUtils;
}());
exports.default = new IuguUtils();
