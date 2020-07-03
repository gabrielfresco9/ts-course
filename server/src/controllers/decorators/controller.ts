import {AppRouter} from "../../appRouter";
import {NextFunction, RequestHandler, Response, Request} from "express";

function bodyValidator(keys: string[]): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }

        for (let key of keys) {
            if (!req.body[key]) {
                res.status(422).send(`Invalid request. Missing ${key} property`);
                return;
            }
        }

        next();
    }
}

export function Controller(prefix: string) {
    return function (target: any) {
        const router = AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            const method = Reflect.getMetadata('method', target.prototype, key);
            const middlewares = Reflect.getMetadata('middleware', target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata('keys', target.prototype, key) || [];
            const validator = bodyValidator(requiredBodyProps);

            if (path) {
                router[method](`${prefix}${path}`, [...middlewares, validator], routeHandler);
            }
        }
    }
}