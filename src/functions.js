const usernav = document.getElementById('userNav');
const idk = document.getElementById('loginInfo');
const close2 = document.getElementById('close2');
var showUser = $('#userNav')

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

console.log(username);