const { Schema, SchemaTypes } = require('mongoose');

const ListItemSchema = new Schema({
  description: String,
  createdBy: { type: SchemaTypes, ref: 'user' },
  completedBy: { type: SchemaTypes, ref: 'user' },
  completedAt: Date,
}, {
  timestamps: true,
});

module.exports = ListItemSchema;
