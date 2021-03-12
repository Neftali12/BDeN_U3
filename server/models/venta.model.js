const mongoose = require('mongoose');
const { Schema } = mongoose;

const venSchema = new Schema({
    idPersona:{
        type: mongoose.Types.ObjectId,
        ref: 'Persona'
    },
    dteFecha: {
        type: Date,
        required: [true, 'Favor de insertar la fecha de la compra']
    },
    nmbCantidad:{
        type: Number,
        required: [true, 'Ingrese una cantidad']
    },
    nmbTotalPrecio:{
        type: Number,
        required: [true, 'Ingrese el precio total']
    },
    strMetodoPago:{
        type: String,
        required: [true, 'Ingrese su metodo de pago']
    },
    idProducto:{
        type: mongoose.Types.ObjectId,
        ref: 'Producto',
        required:[true, 'Por favor ingrese id del producto']
    },
    blnActivo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: "venta"
});

module.exports = mongoose.model('Venta', venSchema);