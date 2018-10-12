"use strict";

var Request = require('request');

function UserController(){};
UserController.prototype = (function(){

	return {
		find: (request, h) => {

			return new Promise((resolve, reject) => {
				let page = Number(request.query.page) || 1;

				Request('http://account.api/users?page=' + page, { headers: { Authorization: request.headers.authorization || ''}}, function (error, response, body) {
					if (error) {
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(JSON.parse(body)).code(response.statusCode))
					}
				});	
			});
		},
		findById: (request, h) => {

			return new Promise((resolve, reject) => {
				Request('http://account.api/users/' + request.params.id, { headers: { Authorization: request.headers.authorization || ''}}, function (error, response, body) {
					if (error) {
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(JSON.parse(body)).code(response.statusCode))
					}
				});
			});
    },
    create: (request, h) => {

			return new Promise((resolve, reject) => {
				Request.post({url:'http://account.api/users', form: request.payload, headers: { Authorization: request.headers.authorization || ''}},  function(error, response, body){
					if (error) {
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(JSON.parse(body)).code(response.statusCode))
					}
				})
			});
		},
		update: (request, h) => {

			return new Promise((resolve, reject) => {
				Request.patch({url:'http://account.api/users/' + request.params.id, form: request.payload, headers: { Authorization: request.headers.authorization || ''}}, function(error, response, body){
					if (error) {
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(JSON.parse(body)).code(response.statusCode))
					}
				})
			});
		},
		delete: (request, h) => {

			return new Promise((resolve, reject) => {
				Request.del({url:'http://account.api/users/' + request.params.id, headers: { Authorization: request.headers.authorization || ''}}, function(error, response, body){
					if (error) {
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(JSON.parse(body)).code(response.statusCode))
					}
				})
			});
    },
	}
})();

var userController = new UserController();
module.exports = userController;

// "use strict";

// var Request = require('request');

// function UserController(){};
// UserController.prototype = (function(){

// 	return {
    // find: (request, h) => {

		// 	return new Promise((resolve, reject) => {
		// 		let page = Number(request.query.page) || 1;

		// 		Request('http://account.api/users?page=' + page, { headers: { Authorization: request.headers.authorization || ''}}, function (error, response, body) {
		// 			if (error) {
		// 				reject(h.response(error).code(500));
		// 			} else {
		// 				resolve(h.response(JSON.parse(body)).code(response.statusCode))
		// 			}
		// 		});	
		// 	});
    // },
    // findById: (request, h) => {

		// 	return new Promise((resolve, reject) => {
		// 		Request('http://account.api/users/' + request.params.id, { headers: { Authorization: request.headers.authorization || ''}}, function (error, response, body) {
		// 			if (error) {
		// 				reject(h.response(error).code(500));
		// 			} else {
		// 				resolve(h.response(JSON.parse(body)).code(response.statusCode))
		// 			}
		// 		});
		// 	});
    // },
//     create: (request, h) => {

// 			return new Promise((resolve, reject) => {
// 				Request.post({url:'http://account.api/users', form: request.payload}, { headers: { Authorization: request.headers.authorization || ''}}, function (error, response, body) {
// 					if (error) {
// 						reject(h.response(error).code(500));
// 					} else {
// 						resolve(h.response(JSON.parse(body)).code(response.statusCode))
// 					}
// 				})
// 			});
//     },
//     update: (request, h) => {

// 			return new Promise((resolve, reject) => {
// 			Request.patch({url:'http://account.api/users/' + request.params.id, form: request.payload}, { headers: { Authorization: request.headers.authorization || ''}}, function (error, response, body) {
// 				if (error) {
// 					reject(h.response(error).code(500));
// 				} else {
// 					resolve(h.response(JSON.parse(body)).code(response.statusCode))
// 				}
// 			})
// 		});
//     },
//     delete: (request, h) => {

// 			return new Promise((resolve, reject) => {
// 				Request.del({url:'http://account.api/users/' + request.params.id, form: request.payload}, { headers: { Authorization: request.headers.authorization || ''}}, function (error, response, body) {
// 					if (error) {
// 						reject(h.response(error).code(500));
// 					} else {
// 						resolve(h.response(JSON.parse(body)).code(response.statusCode))
// 					}
// 				})
// 			});
// 		},
// 	}
// })();

// var userController = new UserController();
// module.exports = userController;