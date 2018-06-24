const { Schema, SchemaTypes } = require('mongoose');

const ListItemSchema = new Schema({
  description: String,
  createdBy: { type: SchemaTypes.ObjectId, ref: 'user' },
  completedBy: { type: SchemaTypes.ObjectId, ref: 'user' },
  completedAt: { type: Date, default: null },
  status: { type: Boolean, default: true },
}, {
  timestamps: true,
});

module.exports = ListItemSchema;
