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
};

const loginUser = async (req, res = express.request) => {
    const { email, password } = req.body;

    try {
        let user = await Usuario.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe",
            });
        }

        const passwordValid = bcrypt.compareSync(password, user.password);
        if (!passwordValid) {
            return res.status(400).json({
                ok: false,
                msg: "La contraseña no es válida",
            });
        }

        res.status(200).json({
            ok: true,
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error,
        });
    }
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
