var crimeController = require('../controllers/crimes');
// var crimeValidate = require('../validate/crimes');
module.exports = [
  {
    method: 'GET',
		path: '/api/crimes',
		config : {
			handler: crimeController.find,
			// validate: crimeValidate.find
		}
  },
  {
    method: 'GET',
		path: '/api/crimes/{id}',
		config : {
			handler: crimeController.findById,
		}
  },
  {
    method: 'POST',
		path: '/api/crimes',
		config : {
			handler: crimeController.create,
		}
  },
  {
    method: ['PUT', 'PATCH'],
		path: '/api/crimes/{id}',
		config : {
			handler: crimeController.update,
		}
  },
  {
    method: 'DELETE',
		path: '/api/crimes/{id}',
		config : {
			handler: crimeController.delete,
		}
  },
];