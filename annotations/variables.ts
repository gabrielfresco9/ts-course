let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue']
let numbers: number[] = [1, 2, 3, 4, 5];
let booleans: boolean[] = [true, false, false, true];

class Car {

}

let car: Car = new Car();

let cars: Car[] = [car];

let point: { x: number; y: number; } = {x: 10, y: 20};


let logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

const json = '{x: 10, y: 20}';

let coordinates: { x: number; y: number; } = JSON.parse(json);