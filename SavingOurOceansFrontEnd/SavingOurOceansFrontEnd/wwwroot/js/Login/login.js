document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formRegistroUsuario").addEventListener('submit', validarFormularioRegistroUsuario);
});

function validarFormularioRegistroUsuario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('nom').value;
    if (usuario.length == 0) {
        alert('No has escrito nada en el usuario');
        return;
    }
    var apellido = document.getElementById('ap').value;
    if (apellido.length == 0) {
        alert('No has escrito nada en el apellido');
        return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
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

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formLogin").addEventListener('submit', validarFormularioLogin);
});

function validarFormularioLogin(evento) {
    evento.preventDefault();
    var email = document.getElementById('email').value;
    if (email.length == 0) {
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