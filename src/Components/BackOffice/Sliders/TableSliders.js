import React, { useEffect } from 'react';
import { Button, Table, Container } from 'react-bootstrap';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_SLIDE_FN, GET_SLIDE_BACKOFFICE_FN, CLEAR_SINGLE_SLIDE_FN } from '../../../redux/slides/actions';
import { alertService } from '../../../Services/alertService';
import ProgressSpinner from '../../Progress/ProgressSpinner';

const TableSliders = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { slides } = useSelector(state => state.slides);
  const loading = useSelector(state => state.global.loading);

  useEffect(() => {
    dispatch(GET_SLIDE_BACKOFFICE_FN());
  }, []);
  useEffect(() => {
    dispatch(CLEAR_SINGLE_SLIDE_FN());
  }, []);
  useEffect(() => {
  }, []);

  const handleEdit = (id) => {
    history.push({
      pathname: '/backoffice/slides/edit',
      state: id,
    });
  };

  const handleDelete = async (id) => {
    const confirm = await alertService('confirm', '¿Seguro deseas eliminar este slide?');
    if (confirm) dispatch(DELETE_SLIDE_FN(id));
  };

  return (
    <Container className="my-4 p-0 border">
      <div className="px-3 my-3 border-5 border-bottom border-secondary">
        <h2 className="text-secondary text-uppercase m-0">Listado de slides</h2>
        <Link
          to="/backoffice/slides/create"
          className="my-3 btn btn-secondary text-white rounded-pill"
        >
          Agregar slides
        </Link>
      </div>

      {loading
        ? <Container className='d-flex justify-content-center'>
          <ProgressSpinner state={loading} />
        </Container>
        : <>
          <Table striped bordered hover>
            <thead className='bg-secondary '>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {slides?.length > 0 &&
            slides?.map((slide) => (
              <tr key={slide?.id}>
                <td>{slide?.id}</td>
                <td>{slide?.name}</td>
                <td className='me-auto ms-auto' style={{ width: '230px' }}>
                  {slide.image !== ''
                    ? (
                      <div style={{ maxWidth: '150px', maxHeight: '150px', overflow: 'hidden' }}>
                        <img
                          src={slide.image}
                          alt={slide.name}
                          className="w-100"
                        />
                      </div>
                    )
                    : (
                      <svg className="img-thumbnail rounded" width="200px" height="100px">
                        <title>{slide.name}</title>
                        <rect width="100%" height="100%" fill="#514242"></rect>
                        <text x="30%" y="50%" fill="#eceeef" dy=".5em">
                          No media
                        </text>
                      </svg>
                    )}
                </td>
                <td className="d-flex justify-content-center align-items-center gap-1">
                  <Button className="btn-danger" onClick={() => handleDelete(slide.id)}>
                    <AiFillDelete />
                  </Button>
                  <Button className="btn-info" onClick={ () => handleEdit(slide.id) }>
                    <RiFileEditFill />
                  </Button>
                </td>
              </tr>
            )).reverse()}
            </tbody>
          </Table>
        </>
      }
    </Container>
  );
};

export default TableSliders;
