const express = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");
const { validarToken } = require("../middlewares/validarToken");

const createUser = async (req, res = express.request) => {
    const { name, email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email: email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya existe"
            })
        }
        usuario = new Usuario({ name, email, password });
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        await usuario.save();
        res.status(200).json({
            ok: true,
            usuario
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
};

const loginUser = async (req, res = express.request) => {
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email: email });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe",
            });
        }

        const passwordValid = bcrypt.compareSync(password, usuario.password);
        if (!passwordValid) {
            return res.status(400).json({
                ok: false,
                msg: "La contraseña no es válida",
            });
        }

        const token = await (generarJWT(usuario.id, usuario.name))

        res.status(200).json({
            ok: true,
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error,
        });
    }
};

const revalidateToken = async (req, res = express.request) => {
    const { uid, name } = req.body
    const token = await (generarJWT(uid, name));
    res.json({
        ok: true,
        token
    });
};

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
};
