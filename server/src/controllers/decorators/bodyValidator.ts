export function ValidateBody(...keys: string[]) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata('keys', keys, target, key);
    }
}