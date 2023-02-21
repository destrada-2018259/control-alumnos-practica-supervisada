const {request, response} = require('express');
const User = require('../models/user');

const login = async(req = request, res = response) => {
    const {email, password} = req.body;

    try {
        // Verify if the email exists
        const existeEmailUser = await User.findOne({email});
        if (!existeEmailUser) {
            return res.status(400).json({
                msg: 'email is not valid'
            })
        }
        //Verify if the user exists

        // Verify the password of the user
    
        res.json({
            msg: 'login success',
            email,
            password
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Call the admin'
        })
    }

}

module.exports= {
    login
}