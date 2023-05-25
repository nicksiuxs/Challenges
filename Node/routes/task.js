const express = require("express");
const router = express.Router();

const { validarToken } = require("../middlewares/validarToken");
const { crearTask, listarTask, actualizarTask, eliminarTask } = require("../controllers/task");

router.use(validarToken);

router.get("/", listarTask);
router.post("/", crearTask);
router.put(
    "/:id",
    actualizarTask
);
router.delete("/:id", eliminarTask);

module.exports = router;