import { Button, Table } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import logo from '../img/LOGO-SOMOSMAS.png';
const ActivitiesList = () => {
  return (
    <div>
      <div>componente Link a ruta /backoffice/activities/create</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>CreatedAt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>
              <img src={logo} alt="" />
            </td>
            <td>26/3/2022</td>
            <td className="text-start">
              <Button className="btn-danger">Eliminar</Button>
              <Button className="btn-primary">Editar</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>
              <img src={logo} alt="" />
            </td>
            <td>26/3/2022</td>
            <td className="text-start">
              <Button className="btn-danger">Eliminar</Button>
              <Button className="btn-primary">Editar</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>
              <img src={logo} alt="" />
            </td>
            <td>26/3/2022</td>
            <td className="text-start">
              <Button className="btn-danger">Eliminar</Button>
              <Button className="btn-primary">Editar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ActivitiesList;
