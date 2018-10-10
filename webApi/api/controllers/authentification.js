"use strict";

var Request = require('request');

function AuthController(){};
AuthController.prototype = (function(){

	return {
    login: (request, h) => {

			return new Promise((resolve, reject) => {
				Request.post({url:'http://account.api/login', form: request.payload}, function(error, response, body){
					if (error) {
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(body).code(response.statusCode))
					}
				})
			});
    },
	}
})();

var authController = new AuthController();
module.exports = authController;