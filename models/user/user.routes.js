const { UserControllers } = require('../controllers');

module.exports = server => {
	server.get({
		path: '/users',
		params: {
			firstName: {
				required: true,
				dataTypes: 'string',
			},
		},
	}, UserControllers.getUser);

	server.post({
		path: '/users',
		params: {
			firstName: {
				required: true,
				dataTypes: 'string',
			},
			lastName: {
				required: true,
				dataTypes: 'string',
			},
		},
	}, UserControllers.createUser);
};
