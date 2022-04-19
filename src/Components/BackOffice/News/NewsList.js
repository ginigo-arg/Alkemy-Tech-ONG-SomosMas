import React, { useEffect, useState } from 'react';
import {
  Container,
  FormControl,
  InputGroup,
  Table,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { AiFillDelete, AiOutlineClear } from 'react-icons/ai';
import { RiFileEditFill } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';
import { BiPlusMedical } from 'react-icons/bi';
import { FaThList } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
// ------------------------------------------- LISTADO NOTICIAS ---------------------------------------
const newsBack = [
  {
    id: 1,
    name: 'Noticia 1',
    image: 'https://ongapi.alkemy.org/storage/b1rCuOkKdh.jpeg',
    createdAt: '20-03-2022',
  },
  {
    id: 2,
    name: 'Noticia 2',
    image: '',
    // image: 'https://ongapi.alkemy.org/storage/HsOrvE20tS.jpeg',
    createdAt: '20-03-2022',
  },
  {
    id: 3,
    name: 'Noticia 3',
    image: 'https://ongapi.alkemy.org/storage/ils3ohTyzV.jpeg',
    createdAt: '22-03-2022',
  },
  {
    id: 4,
    name: 'Noticia 4',
    image: 'https://ongapi.alkemy.org/storage/sa5pZxmKvy.jpeg',
    createdAt: '25-03-2022',
  },
];
// ------------------------------------------- COMPONENTE NEW LIST ---------------------------------------
const NewsList = ({ news = newsBack }) => {
  const [busqueda, setBusqueda] = useState('');
  const [newsFilter, setNewsFilter] = useState(news);
  const history = useHistory();
  useEffect(() => {
    setNewsFilter(
      news.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      }),
    );
  }, [busqueda, news]);
  const handleCreate = () => {
    history.push({
      pathname: '/backoffice/news/create',
    });
  };

  return (
    <>
      <Container>
        <div
          name="containerModule"
          id="containerModule"
          className="border rounded mb-4"
        >
          <div
            name="headerModule"
            id="headerModule"
            className="d-flex justify-content-between align-items-center bg-lightt shadow border-5 border-bottom border-primary p-3"
          >
            <h3 className="text-uppercase text-primary align-middle">
              <span className="align-top">
                <FaThList />
              </span>{' '}
              <span className="align-middle">Listado Noticias</span>
            </h3>
            {}
            <Button className='btn-info' onClick={handleCreate}>
              Agregar noticia
            </Button>

            <Link
              to="/backoffice/news/create"
              title="Agregar noticia"
              className="d-block d-sm-none "
            >
              <div
                className="text-center btn btn-primary rounded-circle"
                style={{ width: '40px', height: '40px' }}
              >
                <BiPlusMedical className="text-white fw-bold" />
                {/* <span className="fw-1 text-white fw-bold">+</span> */}
              </div>
            </Link>
          </div>
          <div name="bodyModule" id="bodyModule" className="p-3">
            <Row className="pb-3" hidden>
              <Col md={7}>
                {' '}
                <InputGroup>
                  <FormControl
                    type="text"
                    id="search"
                    className="border-primary"
                    placeholder="Buscar noticia"
                    aria-label="Buscar noticia"
                    aria-describedby="addon-search"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                  <InputGroup.Text
                    id="addon-search"
                    className="align-middle bg-primary border-primary"
                    onClick={(e) => setBusqueda('')}
                  >
                    <i className="text-white fw-bold">
                      {busqueda === '' ? <BsSearch /> : <AiOutlineClear />}
                    </i>
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            {newsFilter.length > 0
              ? (
                <>
                  <Table striped hover responsive>
                    <thead className="bg-primary text-white rounded">
                      <tr key={'news_0'}>
                        <th hidden>#</th>
                        <th>Nombre</th>
                        <th className="text-center">Imagen</th>
                        <th className="text-center">Creación</th>
                        <th className="text-center" colSpan={2}>
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {newsFilter.map((element) => {
                        return <RowsNew newData={[element]} key={element.id} />;
                      })}
                    </tbody>
                  </Table>
                </>
              )
              : (
                <div
                  className="alert-warning rounded d-flex justify-content-center align-items-center "
                  style={{ height: '300px' }}
                >
                  <h1>No hay noticias para mostrar</h1>
                </div>
              )}
          </div>
        </div>
      </Container>
    </>
  );
};
// ------------------------------------------- COMPONENTE ROW NEW LIST---------------------------------------
const RowsNew = ({ newData }) => {
  const history = useHistory();
  const handleEdit = (id) => {
    history.push({
      pathname: '/backoffice/news/edit',
      state: id,
    });
  };

  return (
    <tr key={'new_' + newData[0].id} className="align-middle">
      {newData.map((element) => {
        return (
          <>
            <td hidden>{element.id}</td>
            <td>{element.name}</td>
            <td className="text-center" style={{ width: '230px' }}>
              {element.image !== ''
                ? (
                  <img
                    src={element.image}
                    alt={element.name}
                    className="img-thumbnail rounded"
                    style={{ width: '200px', height: '100px' }}
                  />
                )
                : (
                  <svg
                    className="img-thumbnail rounded"
                    width="200px"
                    height="100px"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>{element.name}</title>
                    <rect width="100%" height="100%" fill="#514242"></rect>
                    <text x="5%" y="50%" fill="#eceeef" dy=".5em">
                      No media
                    </text>
                  </svg>
                )}
            </td>
            <td className="text-center" style={{ width: '120px' }}>
              {element.createdAt}
            </td>
            <td className="text-center" style={{ width: '70px' }}>
              <Link
                className="btn btn-danger"
                title="Eliminar"
                to={'/backoffice/news/delete/' + element.id}
              >
                <AiFillDelete />
              </Link>
            </td>
            <td className="text-center" style={{ width: '70px' }}>

              <Button className='btn-info' onClick={() => {
                handleEdit(element.id);
              }}>
                <RiFileEditFill />
              </Button>

            </td>
          </>
        );
      })}
    </tr>
  );
};

export default NewsList;
