const { Schema, SchemaTypes } = require('mongoose');
const ListItemSchema = require('./listitem');

const ListSchema = new Schema({
  name: String,
  owner: { type: SchemaTypes.ObjectId, ref: 'user' },
  members: [{ type: SchemaTypes.ObjectId, ref: 'user' }],
  items: [ListItemSchema],
  status: { type: Boolean, default: true },
},
{
  timestamps: true,
});

module.exports = ListSchema;
