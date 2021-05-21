

var comprar = document.getElementById('comprar');
var button = document.getElementById('data');

if (button) {
    button.addEventListener('click',get_Info);
} 
// if(comprar)   { 
//     comprar.addEventListener('click',buy);
// } 

function get_Info() {
    var nombre = prompt("Ingresa nombre: ");

    var edad = parseInt(prompt("Ingresa edad: "));
    
    var temperatura = parseInt(prompt("Temperatura registrada: ")); 
    var id = parseInt(prompt("Ingresa tu documentod de indentidad(8digitos):")); 
    
    
    var nuevousuario = new User(nombre,edad,temperatura,id);
    
    GuardarUsuariosRegistrados(nuevousuario); //guardad usuario que registremos
}






