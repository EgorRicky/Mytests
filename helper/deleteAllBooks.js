import supertest from "supertest";
import {config} from "../config/config";
let token = config.token;

export const deleteAllBooks = () => {
    return supertest(config.prodUrl)
        .delete(`/BookStore/v1/Books?UserId=${config.userId}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send()
}