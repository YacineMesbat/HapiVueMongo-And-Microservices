"use strict";

var Request = require('request');

function CrimeController(){};
CrimeController.prototype = (function(){

	return {
    find: (request, h) => {
			
			return new Promise((resolve, reject) => {
				let page = Number(request.query.page) || 1;
				let filters = '';
				for (var key in request.query) {
					console.log(key);
					if (key != 'page') {
						let value = request.query[key] || '';
						filters += key + '=' + value + '&';
					}
				}

				Request('http://crime.api/crimes?page=' + page + '&' + filters, { headers: { Authorization: request.headers.authorization || ''}}, function (error, response, body) {
					if (error) {v
						reject(h.response(error).code(500));
					} else {
						resolve(h.response(JSON.parse(body)).code(response.statusCode))
					}
				});	
			});
    },
    findById: (request, h) => {

			return new Promise((resolve, reject) => {
				Request('http://crime.api/crimes/' + request.params.id, function (error, response, body) {
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
				Request.post({url:'http://crime.api/crimes', form: request.payload}, function(error, response, body){
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
			Request.patch({url:'http://crime.api/crimes/' + request.params.id, form: request.payload}, function(error, response, body){
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
				Request.del({url:'http://crime.api/crimes/' + request.params.id, form: request.payload}, function(error, response, body){
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

var crimeController = new CrimeController();
module.exports = crimeController;