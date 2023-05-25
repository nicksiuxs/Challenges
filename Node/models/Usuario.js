const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    name: { type: String, require: true },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
},
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
);

UsuarioSchema.virtuals("tareas", {
    ref: "task",
    localField: "_id",
    foregeinField: "user",
    justOne: false
})

module.exports = model("Usuario", UsuarioSchema);