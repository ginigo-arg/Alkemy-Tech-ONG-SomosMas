import Swal from 'sweetalert2';

export const alertService = async (type, message) => {
  if (type === 'confirm') {
    return Swal.fire({
      title: message,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) return true;
      else if (result.isDenied) return false;
    });
  }

  return Swal.fire({
    text: message,
    icon: type,
    confirmButtonText: 'Cerrar',
    timer: 2000,
  });
};
