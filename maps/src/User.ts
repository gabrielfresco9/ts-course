import {address, name} from 'faker';
import {Mappable} from "./CustomMap";

export default class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = name.firstName();
        this.location = {lat: parseFloat(address.latitude()), lng: parseFloat(address.longitude())}
    }

    getMarkerContent(): string {
        return `Name: ${this.name}`;
    }

}