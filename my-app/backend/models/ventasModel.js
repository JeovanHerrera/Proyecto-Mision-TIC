const mongoose = require("mongoose");

const ventasModel = mongoose.Schema(
  {
    Fecha: { type: Date, required: true },
    Valor: { type: Number, required: true },
    Estado: { type: String, required: true },
    Productos: [{
      producto: {type: mongoose.Schema.Types.ObjectId,
      ref: "Productos"},
      cantidad: { type: Number} 
    }],
    Cliente: {
      cedula: {type: Number, required: true},
      nombre: {type: String, required: true }
    },
    Vendedor: {type: String, required: true }
  },
  { collection: "Ventas" }
);

module.exports = mongoose.model("Ventas", ventasModel);
