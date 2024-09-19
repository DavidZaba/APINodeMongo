// controllers/mobiliario.js

const Mobiliario = require('../modules/mobiliario');

// Crear mobiliario
exports.crearMobiliario = async (req, res) => {
  try {
    const nuevoMobiliario = new Mobiliario(req.body);
    await nuevoMobiliario.save();
    res.status(201).json(nuevoMobiliario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los mobiliarios
exports.obtenerMobiliarios = async (req, res) => {
  try {
    const mobiliarios = await Mobiliario.find();
    res.json(mobiliarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un mobiliario por ID
exports.obtenerMobiliarioPorId = async (req, res) => {
  try {
    const mobiliario = await Mobiliario.findById(req.params.id);
    if (!mobiliario) return res.status(404).json({ message: 'Mobiliario no encontrado' });
    res.json(mobiliario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar mobiliario
exports.actualizarMobiliario = async (req, res) => {
  try {
    const mobiliario = await Mobiliario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mobiliario) return res.status(404).json({ message: 'Mobiliario no encontrado' });
    res.json(mobiliario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar mobiliario
exports.eliminarMobiliario = async (req, res) => {
  try {
    const mobiliario = await Mobiliario.findByIdAndDelete(req.params.id);
    if (!mobiliario) return res.status(404).json({ message: 'Mobiliario no encontrado' });
    res.json({ message: 'Mobiliario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
