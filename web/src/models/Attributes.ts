export default class Attributes<T> {
    constructor(private data: T) {
    }

    get = <K extends keyof T>(key: K): T[K] => {
        // @ts-ignore
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }

    getAll = (): T => {
        return this.data;
    }

}