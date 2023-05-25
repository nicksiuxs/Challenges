const express = require("express");
const Tareas = require("../models/Tareas");

const crearTask = async (req, res = express.request) => {

    const { title } = req.body
    const task = new Tareas({ title });

    try {
        task.user = req.uid;
        const saved = await task.save();

        res.json({
            ok: true,
            task: saved
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: "Internal error"
        })
    }
}

const listarTask = async (req, res = express.request) => {
    const tasks = await Tareas.find().populate("user", "name");

    try {
        res.json({
            ok: true,
            tasks
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: "Internal error"
        })
    }
}

const actualizarTask = async (req, res = express.request) => {
    try {
        const { id } = req.params;
        console.log("id", id)
        const task = await Tareas.findById(id).populate("user", "_id");

        if (!task) {
            return res.status(404).json({
                ok: false,
                msg: `No existe una tarea con el id ${id}`,
            });
        }

        if (task.user.id !== req.uid) {
            return res.status(403).json({
                ok: false,
                msg: `No tienes permiso para ver esta tarea.`,
            });
        }

        const { title } = req.body;
        const taskUpdated = await modelTask.findByIdAndUpdate(id, { title }, { new: true });

        return res.status(200).json({
            ok: true,
            task: taskUpdated,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: "Internal error",
        });
    }
}

const eliminarTask = async (req, res = express.response) => {
    try {
        const { id } = req.params;
        const task = await Tareas.findById(id).populate("user", "_id");

        if (!task) {
            return res.status(404).json({
                ok: false,
                msg: `No existe una tarea con el id ${id}`,
            });
        }

        await Tareas.findByIdAndDelete(id);

        res.status(204).json({
            ok: true,
            msg: "Task eliminado",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: "Internal error",
        });
    }
};

module.exports = { crearTask, listarTask, actualizarTask, eliminarTask };