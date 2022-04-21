import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GET_SLIDE_BACKOFFICE_FN } from '../../../redux/slides/actions';

const TableSliders = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const slides = useSelector(state => state.slides.data);

  useEffect(() => {
    dispatch(GET_SLIDE_BACKOFFICE_FN());
  }, []);
  useEffect(() => {
    console.log('slides back:', slides);
  }, [slides]);

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
                  <Button className="btn-info" onClick={ () => handleEdit(slide.id) }>
                    <RiFileEditFill />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
export default TableSliders;
