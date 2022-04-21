import React from 'react';
import './Contact.css';

const ContactMap = ({ layoutVertical = false }) => {
  return (
    <>
      <div
        className="bg-secondary text-white d-none d-sm-none d-md-block d-flex justify-content-center align-items-center h-map"
      >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2669041354275!2d-58.37959218505248!3d-34.59741176467083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaca1d150b87%3A0x4caf7b2c61e81302!2sParaguay%20733%2C%20C1057AAI%20CABA%2C%20Argentina!5e0!3m2!1ses!2sco!4v1650518009186!5m2!1ses!2sco" className='border-0 w-100 h-100' loading="lazy"></iframe>
      </div>
    </>
  );
};

export default ContactMap;
