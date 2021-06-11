function GuardarUsuariosRegistrados(nuevoUsuario) {
    //Cargar usuarios registrados
    var allUserSeed = JSON.parse(localStorage.getItem("users"));
    if (!allUserSeed) {
        allUserSeed = [];
    }
    //Agrego el nuevo usuario
    allUserSeed.push(nuevoUsuario)
        //Formateo para persistir la informacion
    var nuevoUsuarioJSON = JSON.stringify([allUserSeed]);
    //guardo
    localStorage.setItem("users", nuevoUsuarioJSON);
}

//Mostrar array de usurios
// JSON.parse(
//     localStorage.getItem("users")
//     )