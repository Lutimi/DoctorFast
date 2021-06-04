let users = [];

const addUser = (ev) => {
    ev.preventDefault(); // stop the for submitting
    let user = {
        id: Date.now(),
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        edad:document.getElementById('edad').value,
        temperatura:document.getElementById('temperatura').value,
        placa:document.getElementById('placa').value
    }
    users.push(user)
    console.log(user)


    const idk = document.querySelector("#showUser")

    

   
    users.forEach(element => {
       
        idk.innerHTML +=   `  <h1 class=" text-white text-2xl" >${ element.nombre}</h1>   
        <button type="submit" onclick=deleteUser() class="bg-gray-200">
        Borrar
      </button> `

      function deleteUser() {
        idk.innerHTML = ' '
    }
    });

   

// generar un button 
    // // document.forms[0].reset(); // to clear the form for the next user
    // document.querySelector('form').reset();
    
    // //for display 
    // console.warn('added', {users} );
    // let pre = document.querySelector('#msg pre')
    // pre.textContent = '\n' + JSON.stringify(users, '\t',2);
    // //saving to local storage
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addUser);
});



