import postForBook from '../helper/postForBook';
import {deleteAllBooks} from '../helper/deleteAllBooks';
import {config} from '../config/config';

describe('positive cases for adding book', () => {
  beforeEach( async () => {
    await deleteAllBooks();
    console.log(deleteAllBooks())
  });
    test('200 ok', async () => {
        const token = config.token;
        const res = await postForBook.createBook({
          "userId": "8d3c1a45-6f43-403e-9ac5-6d4f8c789779",
          "collectionOfIsbns": [
            {
              "isbn": "9781449325862"
            }
          ]
        }, token)
        console.log(res);
          expect(res.status).toEqual(201)
    })
})