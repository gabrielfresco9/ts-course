class ArrayOfNumbers {
    constructor(public collection: number[]) {
    }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {
    }

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {
    }

    get(index: number): T {
        return this.collection[index];
    }
}

function printStrings(arr: string[]): void {
    arr.map(console.log);
}


function printAnything<T>(arr: T[]): void {
    arr.map(console.log);
}