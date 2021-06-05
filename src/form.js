




let users = [];

const addUser = (ev) => {
    ev.preventDefault(); // stop the for submitting
    let user = {
        id: Date.now(),
        nombre: $('#nombre').val(),
        apellido: $('#apellido').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        edad: $('#edad').val(),
        temperatura: $('#temperatura').val(),
        placa: $('#placa').val(),
    }




    if ($("#nombre").val().length < 1) {
        alert("El nombre es obligatorio");
        return false;
    } else if ($("#apellido").val().length < 1) {
        alert("El apellido es obligatorio");
        return false;
    } else if ($("#edad").val().length < 1) {
        alert("La edad es obligatorio");
        return false;
    } else if ($("#edad").val().length < 1) {
        alert("La temperatura es obligatorio");
        return false;
    } else if ($("#edad").val().length < 1) {
        alert("El Corre es obligatorio");
        return false;
    }

    users.push(user)
    console.log(user)


    const idk = document.querySelector("#showUser");
    if (users != []) {
        idk.innerHTML = users[user.lenght - 1];
    }

    users.forEach(element => {

        if (element != null || element != [] || elemet.val() > 1 ) {
            idk.innerHTML += `    <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div class="w-full flex items-center justify-between p-6 space-x-6">
              <div class="flex-1 truncate">
              <h1 class="text-sm " >ID: ${element.id} </h1>
                <div class="flex items-center space-x-3">
                
                  <h3 class="text-gray-900 text-sm font-medium truncate">${element.nombre} ${element.apellido}</h3>
                  <span
                    class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">${element.temperatura} grados</span>
                </div>
                <p class="mt-1 text-gray-500 text-sm truncate">Email: ${element.email}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">CEL: ${element.phone}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">Edad: ${element.edad}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">Placa vehicular: ${element.placa}</p>
              </div>
              <img class="w-12 h-15 bg-gray-300 rounded-full flex-shrink-0"
                src="/public/img/guy.svg"
                alt="">
            </div>
            <div>
             
            </div>
          </li> `

        }

  
        // function deleteUser() {
        //     idk.innerHTML = ' '
        // }
    });


    // document.forms[0].reset(); // to clear the form for the next user
    document.querySelector('form').reset();

}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addUser);
});



