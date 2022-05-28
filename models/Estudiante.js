var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstudianteSchema = new Schema({
    codigo: {type: Number, required: false, max: 20},
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 40},
    email: {type: String, required: true},
    edad: {type: Number, required: true},
    pais: {type: String, required: true},
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);