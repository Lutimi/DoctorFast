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