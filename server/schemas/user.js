const { Schema, SchemaTypes } = require('mongoose');

const UserSchema = new Schema({
  firebaseId: { type: String, unique: true },
  firstName: String,
  lastName: String,
  status: Boolean,
  lists: [{ type: SchemaTypes.ObjectId, ref: 'list' }],
},
{
  timestamps: true,
});

module.exports = UserSchema;
