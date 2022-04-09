import * as Yup from 'yup';

export const SchemaValidation = Yup.object().shape({
  fullname: Yup
    .string()
    .min(4, 'Debe contener un mínimo de 4 caracteres')
    .required('Debe completar este campo'),
  email: Yup
    .string()
    .email('Correo electrónico inválido')
    .required('Debe completar este campo'),
  password: Yup
    .string()
    .min(8, 'Debe contener un mínimo de 8 caracteres')
    .required('Debe completar este campo'),
  role_id: Yup
    .number()
    .required('Debe seleccionar una opción'),
  profile_image: Yup
    .string()
    .required('Debe adjuntar una imagen')
    .matches(/(.jpg|.png)/, 'Solo formato .jpg, o .png'),
});
