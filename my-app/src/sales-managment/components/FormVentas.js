import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import api from "../../Api";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Input } from "reactstrap";

const FormVentas = ({productoAgregar, setProductoAgregar, headerVenta, setHeaderVenta}) => {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState(" ");
    const [lista, setLista] = useState([]);
    const [resultado, setResultado] = useState({});
    
    const inputID = useRef(null);
    const inputDes = useRef(null);
    const inputValor = useRef(null);
    const inputCantidad = useRef(null);
    const inputFecha = useRef(null);
    const inputCC = useRef(null);
    const inputNombre = useRef(null);
    const inputVendedor = useRef(null);
    useEffect(() => {
        const featchData = async () => {
          const response = await api.products.list();
          setProductos(response);
        };
        featchData();
      }, []);

    const filter = () => {
        setLista(productos);
        setResultado({});
        if (busqueda.length === 0) {
            setProductos(lista);
        } else {
            const search = productos.filter((p) => p.description.includes(busqueda));
            //setProductos(search);
            setResultado(search[0]);
            console.log(resultado);
        }
    };

    const handleChange = (event) => {
        setBusqueda(event.target.value);
    };

    const handleAgregar = () => {
        const resultadoCantidad = {...resultado, cantidad: inputCantidad.current.value};
        setProductoAgregar([...productoAgregar, resultadoCantidad]);
        setHeaderVenta({
            Fecha: inputFecha.current.value,
            Estado: "EN PROCESO",
            Cliente: {
                cedula: inputCC.current.value,
                nombre: inputNombre.current.value
            },
            Vendedor: inputVendedor.current.value
        })
        setResultado({});
        
        inputID.current.value = "";
        inputDes.current.value = "";
        inputValor.current.value = "";
        console.log(productoAgregar, headerVenta);
    };

    
    return (

        <div className="container" md="1">
            <Form md="4">
                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-white">Fecha</Form.Label>
                        <Form.Control ref={inputFecha} type="date" defaultValue="22/11/2021" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="text-white">Vendedor</Form.Label>
                        <Form.Select ref={inputVendedor} defaultValue="Choose...">
                            <option>Elegir...</option>
                            <option>Juan Perez</option>
                            <option>Jose Gomez</option>
                            <option>Pedro Jimenez</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-white">Cédula Cliente</Form.Label>
                        <Form.Control ref={inputCC} type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="text-white">Nombre Cliente</Form.Label>
                        <Form.Control ref={inputNombre} type="text" />
                    </Form.Group>
                </Row>

                <Row className="mb-1">
                    <Col xs={6}>
                    </Col>    
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-white"  >Buscar Producto</Form.Label>
                        <Form.Control type="text" onChange={handleChange}/>
                    </Form.Group>
                    <Col xs={1} className=" mt-1 p-0">
                    <Button as={Col} variant="primary" type="button" className="float-end mt-4 me-1" onClick={filter}>
                             Buscar
                    </Button>
                    </Col>
                </Row>

                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-white" >ID Producto</Form.Label>
                        <Form.Control ref={inputID} type="text" value={(() => {if (resultado !== undefined){ return resultado._id}})()} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="text-white">Cantidad</Form.Label>
                        <Form.Control ref={inputCantidad} type="text" />
                    </Form.Group>
                </Row>

                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-white">Descripción</Form.Label>
                        <Form.Control ref={inputDes} type="text"  value={(() => {if (resultado !== undefined){ return resultado.description}})()} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="text-white">Valor</Form.Label>
                        <Form.Control ref={inputValor} type="text" value={(() => {if (resultado !== undefined){ return resultado.price}})()} />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" className="m-2 me-0 float-end">
                    Nuevo
                </Button>

                <Button variant="primary" type="button" className="m-2 float-end" onClick={handleAgregar}>
                    Agregar
                </Button>

                
            </Form>
        </div>
    );
};

export default FormVentas;