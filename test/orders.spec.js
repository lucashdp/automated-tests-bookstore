var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "https://virtual-bookstore-lucashdp.herokuapp.com/v1/public";

describe("Teste API de vendas", function () {
    it("Deve receber as vendas", function (done) {
        request.get(
            {
                url: urlBase + "/orders"
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
    it("Deve salvar a venda", function (done) {
        request.post(
            {
                url: urlBase + "/orders",
                form: {
                    order: {
                        userId: "4a7ca1b2",
                        bookId: "4a7ca199cb2",
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