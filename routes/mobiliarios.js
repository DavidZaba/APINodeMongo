// routes/mobiliarios.js

const express = require('express');
const router = express.Router();
const mobiliarioController = require('../controllers/mobiliario');

// Rutas CRUD para mobiliario
router.post('/', mobiliarioController.crearMobiliario);
router.get('/', mobiliarioController.obtenerMobiliarios);
router.get('/:id', mobiliarioController.obtenerMobiliarioPorId);
router.put('/:id', mobiliarioController.actualizarMobiliario);
router.delete('/:id', mobiliarioController.eliminarMobiliario);

module.exports = router;
