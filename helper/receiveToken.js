import supertest from "supertest";
import {config} from "../config/config"

//переименовать под токен файл

const fetchToken = async () => {
     const res = await supertest(config.prodUrl)
        .post('/Account/v1/GenerateToken')
        .set('Accept', 'application/json')
        .send(config.validCred)

        return res.body.token
}


