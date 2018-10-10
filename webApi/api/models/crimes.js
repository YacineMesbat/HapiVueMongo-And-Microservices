"use strict";

var _ = require('underscore');
var Joi = require('joi');

function CrimeModel(){
	this.schema = {
	compNos: Joi.number(),
	reportingArea: Joi.string().max(20),
	incidentTypeDescription: Joi.string().max(200),
	reptDistrict: Joi.string().max(100),
	// fromDate: Joi.d
	};
};

module.exports = CrimeModel;