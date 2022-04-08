import * as Yup from 'yup';

const checkFileFormat = logo => {
  if (logo) {
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(logo.type)) {
      return false;
    }
  }
  return true;
};

export const orgSchemaValidation = Yup.object().shape({
  name: Yup
    .string()
    .required('El nombre es obligatorio'),
  shortDescription: Yup
    .string()
    .required('La descripción breve es obligatoria'),
  longDescription: Yup
    .string()
    .required('La descripción detallada es obligatoria'),
  logo: Yup
    .mixed()
    .required('El logo es obligatorio')
    .test(
      'fileFormat',
      'Formato de logo no válido',
      checkFileFormat,
    ),
});
