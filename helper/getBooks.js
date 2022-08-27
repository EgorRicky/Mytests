import supertest from "supertest";
import {config} from "../config/config";
let token = config.token;

export const getBooks = {
    getBook: () => {
        return supertest(config.prodUrl)
        .get(`/Account/v1/User/${config.userId}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send()
    }
}
export default getBooks;