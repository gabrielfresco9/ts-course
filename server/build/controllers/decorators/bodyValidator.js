"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateBody = void 0;
function ValidateBody() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata('keys', keys, target, key);
    };
}
exports.ValidateBody = ValidateBody;
