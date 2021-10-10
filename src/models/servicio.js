const mongoose = require('mongoose');
const schema = mongoose.Schema;

var categoriasSchema = new schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    }
},{
    collection: 'categorias'
});

module.exports = mongoose.model('Categorias', categoriasSchema);