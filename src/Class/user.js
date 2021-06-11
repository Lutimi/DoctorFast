const form = document.getElementById('formulario')
const user = document.getElementById('user')
    // const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const password = document.getElementById('password')

var userData = $('#userData');


form.addEventListener("submit", function(event) {
    event.preventDefault();
    let users = Array({
        usuario: user.value,
        // apellido: apellido.value,
        email: email.value,
        constraseña: password.value,

    });
    console.log(users);
    localStorage.setItem('user', JSON.stringify(users));

    overlay.hide();
    modal.hide();
    register.hide();
    $('#userNav').removeClass("hidden");
    $('close1').toggle("hidden");
    window.location.reload()


});



class User {
    constructor(user, edad, id, temperatura) {
        this.user = user;
        this.edad = edad;
        this.id = id;
        this.temperatura = temperatura;
        this.alive = true; // usuario registrado activo
        // this.access_code = function () {
        //     console.log("Tu codigo de ingreso es: " + this.user.substr(-3, 2) + ("#@S") + this.edad
        //         + this.temperatura);
        // }
    }
}



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