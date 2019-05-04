const mongoose = require('mongoose');
const timestampsPlugin = require('mongoose-timestamp');

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
}, {
	versionKey: false,
});

UserSchema.plugin(timestampsPlugin);

module.exports = mongoose.model('User', UserSchema);
