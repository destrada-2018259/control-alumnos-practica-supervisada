const {Router} = require('express');
const {getCurso, postCurso, putCurso, deleteCurso} = require('../controllers/curso');

const router = Router();
router.get('/mostrar', getCurso);
router.post('/agregar', postCurso);
router.put('/editar/:id', putCurso);
router.delete('/eliminar/:id', deleteCurso);
module.exports = router;
