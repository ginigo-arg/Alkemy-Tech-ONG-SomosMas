import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';

const slides = [
  {
    id: 1,
    name: 'Prueba',
    description: 'Imagen de prueba slider',
    image:
      'https://img.freepik.com/vector-gratis/ninos-felices-saltando-prado-verano_74855-5852.jpg?size=626&ext=jpg&ga=GA1.2.1586766005.1636675200',
  },
  {
    id: 2,
    name: 'Prueba2',
    description: 'Imagen de prueba slider',
    image:
      'https://img.freepik.com/vector-gratis/ninos-felices-saltando-prado-verano_74855-5852.jpg?size=626&ext=jpg&ga=GA1.2.1586766005.1636675200',
  },
  {
    id: 3,
    name: 'Prueba3',
    description: 'Imagen de prueba slider',
    image:
      'https://img.freepik.com/vector-gratis/ninos-felices-saltando-prado-verano_74855-5852.jpg?size=626&ext=jpg&ga=GA1.2.1586766005.1636675200',
  },
];

const TableSliders = () => {
  const history = useHistory();
  const sendState = (id) => {
    history.push({
      pathname: '/backoffice/slides/edit',
      state: { detail: id },
    });
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {slides &&
            slides.map((slide) => (
              <tr key={slide.id}>
                <td>{slide.id}</td>
                <td>{slide.name}</td>
                <td>
                  <img src={slide.image} alt={slide.name} className="w-25" />
                </td>
                <td className="d-flex justify-content-center align-items-center gap-1">
                  <Button className="btn-danger">
                    <AiFillDelete />
                  </Button>
                  <Link to="/backoffice/slides/edit">
                    <Button className="btn-info" onClick={ () => sendState(slide.id) }>
                      <RiFileEditFill />
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
export default TableSliders;
