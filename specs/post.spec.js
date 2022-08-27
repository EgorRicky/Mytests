import postForBook from '../helper/postForBook';
import {deleteAllBooks} from '../helper/deleteAllBooks';
import getBooks from '../helper/getBooks';
import {config} from '../config/config';

describe('positive cases for adding book', () => {
  beforeEach(async () => {
    await deleteAllBooks();
  });
  test('post should add a book to the list', async () => {
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
    }),

  test('post should add two books to the list', async () => {
      const token = config.token;
      await postForBook.createBook({
          "userId": "8d3c1a45-6f43-403e-9ac5-6d4f8c789779",
          "collectionOfIsbns": [{
            "isbn": "9781449325862"
          }]
        }, token),
        await postForBook.createBook({
          "userId": "8d3c1a45-6f43-403e-9ac5-6d4f8c789779",
          "collectionOfIsbns": [{
            "isbn": "9781449331818"
          }]
        }, token)
      const res = await getBooks.getBook()
      expect(res.status).toEqual(200);
      expect(res.body.books[0].isbn).toEqual('9781449325862');
      expect(res.body.books[1].isbn).toEqual('9781449331818')
    }),

  test('I cant add the same book twice', async () => {
      const token = config.token;
      await postForBook.createBook({
        "userId": "8d3c1a45-6f43-403e-9ac5-6d4f8c789779",
        "collectionOfIsbns": [{
          "isbn": "9781449325862"
        }]
      }, token)
      const res = await postForBook.createBook({
        "userId": "8d3c1a45-6f43-403e-9ac5-6d4f8c789779",
        "collectionOfIsbns": [{
          "isbn": "9781449325862"
        }]
      }, token)
      expect(res.status).toEqual(400);
      expect(res.body.code).toBeTruthy();
      expect(res.body.message).toBeTruthy();
    })
})