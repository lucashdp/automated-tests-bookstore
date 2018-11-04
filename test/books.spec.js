var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "https://virtual-bookstore-lucashdp.herokuapp.com/v1/public";

describe("Teste API de livros", function () {
  it("Deve receber os livros", function (done) {
    request.get(
      {
        url: urlBase + "/books"
      },
      function (error, response, body) {

        let _body = {};
        try {
          _body = JSON.parse(body);
        }
        catch (e) {
          _body = {};
        }

        expect(response.statusCode).to.equal(200);

        done();
      }
    );
  });
  it("Deve salvar o livro", function (done) {
    request.post(
      {
        url: urlBase + "/books",
        form: {
          book: {
            name: "Teste de livro",
            authorId: "56asd1165s5",
            publisherId: "456asdas456d4as",
            isbn: 4655656
          }
        }
      },
      function (error, response, body) {

        var _body = {};
        try {
          _body = JSON.parse(body);
        }
        catch (e) {
          _body = {};
        }

        expect(response.statusCode).to.equal(200);

        done();
      }
    )
  });
});