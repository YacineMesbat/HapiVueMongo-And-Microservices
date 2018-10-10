"use strict";

var _ = require('underscore');
var Joi = require('joi');

function UserModel(){
	this.schema = {
    first_name: Joi.string().min(2),
    last_name: Joi.string().min(2),
    password: Joi.string().min(6),
    role: Joi.string().valid(['agent', 'detective', 'chef']),
    email: Joi.string().email(),
	};
};

module.exports = UserModel;