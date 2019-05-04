const userRoutes = require('./user/user.routes');

module.exports = server => {
	server.get({ path: '/' }, (req, res) => res.json(200, 'Welcome !'));

	userRoutes(server);
};
