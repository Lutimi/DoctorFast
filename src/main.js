CerrarSesion = document.querySelector(".modalCerrarSesion")
avisoRegistro = document.querySelector(".modalAvisoTxt");



const LocalStorageGlobalVariables = {
    All_Registrations: "All_Registrations",
};


const GetLocalStorage = () => localStorage;
const GetLocalStorageItem = (keyName) => localStorage.getItem(keyName);
const SetLocalStorage = (keyName, value) =>
    localStorage.setItem(keyName, value);



// Convert
const ConvertToJSON = (text) => JSON.parse(text);
const ConvertToString = (obj) => JSON.stringify(obj);



//load data base with json
const Init = () => {
    LoadDataBaseFromJSON();
    // RenderregistersList();
};

const LoadDataBaseFromJSON = () => {
    $.getJSON("../Data.json", function(registers) {
        let registersJSON = ConvertToString(registers);
        SetLocalStorage(LocalStorageGlobalVariables.All_Registrations, registersJSON);
    });
};



const RenderRegistrationList = () => {
    //Primero limpiamos todo la seccion del render
    // $("#showUser").html("");

    //Obtengo los productos de mi Dase de datos
    let RegistersText = GetLocalStorageItem(
        LocalStorageGlobalVariables.All_Registrations
    );

    //los convierto a objeto literal
    let registersJSON = ConvertToJSON(RegistersText);

    //recorremos el JSON y armamos nuestro HTML
    let registerToRender = [];
    $.each(registersJSON, function(key, product) {
        registerToRender.push(ProductCard(product));
    });

    //renderizo en mi web
    $("#showUser").html(registerToRender);
};

const ProductCard = (product) => `<div class="card" id=${
    "card-product-" + product.id
  } style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${product.nombre2}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Stock: ${
              product.apellido2
            }</h6>
         
            <a onclick="AddProduct(${
              product.id
            })" class="btn btn-primary">Agregar al carrito</a>
            
          </div>
        </div>`;