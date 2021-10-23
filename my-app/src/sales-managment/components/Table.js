import React from "react";
import Table from "react-bootstrap/Table";
import management from "../pages/Management.css";
import { Link } from 'react-router-dom';
import {
  Button,

} from "reactstrap";
import { useState } from "react";

/*test Data for CRUD */
//import data from "../pages/Test_Data";

const TableS = ({ productoAgregar, setProductoAgregar, headerVenta}) => {
  const [valorTotal, setValorTotal] = useState(0);
  // class table extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: data,
//       form: {
//         id: "",
//         idProducto: "",
//         vendedor: "",
//         cliente: "",
//         descripcion: "",
//         cantidad: "",
//         valor: "",
//         total: "",
//       },
//       modalInsertar: false,
//     };
//   }

  // mostrarModalInsertar = () => {
  //   this.setState({ modalInsertar: true });
  // };
  // ocultarModalInsertar = () => {
  //   this.setState({ modalInsertar: false });
  // };
  const handleAddVenta = () => {
    let listaIDProductos = [];
    productoAgregar.map((elemento) => (
      setValorTotal(valorTotal + elemento.price*elemento.cantidad)
    ));
    productoAgregar.map((elemento) => (
     
      listaIDProductos = [...listaIDProductos, {producto:elemento._id, cantidad: elemento.cantidad}]
    ));
    const ListaProductos = {...headerVenta, valorTotal: valorTotal, Productos: listaIDProductos};
    console.log(ListaProductos);

    fetch("http://localhost:3000/api/sales/add/", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(ListaProductos) // body data type must match "Content-Type" header
      })
      .then((response) => response.json())
      .catch((e) => console.log(e));
};
 
    return (
      <div className="container">
        
        <Table className="table">
          <thead>
            <tr>
              <th scope="col">Id Producto</th>
              <th scope="col">Descripción</th>
              <th scope="col">Valor</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {productoAgregar.map((elemento) => (
               
              <tr>
                <td>{elemento._id}</td>
                <td>{elemento.description}</td>
                <td>{elemento.price}</td>
                <td>{elemento.cantidad}</td>
                <td>{elemento.price*elemento.cantidad}</td>
                {/* <td style={{ width: "5px" }}>
                  <Pencil />
                </td>
                <td style={{ width: "5px" }}>
                  <Trash />
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
        
        <div style={{ management }} className="mb-5">
          <Button
            className="boton mb-4 float-end"
            onClick={handleAddVenta}
          >
            Insertar nueva Venta
          </Button>
          <Link to="/sale/managment">
          <Button className="boton mb-4 me-2 float-end">
            Actualizar Estado
          </Button>
          </Link>
          
        </div>      

        {/* <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Venta</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id</label>
              <input
                className="form-control"
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>
            <FormGroup>
              <label>IdProducto:</label>
              <input className="form-control" name="idProducto" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Vendedor</label>
              <input className="form-control" name="vendedor" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Cliente</label>
              <input className="form-control" name="cliente" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Descripción</label>
              <input className="form-control" name="descripcion" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Cantidad</label>
              <input className="form-control" name="cantidad" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Valor</label>
              <input className="form-control" name="valor" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Total</label>
              <input className="form-control" name="total" type="text" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Insertar</Button>
            <Button color="danger" onClick={() => this.ocultarModalInsertar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal> */}
      </div>
    );

}

export default TableS;

