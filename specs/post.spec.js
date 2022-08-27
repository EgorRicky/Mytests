import postForBook from '../helper/postForBook';
import {deleteAllBooks} from '../helper/deleteAllBooks';
import getBooks from '../helper/getBooks';
import {config} from '../config/config';

describe('positive cases for adding book', () => {
  beforeEach(async () => {
    await deleteAllBooks();
  });
    test('200 ok', async () => {
    const token = config.token;
    await postForBook.createBook({
      "userId": "8d3c1a45-6f43-403e-9ac5-6d4f8c789779",
      "collectionOfIsbns": [{
        "isbn": "9781449325862"
      }]
    }, token)
    const res = await getBooks.getBook()
    expect(res.status).toEqual(200);
    expect(res.body.books[0].isbn).toEqual('9781449325862')
    console.log(res.body.books[0].isbn);
    })
    })