import supertest from "supertest";
import {config} from "../config/config";

export const postForBook = {
    createBook: (payload,token) => {
        return supertest(config.prodUrl)
        .post('/BookStore/v1/Books')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(payload)
    }
}
export default postForBook;