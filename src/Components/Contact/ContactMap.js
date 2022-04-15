import React from 'react';
import './Contact.css';

const ContactMap = ({ layoutVertical = false }) => {
  return (
    <>
      <div
        md={12}
        className="bg-secondary text-white d-none d-sm-none d-md-block d-flex justify-content-center align-items-center map"
      >
        <div>Aquí pretendemos cargar un mapa</div>
      </div>
    </>
  );
};

export default ContactMap;
