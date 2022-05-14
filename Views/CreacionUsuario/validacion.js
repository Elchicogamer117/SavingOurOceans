document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('nom').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var apellido = document.getElementById('ap').value;
    if(apellido.length == 0) {
      alert('No has escrito nada en el apellido');
      return;
    }
    var email = document.getElementById('email').value;
    if(email.length == 0) {
      alert('No has escrito nada en el correo');
      return;
    }
    var clave = document.getElementById('pass').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }