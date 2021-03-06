/*jshint esversion: 8*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
let schemaOptions = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: 'almacen'
};
let almacenSchema = new Schema({
    idProducto: {
        type: Schema.Types.ObjectId,
        ref: 'Objeto',
    },
    nmbCantidad: {
        type: Number,
        required: [true, 'Favor de insertar su cantidad.']
    },
    strCategoria: {
        type: String,
        required: [true, 'Inserte Categoria.']
    },
    arrFechaIngreso: [{
        type: mongoose.Types.ObjectId,
        ref: 'fecha'
    }],
    blnActivo: {
        type: Boolean,
        default: true
    }

},schemaOptions);
module.exports = mongoose.model('Almacen', almacenSchema);