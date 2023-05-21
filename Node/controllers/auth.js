const express = require("express");

const createUser = (req, res = express.request) => {
    const { name, email, password } = req.body;
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
