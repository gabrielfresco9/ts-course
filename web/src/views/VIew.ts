import Model from "../models/Model";

export default abstract class View<T extends Model<K>, K> {
    regions: { [key: string]: Element } = {};

    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    abstract template(): string;

    bindModel() {
        this.model.on('change', () => this.render());
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");
            fragment.querySelectorAll(selector).forEach((element: Element): void => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            })
        }
    }

    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();

        this.parent.appendChild(templateElement.content);
    }

    eventsMap(): { [key: string]: () => void } {
        return {};
    };

    regionsMap(): { [key: string]: string } {
        return {};
    };

    mapRegions(fragment: DocumentFragment): void {
        const regions = this.regionsMap();

        for (let key in regions) {
            const selector = regions[key];
            const element = fragment.querySelector(selector);
            if (element)
                this.regions[key] = element;
        }
    }

    onRender(): void {
    }
}