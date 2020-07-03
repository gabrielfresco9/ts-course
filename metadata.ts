import 'reflect-metadata';

const plane = {color: "red"};
Reflect.defineMetadata('note', 'hey yo', plane);
console.log(Reflect.getMetadata('note', plane))