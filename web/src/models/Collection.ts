import axios, {AxiosResponse} from 'axios';
import User, {UserProps} from "./User";
import Eventing from "./Eventing";
import Model from "./Model";

export default class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(public rootUrl: string, public deserialize: (json: K) => T) {
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl).then((res: AxiosResponse): void => {
            this.models = res.data.map((item: K) => this.deserialize(item));
            this.trigger('change');
        })
    }
}