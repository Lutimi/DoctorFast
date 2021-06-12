let registrations = [];

window.onload = Init();
var form2 = document.getElementById('formulario2')

var initData = {
    id: 1,
    nombre2: "Juan ",
    apellido2: "perez",
    email2: "coder1@hotmail.com",
    phone: "972730589",
    edad: 18,
    temperatura: "34",
    placa: "AZXINE3",
};

window.localStorage.setItem("initData", JSON.stringify(initData));

var retriveInitObj = JSON.parse(window.localStorage.getItem("initData"));

var individualObjs = Object.values(retriveInitObj)
    // console.log(individualObjs[0])

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

    var grabRegistrations = JSON.parse(window.localStorage.getItem("registration"));
    console.log(grabRegistrations)
    let html2 = "";
    html2 += `<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div class="w-full flex items-center justify-between p-6 space-x-6">
                  <div class="flex-1 truncate">
                  <h1 class="text-sm " >ID: ${grabRegistrations['id']} </h1>
                    <div class="flex items-center space-x-3">

                  <h3 class="text-gray-900 text-sm font-medium truncate">${grabRegistrations['nombre2']} ${grabRegistrations['apellido2']}</h3>
                  <span
                    class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">${grabRegistrations['temperatura']} grados</span>
                </div>
                <p class="mt-1 text-gray-500 text-sm truncate">email: ${grabRegistrations['email2']}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">CEL: ${grabRegistrations['phone']}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">Edad: ${grabRegistrations['age']}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">Placa vehicular: ${grabRegistrations['placa']}</p>
              </div>
              <img class="w-12 h-15 bg-gray-300 rounded-full flex-shrink-0"
                src="lpublic/img/guy.svg"
                alt="">
            </div>
            <div>

            </div>
          </li> `;
    $("#showUser").append(html2);
}



let html = "";
html += `<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div class="w-full flex items-center justify-between p-6 space-x-6">
              <div class="flex-1 truncate">
              <h1 class="text-sm " >ID: ${individualObjs[0]} </h1>
                <div class="flex items-center space-x-3">

                  <h3 class="text-gray-900 text-sm font-medium truncate">${individualObjs[1]} ${individualObjs[2]}</h3>
                  <span
                    class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">${individualObjs[6]} grados</span>
                </div>
                <p class="mt-1 text-gray-500 text-sm truncate">email2: ${individualObjs[4]}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">CEL: ${individualObjs[5]}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">Edad: ${individualObjs[3]}</p>
                <p class="mt-1 text-gray-500 text-sm truncate">Placa vehicular: ${individualObjs[7]}</p>
              </div>
              <img class="w-12 h-15 bg-gray-300 rounded-full flex-shrink-0"
              src="../public/img/guy.svg"
                alt="">
            </div>
            <div>

            </div>
          </li> `;
$("#showUser").append(html);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enviar").addEventListener("click", addUser);
});