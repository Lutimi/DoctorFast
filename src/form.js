let registrations = [];

var form2 = document.getElementById('formulario2')

const addUser = (ev) => {
        ev.preventDefault();
        let user2 = {
            id: Date.now(),
            nombre2: $('#nombre2').val(),
            apellido2: $('#apellido2').val(),
            email2: $('#email2').val(),
            phone: $('#phone').val(),
            edad: $('#edad').val(),
            temperatura: $('#temperatura').val(),
            placa: $('#placa').val(),
        }

        window.localStorage.setItem('registration', JSON.stringify(user2));



        // if ($("#nombre2").val().length < 1) {
        //     alert("El nombre2 es obligatorio");
        //     return false;
        // } else if ($("#apellido2").val().length < 1) {
        //     alert("El apellido2 es obligatorio");
        //     return false;
        // } else if ($("#edad").val().length < 1) {
        //     alert("La edad es obligatorio");
        //     return false;
        // } else if ($("#edad").val().length < 1) {
        //     alert("La temperatura es obligatorio");
        //     return false;
        // } else if ($("#edad").val().length < 1) {
        //     alert("El Corre es obligatorio");
        //     return false;
        // }

        registrations.push(user2)
        console.log(registrations)
        console.log("user2 added")
        console.log(user2)



        // if (registrations != []) {
        //     idk.innerHTML = registrations[];
        // }

        // registrations.forEach(element => {

        //     if (element != null || element != [] || elemet.val() > 1) {
        //         idk.innerHTML += `    <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        //     <div class="w-full flex items-center justify-between p-6 space-x-6">
        //       <div class="flex-1 truncate">
        //       <h1 class="text-sm " >ID: ${element.id} </h1>
        //         <div class="flex items-center space-x-3">

        //           <h3 class="text-gray-900 text-sm font-medium truncate">${element.nombre2} ${element.apellido2}</h3>
        //           <span
        //             class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">${element.temperatura} grados</span>
        //         </div>
        //         <p class="mt-1 text-gray-500 text-sm truncate">email2: ${element.email2}</p>
        //         <p class="mt-1 text-gray-500 text-sm truncate">CEL: ${element.phone}</p>
        //         <p class="mt-1 text-gray-500 text-sm truncate">Edad: ${element.edad}</p>
        //         <p class="mt-1 text-gray-500 text-sm truncate">Placa vehicular: ${element.placa}</p>
        //       </div>
        //       <img class="w-12 h-15 bg-gray-300 rounded-full flex-shrink-0"
        //         src="/public/img/guy.svg"
        //         alt="">
        //     </div>
        //     <div>

        //     </div>
        //   </li> `

        //     }
        // });

        registrations.forEach(user => {
            console.log(user.id);


        })


    } // document.forms[0].reset(); // to clear the form for the next user2

// // document.querySelector('form2').reset();
// form2.reset()

// $.getJSON("./Data.json", function(data))

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('enviar').addEventListener('click', addUser);
});

$.getJSON("../Data.json", function(data) {
    var idk = document.getElementById("showUser");

    console.log(data);
    data.forEach(d => {
        var data_list = `<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div class="w-full flex items-center justify-between p-6 space-x-6">
              <div class="flex-1 truncate">
              <h1 class="text-sm " >ID: ${d.id} </h1>
                <div class="flex items-center space-x-3">

                  <h3 class="text-gray-900 text-sm font-medium truncate">${d.nombre2} ${d.apellido2}</h3>
                  <span
                    class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">${d.temperatura} grados</span>
                </div>
                <p class="mt-1 text-gray-500 text-sm truncate">email2: ${d.email2}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">CEL: ${d.phone}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">Edad: ${d.edad}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">Placa vehicular: ${d.placa}</p>
              </div>
              <img class="w-12 h-15 bg-gray-300 rounded-full flex-shrink-0"
                src="/public/img/guy.svg"
                alt="">
            </div>
            <div>

            </div>
          </li> `
        idk.innerHTML = data_list;
    })
});