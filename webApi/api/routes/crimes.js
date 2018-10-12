var crimeController = require('../controllers/crimes');
// var crimeValidate = require('../validate/crimes');
module.exports = [
  {
    method: 'GET',
		path: '/api/crimes',
		config : {
			handler: crimeController.find,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
			// validate: crimeValidate.find
		}
  },
  {
    method: 'GET',
		path: '/api/crimes/{id}',
		config : {
			handler: crimeController.findById,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
  },
  {
    method: 'POST',
		path: '/api/crimes',
		config : {
			handler: crimeController.create,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
  },
  {
    method: ['PUT', 'PATCH'],
		path: '/api/crimes/{id}',
		config : {
			handler: crimeController.update,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
  },
  {
    method: 'DELETE',
		path: '/api/crimes/{id}',
		config : {
			handler: crimeController.delete,
			cors: {
				origin: ['*'],
				additionalHeaders: ['cache-control', 'x-requested-with']
			}
		}
  },
];