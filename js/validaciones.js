function validar_nombreUsuario(String){
   console.log("holaa")
   let input = document.getElementById("in_usuario");
   let regxp = /^([a-zA-Z0-9_-]){3,9}$/;
      if(input != regxp){
      alert("Nombre: "+regxp.test(input.value));
      }
      console.log(123)
   }

function validar_contrasena(String){
   let input = document.getElementById("in_contrasena");
   let regxp = /^([a-zA-Z0-9_-]){6,20}$/;
      if(input != regxp){
      alert("Contraseña: "+regxp.test(input.value));
      }
   }


//module.exports.validar_nombreUsuario = validar_nombreUsuario;
//module.exports.validar_contrasena = validar_contrasena;

