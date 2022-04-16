const checkFileFormat = photo => {
  ['image/jpg', 'image/jpeg', 'image/png'].includes(photo.type);
};

export default checkFileFormat;
