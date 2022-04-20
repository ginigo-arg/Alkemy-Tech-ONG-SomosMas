import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const token = localStorage.getItem('token');

const LogButton = () => {
  return (
    <div>{!token
      ? (
        <Button><Link to='/login'></Link>Login</Button>
      )
      : (
        <Button><Link to='/login'></Link>Logout</Button>
      )}</div>
  );
};

export default LogButton;
