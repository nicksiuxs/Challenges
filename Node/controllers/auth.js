const express = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

const createUser = async (req, res = express.request) => {
    const { name, email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({email:email});
        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya existe"
            })
        }
        usuario = new Usuario({name,email,password});
        const salt = bcrypt.genSaltSync();
        usuario.password= bcrypt.hashSync(password,salt);
        await usuario.save();
        res.status(200).json({
            ok:true,
            usuario
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            error
        })
    }
    res.status(200).json({
        ok: true,
        name, email, password
    });
};

const loginUser = (req, res = express.request) => {
    const { email, password } = req.body;
    res.json({
        ok: true,
        email
    });
};

const revalidateToken = (req, res = express.request) => {
    res.json({
        ok: true,
    });
};

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
};
