import supertest from 'supertest';
import token from '../helper/receiveToken';
import config from '../config/config';

describe.only('positive cases for adding book', () => {
    test('Я могу добавить книжку и книга отобразится в списке', async () => {
        const auth = await token.save();
        const res = await supertest(config.prodUrl)
        .post('/BookStore/v1/Books')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${auth}`)
        .send({
            "userId": "8d3c1a45-6f43-403e-9ac5-6d4f8c789779",
            "collectionOfIsbns": [
              {
                "isbn": "9781449325862"
              }
            ]
          })
          expect(res.status).toEqual(400)
          expect(res.body).toEqual({
            "code": "1210",
            "message": "ISBN already present in the User's Collection!"
        })
    })
})