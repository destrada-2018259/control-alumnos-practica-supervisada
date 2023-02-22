const {response, request} = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const getUsers = async (req = request, res = response) => {
    const listaUsers = await Promise.all([
        User.countDocuments(),
        User.find()
    ])

    res.json({
        msg: 'Users list',
        listaUsers
    })
}


const postUser = async (req = request, res = response) => {
    const {nombre, email, password, role, cursos} = req.body;
    const userDB = new User({nombre, email, password, role, cursos});

    const salt = bcryptjs.genSaltSync();
    userDB.password = bcryptjs.hashSync(password, salt);

    await userDB.save();

    res.json({
        msg: 'User created',
        userDB
    })
}

const putUser = async(req = request, res = response) => {
    const {id} = req.params;
    const {_id, role, ...resto} = req.body;
    const userEditado = await User.findByIdAndUpdate(id, resto, {new: true});
    res.status(200).json({
        msg: 'User updated',
        userEditado
    })
}

const deleteUser = async(req = request, res = response) => {
    const {id} = req.params;
    const userEliminado = await User.findByIdAndDelete(id);

    res.status(200).json({
        msg: 'User deleted',
        userEliminado
    })
}

const registerUser = async (req = request, res = response) => {
    const {nombre, email, password} = req.body;

    const userRegistered =  new User({nombre, email, password});
    const salt = bcryptjs.genSaltSync();
    userRegistered.password = bcryptjs.hashSync(password, salt);

    await userRegistered.save();

    res.status(200).json({
        msg: 'Registration successful',
        userRegistered
        
    })
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    registerUser
}