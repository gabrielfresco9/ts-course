"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var appRouter_1 = require("../../appRouter");
function bodyValidator(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("Invalid request. Missing " + key + " property");
                return;
            }
        }
        next();
    };
}
function Controller(prefix) {
    return function (target) {
        var router = appRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            var middlewares = Reflect.getMetadata('middleware', target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata('keys', target.prototype, key) || [];
            var validator = bodyValidator(requiredBodyProps);
            if (path) {
                router[method]("" + prefix + path, __spreadArrays(middlewares, [validator]), routeHandler);
            }
        }
    };
}
exports.Controller = Controller;
