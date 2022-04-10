import * as Yup from 'yup';

const checkFileFormat = (image) => {
  if (image) {
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(image.type)) {
      return false;
    }
  }
  return true;
};

export const ProyectsSchemaValidation = Yup.object().shape({
  title: Yup.string()
    .min(4, 'El nombre debe tener un mínimo de 4 caracteres')
    .required('El nombre es obligatorio'),
  description: Yup.string().required('La descripción es obligatoria'),
  image: Yup.mixed()
    .required('La foto es obligatoria')
    .test('fileFormat', 'Formato de imagen no válido', checkFileFormat),
});
