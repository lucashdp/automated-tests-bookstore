var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "https://virtual-bookstore-lucashdp.herokuapp.com/v1/public";

describe("Teste API de editoras", function () {
  it("Deve receber as editoras", function (done) {
    request.get(
      {
        url: urlBase + "/publishers"
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
  it("Deve salvar a editora", function (done) {
    request.post(
      {
        url: urlBase + "/publishers",
        form: {
          publisher: {
            name: "Casa do Codigo"
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