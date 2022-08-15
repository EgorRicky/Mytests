import supertest from "supertest";
import {config} from "../config/config"

let credOfValidUser = config.validCred;

export const token = {
    auth: (payload) => {
        return supertest(config.prodUrl)
        .post('/Account/v1/GenerateToken')
        .set('Accept', 'application/json')
        .send(payload)
    },
    
    async save () { 
        const res = await this.auth(credOfValidUser);
        return res.body.token
    }
}
export default token;