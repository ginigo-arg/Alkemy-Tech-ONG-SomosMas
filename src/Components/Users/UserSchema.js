import * as Yup from 'yup';
import checkFileFormat from '../../Services/imageFormatHelper';

export const SchemaValidation = Yup.object().shape({
  name: Yup
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
    .required('Seleccione una opción'),
  profile_image: Yup
    .mixed()
    .required('Debe adjuntar una imagen')
    .test(
      'fileFormat',
      'Formato de imagen no válido',
      checkFileFormat,
    ),
});
