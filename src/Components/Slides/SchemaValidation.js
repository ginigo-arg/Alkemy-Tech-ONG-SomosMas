import * as yup from 'yup';

const checkFileFormat = img => {
  if (img) {
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(img.type)) {
      return false;
    }
  }
  return true;
};

export const SchemaValidation = yup.object().shape({
  name: yup.string().required('el nombre el obligatorio').min(4, 'El nombre debe tener un minimo de 4 caracteres'),
  description: yup.string().required('La descripcion es obligatoria'),
  order: yup.number().required('El ID es obligatorio').positive().integer(),
  img: yup.mixed().required('La imagen es obligatoria').test(
    'fileFormat',
    'Formato de imagen no válido',
    checkFileFormat,
  ),
});
