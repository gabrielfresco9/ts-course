export type Callback = () => void;

type Events = {
    [key: string]: Callback[]
}

export default class Eventing {
    private events: Events = {};

    on = (eventName: string, callback: Callback): void => {
        if (!this.events[eventName])
            this.events[eventName] = [];
        this.events[eventName].push(callback);
    }

    trigger = (eventName: string): void => {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback());
        }
    }
}