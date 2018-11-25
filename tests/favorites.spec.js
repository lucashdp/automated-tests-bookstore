var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "https://virtual-bookstore-lucashdp.herokuapp.com/v1/public";

describe("Teste API de favoritos", function () {
    it("Deve receber os favoritos", function (done) {
        request.get(
            {
                url: urlBase + "/favorites"
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
    it("Deve salvar o favorito", function (done) {
        request.post(
            {
                url: urlBase + "/favorites",
                form: {
                    favorite: {
                        userId: "5bb0e0ddfsdfsdfa9cb23d50",
                        bookId: "5bb0e0ddcb23d50"
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