import * as Yup from 'yup';

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
