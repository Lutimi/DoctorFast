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
    var data = $.getJSON("../Data.json", function(registers) {
        console.log(registers[0])
        let registersJSON = ConvertToString(registers);
        console.log(typeof JSON.parse(registersJSON))
        localStorage.setItem('registrations', JSON.stringify(registersJSON))
    });
    return data
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
