import {RequestHandler} from "express";

interface RouteHandlerPropertDescriptor extends PropertyDescriptor {
    value?: RequestHandler
}

function routeBinder(method: string) {
    return function (path: string) {
        return function (target: any, key: string, desc: RouteHandlerPropertDescriptor) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        }
    }
}

export const Get = routeBinder('get');
export const Post = routeBinder('post');
export const Put = routeBinder('put');
export const Patch = routeBinder('patch');
export const Delete = routeBinder('delete');
