const {Schema, model} = require('mongoose');
const CursoSchema = new Schema({
    nombre:{
        type:String,
        required:[true, 'El nombre es obligatorio']

    },
    descripcion:{
        type:String,
        required:[true, 'La descripcion es obligatoria']
    }
});
module.exports = model('Curso',CursoSchema);