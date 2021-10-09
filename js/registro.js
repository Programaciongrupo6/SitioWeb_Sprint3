//let registros = [{"usuario":"Juan","contrasena":"Secure"},{"usuario":"Carlos","contrasena":"SecurePassword"},{"usuario":"pedro","contrasena":"123456789"}]
let registros = []

function agregarRegistro() {

    let inputUsuario = document.getElementById("in_usuario").value;
    let inputContrasena = document.getElementById("in_contrasena").value;
    registros.push({ "usuario": inputUsuario, "contrasena": inputContrasena })
    inputUsuario.value = ""
    inputContrasena.value = ""
    console.log("1-Guardado")
    console.log("2-" + inputUsuario)
    console.log("3-" + inputContrasena)
    console.log("4-" + registros)
    console.log("5-" + registros[0].contrasena)
    console.log(registros)
}

function filtrarPorContrasena(arreglo, filtro) {
    console.log(arreglo, filtro)
    let registrosFiltrados = []
    for (let i = 0; i < arreglo.length; i++) {
        let nombre = arreglo[i].usuario;
        let pasword = arreglo[i].contrasena;
        if (pasword.length <= filtro) {
            registrosFiltrados.push({ "usuario": nombre, "contrasena": pasword })
        }
    }
    console.log(registrosFiltrados)
    return registrosFiltrados
}

module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;
