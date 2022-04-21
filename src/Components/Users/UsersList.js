import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_FN } from '../../redux/users/action';
import { useEffect } from 'react';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(GET_USER_FN());
  }, []);

  return (
    <div>
      <ul>
        {users.length > 0 && users.map(user => (
          <li key={user.id}>{JSON.stringify(user, null, 2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
