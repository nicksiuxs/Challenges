const express = require("express");
const Tareas = require("../models/Tareas");

const crearTask = async (req, res = express.request) => {

    const task = new Tareas(req.body);

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

module.exports = { crearTask, listarTask };