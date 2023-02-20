const {response, request} = require('express');

const Curso = require('../models/curso');

const getCurso = async(req = request, res = response) =>{
    const listaCursos = await Promise.all([
        Curso.countDocuments(),
        Curso.find()

    ])

    res.json({
        msg: 'Cursos encontrados',
        listaCursos
        
    })
}

const postCurso = async(req= request, res = response) =>{
    const {nombre, descripcion} = req.body;
    const cursoDB = new Curso({nombre, descripcion});
    await cursoDB.save();

    res.status(201).json({
        msg: 'Curso creado',
        cursoDB
    })
}

const putCurso = async(req = request, res = response) =>{
    const {id} = req.params;
    const {_id, ...resto} = req.body;
    const cursoEditado = await Curso.findByIdAndUpdate(_id, resto)
}

const deleteCurso = async(req = request, res = response) =>{
    const {id} = req.params;
    const cursoEliminado = await Curso.findByIdAndDelete(id);
    res.status(200).json({
        msg: 'Curso eliminado',
        cursoEliminado
    })
}

module.exports = {
    getCurso,
    postCurso,
    putCurso,
    deleteCurso
}