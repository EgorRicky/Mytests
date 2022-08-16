import postForBook from '../helper/postForBook';
import token from '../helper/receiveToken';

describe('positive cases for adding book', () => {
    test('Я не могу добавить книжку, которая уже добавлена ранее', async () => {
        const auth = await token.save();
        const res = await postForBook.createBook({
          "userId": "8d3c1a45-6f43-403e-9ac5-6d4f8c789779",
          "collectionOfIsbns": [
            {
              "isbn": "9781449325862"
            }
          ]
        }, auth)
          expect(res.status).toEqual(400)
          expect(res.body).toEqual({
            "code": "1210",
            "message": "ISBN already present in the User's Collection!"
        })
    })
})