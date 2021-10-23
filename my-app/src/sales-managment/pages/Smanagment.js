import management from './Management.css';
import Tablev from '../components/Table';
import FormVentas from '../components/FormVentas';
import { useState } from 'react';

const Smanagment = () =>{
    const [productoAgregar, setProductoAgregar] = useState([]);
    const [headerVenta, setHeaderVenta] = useState({});
   
    return(
        <div style={{management}}>
            <h4 className="title text-center mt-5 mb-2">
               CREAR VENTAS
            </h4>
            <FormVentas productoAgregar={productoAgregar} setProductoAgregar={setProductoAgregar} headerVenta={headerVenta} setHeaderVenta={setHeaderVenta}/>
            <Tablev productoAgregar={productoAgregar} setProductoAgregar={setProductoAgregar} headerVenta={headerVenta}/>
        </div>
    );
}
export default Smanagment;