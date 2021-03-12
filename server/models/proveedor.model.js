/*jshint esversion: 8*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
const almacenModel = require('./almacen.model');
const compraModel = require('./compra.model');
let schemaOptions = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: 'proveedor'
};
let proveedorSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'Objeto',
    },
    idPersona: {
        type: Schema.Types.ObjectId,
        ref: 'Persona',
    },
    strEmpresa: {
        type: String,
        required: [true, 'Favor de insertar el nombre de la empresa.']
    },
    strDireccionEmpresa: {
        type: String,
        required: [true, 'Favor de insertar la dirección de la Empresa.']
    },
    ajsnAlmacen: [almacenModel.schema], //Creación de un Array de Json
    blnActivo: {
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('Proveedor', proveedorSchema);