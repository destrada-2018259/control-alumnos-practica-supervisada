const {request, response} = require('express');
const esMaestroRole = (req = request, res = response, next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Cannot validate your role because you are not logged in.'
        })
    }

    const {role, nombre} = req.user
    if(role != 'ROLE_MAESTRO'){
        return res.status(401).json({
            msg: 'If you are not a teacher, you cannot do this.'
        })
    }



    next();
}

const esAlumnoRole = (req = request, res = response) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Cannot validate your role because you are not logged in.'
        })
    }
}
module.exports = {
    esMaestroRole,
    esAlumnoRole
}