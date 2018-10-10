"use strict";

var Request = require('request');

function CrimeController(){};
CrimeController.prototype = (function(){

	return {
    find: (request, h) => {
			
			// let filters = '';
			// Object.keys(request.query).map((objectKey, index) => {
			// 	if (objectKey != 'page') {
			// 		let value = request.query[objectKey] || '';
			// 		filters += objectKey + '=' + value + '&';
			// 	}
			// });
			
			// return {filters};

			// let params = '';
			// Object.keys(request.query).map((objectKey, index) => {
			// 	if (objectKey != 'page') {
			// 		let value = request.query[objectKey] || ''
			// 		params += objectKey + '=' + value + '&';
			// 	}
			// });
			// return {'query': request.query, 'params': params};

			return new Promise((resolve, reject) => {
				let page = Number(request.query.page) || 1;
				let filters = '';
				// for (var key in request.query) {
				// 	console.log(key);
				// 	if (key != 'page') {
				// 		let value = request.query[key] || '';
				// 		filters += key + '=' + value + '&';
				// 	}
				// }

				Request('http://search.engine/crimes?page=' + page + '&' + filters, function (error, response, body) {
					if (error) {
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(body).code(response.statusCode))
					}
				});	
			});
    },
    findById: (request, h) => {

			return new Promise((resolve, reject) => {
				Request('http://search.engine/crimes/' + request.params.id, function (error, response, body) {
					if (error) {
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(body).code(response.statusCode))
					}
				});
			});
    },
    create: (request, h) => {

			return new Promise((resolve, reject) => {
				Request.post({url:'http://search.engine/crimes', form: request.payload}, function(error, response, body){
					if (error) {
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(body).code(response.statusCode))
					}
				})
			});
    },
    update: (request, h) => {

			return new Promise((resolve, reject) => {
			Request.patch({url:'http://search.engine/crimes/' + request.params.id, form: request.payload}, function(error, response, body){
				if (error) {
					reject(h.response(error).code(500));
				} else {
					resolve(h.response(body).code(response.statusCode))
				}
			})
		});
    },
    delete: (request, h) => {

			return new Promise((resolve, reject) => {
				Request.del({url:'http://search.engine/crimes/' + request.params.id, form: request.payload}, function(error, response, body){
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

var crimeController = new CrimeController();
module.exports = crimeController;