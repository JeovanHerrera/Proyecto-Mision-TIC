import Table from 'react-bootstrap/Table';
// import tablep from '/Users/jeova/OneDrive/Documentos/MisionTic/Proyecto_MERN/Proyecto-Mision-TIC/my-app/src/product-managment/components/tablep.css'
import Button from 'react-bootstrap/Button'


const UserTable =()=> {  
    return(      
            <div className="container mt-4 " md="auto">
            <Table striped bordered hover className="Tablep mt-3"  >
                <thead>
                    <tr>
                        <th>ID Vendedor</th>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Estado</th>

                    </tr>
                </thead>
                <tbody>
                 
                            <tr >
                                <td>40001</td>
                                <td>Jeovan Herrera</td>
                                <td>Administrador</td>
                                <td>Aprobado</td>

                            </tr>
                            <tr >
                                <td>40002</td>
                                <td>Juan Isaza</td>
                                <td>Vendedor</td>
                                <td>Pendiente</td>

                            </tr>
               
              
                </tbody>
            </Table>
            <Button variant="primary" type="submit" className="float-end">
             Actualizar
             </Button >
           
            </div>
        );
    }
export default UserTable;