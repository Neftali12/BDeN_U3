/*jshint esversion: 8*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
let schemaOptions = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: 'inventario'
};
let inventarioSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'Objeto',
    },
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
});

module.exports = mongoose.model('Inventario', inventarioSchema);