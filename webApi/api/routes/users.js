var userController = require('../controllers/users');
// var crimeValidate = require('../validate/crimes');
module.exports = [
  {
    method: 'GET',
		path: '/api/users',
		config : {
			handler: userController.find,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
	},
	{
    method: 'GET',
		path: '/api/users/{id}',
		config : {
			handler: userController.findById,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
	},
	{
    method: 'POST',
		path: '/api/users',
		config : {
			handler: userController.create,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
	},
	{
    method: 'PATCH',
		path: '/api/users/{id}',
		config : {
			handler: userController.update,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
	},
	{
    method: 'DELETE',
		path: '/api/users/{id}',
		config : {
			handler: userController.delete,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
  },
];

// // const CompanyController = require('../controllers/company.controller');
// var userController = require('../controllers/users');
// var crimeController = require('../controllers/crimes');

// // var userValidate = require('../validate/users');
// module.exports = [
//   {
//     method: 'GET',
// 		path: '/api/users',
// 		config : {
// 			handler: userController.find,
// 			// validate: userController.find
// 		}
//   },
//   {
//     method: 'GET',
// 		path: '/api/users/{id}',
// 		config : {
// 			handler: userController.findById,
// 		}
//   },
//   {
//     method: 'POST',
// 		path: '/api/users',
// 		config : {
// 			handler: userController.create,
// 		}
//   },
//   {
//     method: ['PUT', 'PATCH'],
// 		path: '/api/users/{id}',
// 		config : {
// 			handler: userController.update,
// 		}
//   },
//   {
//     method: 'DELETE',
// 		path: '/api/users/{id}',
// 		config : {
// 			handler: userController.delete,
// 		}
//   },
// ];