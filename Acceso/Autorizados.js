document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  
  // Obtener los valores ingresados por el usuario
  var usuario = document.getElementById("usuario").value;
  var clave = document.getElementById("clave").value;
  
  // Supongamos que tienes un JSON con la lista de usuarios y contraseñas
  var usuariosJSON = [
      {"usuario": "Mati", "clave": "1234"},
      {"usuario": "Fran", "clave": "1234"},
      {"usuario": "Romi", "clave": "1234"},
      {"usuario": "Fede", "clave": "1234"}
  ];

  // Validar el usuario y la contraseña
  var usuarioValido = usuariosJSON.find(function(usr) {
    return usr.usuario === usuario && usr.clave === clave;
  });

  if (usuarioValido) {
    // Redirigir a la página admin.html si el usuario es válido
    //window.location.href = "Punto_de_Venta\admin.html";
    console.log("Usuario válido");
    window.location.href = "../Punto_de_Venta/admin.html";
  } else {
    alert("Usuario o contraseña incorrectos. Inténtalo nuevamente.");
  }
});
