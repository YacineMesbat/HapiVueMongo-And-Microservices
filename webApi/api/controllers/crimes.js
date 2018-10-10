"use strict";

var Request = require('request');

function CrimeController(){};
CrimeController.prototype = (function(){

	return {
    find: (request, h) => {

			return new Promise((resolve, reject) => {
				let page = Number(request.query.page) || 1;

				Request('http://search.engine/crimes?page=' + page, function (error, response, body) {
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