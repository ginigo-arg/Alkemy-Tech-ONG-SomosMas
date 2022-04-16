import React from 'react';
import { Button } from 'react-bootstrap';

const token = localStorage.getItem('token');

const LogButton = () => {
  return (
    <div>{!token
      ? (
        <Button onClick={'/login'}>Login</Button>
      )
      : (
        <Button onClick={'/'}>Logout</Button>
      )}</div>
  );
};

export default LogButton;
