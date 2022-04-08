import * as Yup from 'yup';

const checkFileFormat = photo => {
  if (photo) {
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(photo.type)) {
      return false;
    }
  }
  return true;
};

export const memberSchemaValidation = Yup.object().shape({
  name: Yup
    .string()
    .min(4, 'El nombre debe tener un mínimo de 4 caracteres')
    .required('El nombre es obligatorio'),
  description: Yup
    .string()
    .required('La descripción es obligatoria'),
  photo: Yup
    .mixed()
    .required('La foto es obligatoria')
    .test(
      'fileFormat',
      'Formato de imagen no válido',
      checkFileFormat,
    ),
  social: Yup.object({
    facebook: Yup.string()
      .required('Facebook es obligatorio')
      .url('La URL no es válida'),
    twitter: Yup.string()
      .required('Twitter es obligatorio')
      .url('La URL no es válida'),
    instagram: Yup.string()
      .required('Instagram es obligatorio')
      .url('La URL no es válida'),
  }),
});
