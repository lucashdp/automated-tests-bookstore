var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "https://virtual-bookstore-lucashdp.herokuapp.com/v1/public";

describe("Teste API de usuários", function () {
    it("Deve receber os usuários", function (done) {
        request.get(
            {
                url: urlBase + "/users"
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
    it("Deve salvar o usuário", function (done) {
        request.post(
            {
                url: urlBase + "/users",
                form: {
                    user: {
                        name: "Lucas Duarte",
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