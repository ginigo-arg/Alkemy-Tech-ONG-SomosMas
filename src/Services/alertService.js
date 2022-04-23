import Swal from 'sweetalert2';

export const alertService = async (type, message, timer = 5000, autoClose = true) => {
  type = type.toLowerCase();

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

  return Swal.fire(autoClose
    ? {
      text: message,
      icon: type,
      confirmButtonText: 'Cerrar',
      timer: timer,
    }
    : {
      text: message,
      icon: type,
      confirmButtonText: 'Cerrar',
    },
  );
};
