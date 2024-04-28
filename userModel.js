const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
      legajo: {
        type: Number
      },
      nombre: {
        type: String
      },
      apellido: {
        type: String
      },
      edad: {
        type: Number
      },
      deporte_favorito: {
        type: String
      },
      asignatura_favorita: {
        type: String
      },
      correo_electronico: {
        type: String
      },
      numero_celular: {
        type: String
      }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelUser = mongoose.model("alumnos", userSchema);
module.exports = ModelUser