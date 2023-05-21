const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const {
    createUser,
    loginUser,
    revalidateToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validarCampos");

router.post("/", loginUser);
router.post(
    "/new",
    [
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatiori").isEmail(),
        check("password", "Es obligatoria").isLength({ min: 6 }),
        validarCampos
    ],
    createUser
);
router.get("/renew", revalidateToken);

module.exports = router;
