const express = require("express");
const router = express.Router();

const { validarToken } = require("../middlewares/validarToken");
const { crearTask, listarTask } = require("../controllers/task");

router.use(validarToken);

router.get("/", listarTask);
router.post("/", crearTask);


module.exports = router;