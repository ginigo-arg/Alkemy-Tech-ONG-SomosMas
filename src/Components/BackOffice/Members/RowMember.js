import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { RiFileEditFill } from 'react-icons/ri';
import { alertService } from '../../../Services/alertService';
import { useDispatch } from 'react-redux';
import { DELETE_MEMBER_FN } from '../../../redux/Miembros/action';

const RowMember = ({ member }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEdit = () => {
    history.push('/backoffice/members/edit', {
      id: member.id,
    });
  };

  const handleDelete = async () => {
    const confirm = await alertService('confirm', 'Seguro deseas eliminar este miembro?');
    if (confirm) dispatch(DELETE_MEMBER_FN(member.id));
  };

  return (
    <tr className="align-middle">
      <td className="px-3">{member.name}</td>
      <td className="text-center" style={{ width: '230px' }}>
        {member.image !== ''
          ? (
            <div style={{ maxWidth: '150px', maxHeight: '150px', overflow: 'hidden' }}>
              <img
                src={member.image}
                alt={member.name}
                className="w-100"
              />
            </div>
          )
          : (
            <svg className="img-thumbnail rounded" width="200px" height="100px">
              <title>{member.name}</title>
              <rect width="100%" height="100%" fill="#514242"></rect>
              <text x="30%" y="50%" fill="#eceeef" dy=".5em">
                No media
              </text>
            </svg>
          )}
      </td>
      <td className="text-center" style={{ width: '70px' }}>
        <Button onClick={handleDelete} className="btn btn-danger text-white" title="Eliminar">
          <AiFillDelete />
        </Button>
      </td>
      <td className="text-center" style={{ width: '70px' }}>
        <Button onClick={handleEdit} className="btn btn-info text-dark" title="Editar">
          <RiFileEditFill />
        </Button>
      </td>
    </tr>
  );
};

export default RowMember;
