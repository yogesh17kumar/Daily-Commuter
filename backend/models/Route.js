// models/Route.js
const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  start: { type: [Number], required: true }, // [lng, lat]
  end: { type: [Number], required: true },
  profile: { type: String, default: 'driving-car' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Route', routeSchema);
