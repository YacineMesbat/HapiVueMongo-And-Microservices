// const CompanyController = require('../controllers/company.controller');
var userController = require('../controllers/users');
var crimeController = require('../controllers/crimes');

// var userValidate = require('../validate/users');
module.exports = [
  {
    method: 'GET',
		path: '/api/users',
		config : {
			handler: userController.find,
			// validate: userController.find
		}
  },
  {
    method: 'GET',
		path: '/api/users/{id}',
		config : {
			handler: userController.findById,
		}
  },
  {
    method: 'POST',
		path: '/api/users',
		config : {
			handler: userController.create,
		}
  },
  {
    method: ['PUT', 'PATCH'],
		path: '/api/users/{id}',
		config : {
			handler: userController.update,
		}
  },
  {
    method: 'DELETE',
		path: '/api/users/{id}',
		config : {
			handler: userController.delete,
		}
  },
];