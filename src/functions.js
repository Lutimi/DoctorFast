function CrearUsuario() {
    nombreUsuario = $("#nombreUsuario");
    correoUsuario = $("#correoUsuario");
    contraseñaUsuario = $("#contraseñaUsuario");


    if (nombreUsuario.value === "" || correoUsuario.value === "" || contraseñaUsuario.value === "") {

        avisoRegistro.textContent = "Datos no validos, ingresalos nuevamente";
        btnEsconder.style.display = "";
        $("#modalAviso").modal("show");

    } else if (validaCorreoElectronico(correoUsuario.value) === false) {

        avisoRegistro.textContent = "El formato del correo electrónico es incorrecto. Verifica y vuelve a intentar.";
        // btnEsconder.style.display = "";
        $("#modalAviso").modal("show");

    } else {

        let nombre = nombreUsuario.value;
        let correo = correoUsuario.value;
        let contraseña = contraseñaUsuario.value;

        let usuarioNuevo = new Usuario(nombre, correo, contraseña);

        registrarUsuarioSession(usuarioNuevo);

        avisoRegistro.textContent = "Registro exitoso.";
        btnEsconder.style.display = "none";
        $("#modalAviso").modal("show");
        nombreRegistro.value = ""
        correoRegistro.value = ""
        contraseñaRegistro.value = ""
    }
}



// Registra el usuario en el localStorage. Bloquea el botón de registro.

function registrarUsuarioSession(usuarioNuevo) {

    const { nombre, correo } = usuarioNuevo;

    let usuarioNuevoJSONSession = JSON.stringify(usuarioNuevo);
    localStorage.setItem("usuarios", usuarioNuevoJSONSession);
    usuarioActivo = JSON.parse(localStorage.getItem("usuarios"));
    document.getElementById("nombreUsuario").innerHTML = `${ correo }, ${ nombre }`;
    document.getElementById("CrearUsuario").disabled = true;

}

// Verifica si hay una sesión previa en el localStorage y la recupera.

function reestableceSesion() {
    if (localStorage.usuarios !== undefined) {

        usuarioActivo = JSON.parse(localStorage.getItem("usuarios"));
        const { nombre, correo } = usuarioActivo;
        document.getElementById("nombreUsuario").innerHTML = `${ correo }, ${ nombre }`;
        document.getElementById("CrearUsuario").disabled = true;
    }
}

function registrarUsuarioSession(usuarioNuevo) {

    const { nombre, correo } = usuarioNuevo;

    let usuarioNuevoJSONSession = JSON.stringify(usuarioNuevo);
    localStorage.setItem("usuarios", usuarioNuevoJSONSession);
    usuarioActivo = JSON.parse(localStorage.getItem("usuarios"));
    document.$("nombreUsuario").html(`${ correo }, ${ nombre }`)
    document.getElementById("CrearUsuario").disabled = true;

}


const usernav = document.getElementById('userNav');
const idk = document.getElementById('loginInfo');
const close2 = document.getElementById('close2');
var showUser = $('#userNav')


class User {
    constructor(nombre, edad, id, temperatura) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
        this.temperatura = temperatura;
        this.alive = true; // usuario registrado activo
        // this.access_code = function () {
        //     console.log("Tu codigo de ingreso es: " + this.nombre.substr(-3, 2) + ("#@S") + this.edad
        //         + this.temperatura);
    }
}

let username = JSON.parse(localStorage.getItem('user'));


if (username != null) {
    userNav.innerHTML = '<h1 id="close" class="text-black text-sm"> Bienvenido! ' + username[0].usuario + '</h1> ';
} else {
    idk.innerHTML = `<button id="register" class=" rounded-md shadow show-modal  text-black bg-white   hover:bg-gray-100 px-4 py-2 border 
    text-sm font-medium   select-none 
    no-outline focus:shadow-outline">Registrate
   </button> `

}

close2.addEventListener('click', function() {
    localStorage.clear('user');

    idk.innerHTML = `<button id="register" class=" rounded-md shadow show-modal  text-black bg-white   hover:bg-gray-100 px-4 py-2 border 
    text-sm font-medium   select-none 
    no-outline focus:shadow-outline">Registrate
   </button> 

  
   
   `
    window.location.reload()
});

// console.log(username);