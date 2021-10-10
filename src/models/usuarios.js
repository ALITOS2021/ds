const mongoose = require('mongoose');
const schema = mongoose.Schema;

var usuariosSchema = new schema({
    cc: {
        type: String
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: Number
    },
    email: {
        type: String
    }
},{
    collection: 'usuarios'
});

module.exports = mongoose.model('Usuario', usuariosSchema);