const { Schema, SchemaTypes } = require('mongoose');
const ListItemSchema = require('./listitem');

const ListSchema = new Schema({
  name: String,
  status: Boolean,
  owner: { type: SchemaTypes.ObjectId, ref: 'user' },
  members: [{ type: SchemaTypes.ObjectId, ref: 'user' }],
  items: [ListItemSchema],
},
{
  timestamps: true,
});

module.exports = ListSchema;
