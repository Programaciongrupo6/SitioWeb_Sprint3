let registros = []

function agregarRegistro() {
    let inputUsuario = document.getElementById("in_usuario").value;
    let inputContrasena = document.getElementById("in_contrasena").value;
    registros.push({ "usuario": inputUsuario, "contrasena": inputContrasena })
}

function filtrarPorContrasena(arreglo, filtro) {

    let formularios = arreglo.filter(formulario => (formulario.contrasena).length <= filtro);
    console.log(formularios);
    return formularios;
}

module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;
