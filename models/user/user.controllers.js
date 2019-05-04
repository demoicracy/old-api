const { User } = require('../schemas');

module.exports = {
	async getUser(req, res) {
		try {
			const user = await User.findOne({ firstName: req.params.firstName }).lean();
			if (!user) {
				return res.json(404, 'Not Found');
			}
			return res.json(200, user);
		} catch (err) {
			return res.json(500, 'Error while retrieving User');
		}
	},

	async createUser(req, res) {
		try {
			const user = await new User(req.params).save();
			return res.json(200, user);
		} catch (err) {
			return res.json(500, 'Error while creating User');
		}
	},
};
