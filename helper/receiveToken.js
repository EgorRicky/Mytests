import supertest from "supertest";
import {url, creds} from "../config/config"

let credOfValidUser = creds.validCred;

export const token = {
    auth: (payload) => {
        return supertest(url.prodUrl)
        .post('/Account/v1/GenerateToken')
        .set('Accept', 'application/json')
        .send(payload)
    },
    
    async saveToken () { 
        const res = await this.auth(credOfValidUser);
        return res.body.token
    }
}