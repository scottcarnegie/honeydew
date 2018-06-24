const { Schema, SchemaTypes } = require('mongoose');

const UserSchema = new Schema({
  firebaseId: { type: String, unique: true },
  firstName: String,
  lastName: String,
  lists: [{ type: SchemaTypes.ObjectId, ref: 'list' }],
  status: { type: Boolean, default: true },
},
{
  timestamps: true,
});

module.exports = UserSchema;
