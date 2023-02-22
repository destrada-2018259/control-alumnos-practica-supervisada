const {request, response} = require('express');
const esMaestroRole = (req = request, res = response) => {
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

    if (role === 'ROLE_MAESTRO') {
        return res.status(202).json({
            msg: `${nombre} is a teacher.`
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

    const {role, nombre} = req.user
    if (role === 'ROLE_ALUMNO') {
        return res.status(202).json({
            msg: `${nombre} is a student.`
        })
    }
}
module.exports = {
    esMaestroRole,
    esAlumnoRole
}