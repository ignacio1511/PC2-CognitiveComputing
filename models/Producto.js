var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    codigo: {type: Number, required: true, max: 20},
    descripcion: {type: String, required: true, max: 20},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true, min:0},
    marca: {type: String, required: true},
    modelo: {type: String, required: true},
    categoria: {type: String, required: true},
    fecha_produccion: { type: Date, default: Date.now, required: false }, 
});

module.exports = mongoose.model('Producto', ProductoSchema);