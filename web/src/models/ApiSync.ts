import axios, {AxiosResponse} from 'axios';

export interface Serializable {
    id?: number;
}

export default class ApiSync<T extends Serializable> {
    constructor(public rootUrl: string) {
    }

    fetch = (id: number): Promise<AxiosResponse<T>> => {
        return axios.get<T>(`${this.rootUrl}/${id}`)
    }

    save = (data: T): Promise<AxiosResponse<T>> => {
        const {id} = data;
        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data)
        } else {
            return axios.post(`${this.rootUrl}`, data)
        }
    }
}