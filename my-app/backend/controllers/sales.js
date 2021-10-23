const testVentas = require("../models/ventasModel");

exports.getProductId = (req, res) => {
  testVentas.findById(req.params.id).populate("Productos.producto").then((productResult) => {
    if (productResult) {
      res.status(201).json(productResult);
    } else {
      res.status(404).json("la id:" + req.params.id + " no se encontro");
    }
  });
};

exports.getVentasFecha = (req, res) => {
  testVentas
    .find({
      Fecha: {
        $gte: req.params.fecha + "T00:00:00.000+00:00",
        $lte: req.params.fecha + "T23:59:59.000+00:00",
      },
    })
    .then((productResult) => {
      if (productResult) {
        res.status(201).json(productResult);
      } else {
        res.status(404).json("la id:" + req.params.fecha + " no se encontro");
      }
    });
};

exports.getProducts = (req, res) => {
  testVentas.find().then((postResult) => {
    res.status(200).json(postResult);
  });
};

exports.editSalesID = (req, res) => {
  const id = req.params.id;
  const salesUpd = new testVentas({
    _id: id,
    Fecha: req.body.Fecha,
    Valor: req.body.Valor,
    Estado: req.body.Estado,
    },
    {
      collection: "Ventas"
    });
  testVentas.findByIdAndUpdate(id, salesUpd).then((productoResult) => {
    res.status(200).json("La venta se actualizó satisfactoriamente");
  });
};

exports.addSales = (req, res) => {
  const salesUpd = new testVentas({

        Fecha: req.body.Fecha,
        Valor: req.body.valorTotal,
        Estado: req.body.Estado,
        Productos: [...req.body.Productos],
        Cliente: req.body.Cliente,
        Vendedor: req.body.Vendedor
      },
    );
  salesUpd.save().then((productoResult) => {
    res.status(201).json("La venta se actualizó satisfactoriamente");
  });
};
