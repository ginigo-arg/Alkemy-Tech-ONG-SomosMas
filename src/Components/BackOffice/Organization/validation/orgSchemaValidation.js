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
  short_description: Yup
    .string()
    .required('La descripción breve es obligatoria'),
  long_description: Yup
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
  facebook_url: Yup.string()
    .required('Facebook es obligatorio')
    .url('La URL no es válida'),
  twitter_url: Yup.string()
    .required('Twitter es obligatorio')
    .url('La URL no es válida'),
  instagram_url: Yup.string()
    .required('Instagram es obligatorio')
    .url('La URL no es válida'),
  linkedin_url: Yup.string()
    .required('Linkedin es obligatorio')
    .url('La URL no es válida'),
});
