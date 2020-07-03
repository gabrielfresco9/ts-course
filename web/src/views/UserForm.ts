import User, {UserProps} from "../models/User";
import View from "./VIew";

export default class UserView extends View<User, UserProps> {

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:#save': this.model.save,
            'change:#name': this.onChangeName
        }
    }

    onChangeName = () => {
        const input = this.parent.querySelector('input');
        this.model.set({name: input?.value});
    }

    template(): string {
        return `<div>
                    <input id="name" placeholder="${this.model.get("name")}"/>
                    <button id="save">Save</button>
                </div>`
    }
}