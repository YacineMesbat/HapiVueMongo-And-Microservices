// const CompanyController = require('../controllers/company.controller');
var crimeController = require('../controllers/crimes');
var crimeValidate = require('../validate/crimes');
module.exports = [
  {
    method: 'GET',
		path: '/api/crimes',
		config : {
			handler: crimeController.find,
			// validate: crimeValidate.test
		}
  },
  {
    method: 'GET',
		path: '/api/crimes/{id}',
		config : {
			handler: crimeController.findById,
			// validate: crimeValidate.test
		}
  },
  {
    method: 'POST',
		path: '/api/crimes',
		config : {
			handler: crimeController.create,
			// validate: crimeValidate.test
		}
  },
  {
    method: 'PUT',
		path: '/api/crimes/{id}',
		config : {
			handler: crimeController.update,
			// validate: crimeValidate.test
		}
  },
  {
    method: 'DELETE',
		path: '/api/crimes/{id}',
		config : {
			handler: crimeController.delete,
			// validate: crimeValidate.test
		}
  },
  // {
  //   path: '/api/companies',
  //   method: 'POST',
  //   handler: CompanyController.create
  // },
  // {
  //   path: '/api/companies',
  //   method: 'GET',
  //   handler: CompanyController.find
  // },
  // {
  //   path: '/api/companies/{id}',
  //   method: 'GET',
  //   handler: CompanyController.findOne
  // },
  // {
  //   path: '/api/companies/{id}',
  //   method: 'DELETE',
  //   handler: CompanyController.delete
  // },
  // {
  //   path: '/api/companies/{id}',
  //   method: 'PUT',
  //   handler: CompanyController.update
  // }
];