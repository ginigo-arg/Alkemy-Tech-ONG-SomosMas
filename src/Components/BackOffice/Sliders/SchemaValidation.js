import * as yup from 'yup';

const checkFileFormat = photo => {
  if (photo) {
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(photo.type)) {
      return false;
    }
  }
  return true;
};

export const SchemaValidation = yup.object().shape({
  name: yup.string().required('el nombre el obligatorio').min(4, 'El nombre debe tener un minimo de 4 caracteres'),
  description: yup.string().required('La descripcion es obligatoria'),
  image: yup.mixed().required('La imagen es obligatoria').test(
    'fileFormat',
    'Formato de imagen no válido',
    checkFileFormat,
  ),
});
