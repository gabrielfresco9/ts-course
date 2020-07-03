import User, {UserProps} from "../models/User";
import View from "./VIew";

export default class UserShow extends View<User, UserProps> {
    template(): string {
        return `
                    <div>
                        <h1>User detail</h1>
                        <div>Name: ${this.model.get('name')}</div>
                        <div>Age: ${this.model.get('age')}</div>
                    </div>
                `;
    }
}