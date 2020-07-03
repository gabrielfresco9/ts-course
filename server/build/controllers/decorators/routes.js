"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Patch = exports.Put = exports.Post = exports.Get = void 0;
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.Get = routeBinder('get');
exports.Post = routeBinder('post');
exports.Put = routeBinder('put');
exports.Patch = routeBinder('patch');
exports.Delete = routeBinder('delete');
