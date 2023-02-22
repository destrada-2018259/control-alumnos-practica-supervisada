const {Router} = require('express');
const { getUsers, postUser, putUser, deleteUser, registerUser } = require('../controllers/user');


const router = Router();
router.get('/mostrar', getUsers);
router.post('/agregar', postUser);
router.put('/editar/:id', putUser);
router.delete('/eliminar/:id', deleteUser);
router.post('/register', registerUser);


module.exports = router;
