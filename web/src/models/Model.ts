import {AxiosResponse} from 'axios';
import {Callback} from "./Eventing";
import {Serializable} from "./ApiSync";

interface ModelAttributes<T> {
    set(value: T): void;

    get<K extends keyof T>(key: K): T[K];

    getAll(): T;
}

interface Sync<T> {
    fetch(id: number): Promise<AxiosResponse<T>>;

    save(data: T): Promise<AxiosResponse<T>>;
}

interface Events {
    on(eventName: string, callback: Callback): void;

    trigger(eventName: string): void;
}

export default abstract class Model<T extends Serializable> {
    constructor(private attributes: ModelAttributes<T>,
                private events: Events,
                private sync: Sync<T>) {
    }


    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change')
    }

    fetch(): void {
        const id = this.get('id');

        if (!id) {
            throw new Error("Can't fetch. Id not defined");
        } else {
            this.sync.fetch(id).then((res: AxiosResponse): void => {
                this.set(res.data);
            })
        }
    }

    save = (): void => {
        this.sync.save(this.attributes.getAll()).then((res: AxiosResponse): void => {
            this.trigger('save');
        });
    }
}