import * as Yup from 'yup';

export const checkFileFormat = (photo) => {
  if (photo) {
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(photo.type)) {
      return false;
    }
  }
  return true;
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'El nombre debe tener un mínimo de 4 caracteres')
    .required('El nombre es obligatorio'),
  description: Yup.string().required('La descripción es obligatoria'),
  image: Yup.mixed()
    .required('La foto es obligatoria')
    .test('fileFormat', 'Formato de imagen no válido', checkFileFormat),
});

export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = error => {
      reject(error);
    };
  }).then(base64 => { return base64; });
};
