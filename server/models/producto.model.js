/*jshint esversion: 8*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
let schemaOptions = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: 'producto'
};
let productoSchema = new Schema({
    idObjeto: {
        type: Schema.Types.ObjectId,
        ref: 'Objeto',
    },
    strNombre: {
        type: String,
        required: [true, 'Favor de insertar el nombre del producto']
    },
    strDescripcion: {
        type: String,
        required: [true, 'Favor de insertar descripcion de producto.']
    },
    blnActivo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('producto', productoSchema);