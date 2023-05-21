const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const {
    createUser,
    loginUser,
    revalidateToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validarCampos");

router.post(
    "/",
    [
        check("email", "El email es obligatiori").isEmail(),
        check("password", "Es obligatoria").not().isEmpty()
        , validarCampos
    ]
    , loginUser
);

router.post(
    "/new",
    [
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatiorio").isEmail(),
        check("password", "Es obligatoria").isLength({ min: 6 }),
        validarCampos
    ],
    createUser
);

router.get(
    "/renew",
    [
        check("email", "El email es obligatorio").not().isEmpty()
    ],
    revalidateToken
);

module.exports = router;
