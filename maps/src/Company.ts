import {address, company} from 'faker';
import {Mappable} from "./CustomMap";

export default class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = company.companyName();
        this.catchPhrase = company.catchPhrase();
        this.location = {lat: parseFloat(address.latitude()), lng: parseFloat(address.longitude())}
    }

    getMarkerContent(): string {
        return `Name: ${this.name}. Catch phrase: ${this.catchPhrase}`;
    }
}