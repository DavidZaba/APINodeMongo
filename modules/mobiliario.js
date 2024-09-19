// modules/mobiliario.js

const mongoose = require('mongoose');

const MobiliarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  cantidad: {
    type: Number,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  fechaCompra: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Mobiliario', MobiliarioSchema);
