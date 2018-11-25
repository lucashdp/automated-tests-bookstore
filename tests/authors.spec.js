var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "https://virtual-bookstore-lucashdp.herokuapp.com/v1/public";

describe("Teste API de autores", function () {
  it("Deve receber os autores", function (done) {
    request.get(
      {
        url: urlBase + "/authors"
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
  it("Deve salvar o autor", function (done) {
    request.post(
      {
        url: urlBase + "/authors",
        form: {
          author: {
            name: "Caio Ribeiro Pereira"
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