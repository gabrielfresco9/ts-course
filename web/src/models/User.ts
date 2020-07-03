import {AxiosResponse} from 'axios';
import Eventing from "./Eventing";
import ApiSync from "./ApiSync";
import Attributes from "./Attributes";
import Model from "./Model";
import Collection from "./Collection";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export default class User extends Model<UserProps> {
    static build(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>('http://localhost:3000/users')
        )
    }

    static buildCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>('http://localhost:3000/users', User.build);
    }

    setRandomAge = (): void => {
        this.set({age: Math.round(Math.random() * 100)});
    }
}