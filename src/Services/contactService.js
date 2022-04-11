/* eslint-disable no-const-assign */
import { Get, Post } from './publicApiService';
import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  PATCH_PRIVATE_API,
  POST_PRIVATE_API,
  PUT_PRIVATE_API,
} from './privateApiService';

const urlContact = process.env.REACT_APP_API_CONTACTS;

// Back
export const getContacts = (id = null) => {
  return GET_PRIVATE_API(urlContact, id);
};

export const putContacts = (id, data) => {
  return PUT_PRIVATE_API(urlContact, id, data);
};

export const patchContacts = (id, data) => {
  return PATCH_PRIVATE_API(urlContact, id, data);
};

export const postContacts = (data) => {
  return POST_PRIVATE_API(urlContact, data);
};

export const deleteContacts = (id) => {
  return DELETE_PRIVATE_API(urlContact, id);
};

// Front
export const SEND_EMAIL = async (DATA) => {
  const response = await Post(
    process.env.REACT_APP_API_CONTACTS,
    // eslint-disable-next-line comma-dangle
    DATA
  );
  return response;
};

//mirar de donde saco el email
export const ORGANIZATION_CONTACT_DATA = async () => {
  const response = await Get(process.env.REACT_APP_API_ORGANIZATION);
  // console.log(JSON.stringify(response.data));
  let contactData = {};
  if (response) {
    contactData = {
      address: response.data.address,
      phone: response.data.phone,
      cellphone: response.data.cellphone,
      facebook_url: response.data.facebook_url,
      linkedin_url: response.data.linkedin_url,
      instagram_url: response.data.instagram_url,
      twitter_url: response.data.twitter_url,
      email: 'somosfundacionmas@gmail.com',
    };
  }
  // console.log(JSON.stringify(contactData));
  return contactData;
};