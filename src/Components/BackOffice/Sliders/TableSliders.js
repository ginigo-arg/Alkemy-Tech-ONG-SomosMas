import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_SLIDE_FN, GET_SLIDE_BACKOFFICE_FN, CLEAR_SINGLE_SLIDE_FN } from '../../../redux/slides/actions';
import { alertService } from '../../../Services/alertService';

const TableSliders = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { slides } = useSelector(state => state.slides);

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

  const handleCreate = () => {
    history.push({
      pathname: '/backoffice/slides/create',
    });
  };

  const handleDelete = async (id) => {
    const confirm = await alertService('confirm', '¿Seguro deseas eliminar este slide?');
    if (confirm) dispatch(DELETE_SLIDE_FN(id));
  };

  return (
    <div>
      <Button className="btn-info" onClick={handleCreate}>
        Crear slide
      </Button>
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
          {slides?.length > 0 &&
            slides?.map((slide) => (
              <tr key={slide?.id}>
                <td>{slide?.id}</td>
                <td>{slide?.name}</td>
                <td>
                  <img src={slide?.image} alt={slide?.name} className="w-25" />
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
    </div>
  );
};

export default TableSliders;
