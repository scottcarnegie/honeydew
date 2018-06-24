const { mongoose } = require('../utils/db-connection');
const ListSchema = require('./list');
const UserSchema = require('./user');

// Generate models
const User = mongoose.model('user', UserSchema);
const List = mongoose.model('list', ListSchema);

module.exports = {
  User,
  List,
};
