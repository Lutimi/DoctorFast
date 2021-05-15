var comprar = document.getElementById('comprar');
var button = document.getElementById('data');

if (button) {
    button.addEventListener('click',get_Info);
} 
if(comprar)   { 
    comprar.addEventListener('click',buy);
} 




function get_Info(){
    //Registrar Usuario
    var persona = {
        nombre: prompt("Nombre: "),
        edad: parseInt(prompt("Edad: ")),
        id: prompt("Documento de indentidad(8 digitos): "),
        temperatura: parseFloat(prompt("Temperatura registrada (en grados): ")),
        access_code: function(){
            alert("Tu codigo de ingreso es: "+this.nombre.substr(-3,2) + ("#@S")+ this.edad.substr(2,3) 
            + this.temperatura);

        }
    }
}


function buy(){
    var compra = {
    opcion: parseInt(prompt("Ingrese el numero del paquete que desa compra [1]Condomio [2] Pueblo [3] Empresa")),   
    pack: function(){
        switch(this.opcion){
        case '1':
            alert("Plan condomino selecionado")
            break;
        case '2':
            alert("Plan Pueblo selecionado")
            break;
        case '3':
            alert("Plan Empresa selecionado")
            break;
        default:
            alert("Plan no encontrado")
            break;
        }         
    },
    precio: function(){
        
        if (this.opcion == 1) {
            alert("El precio es: $30")
        } else if (this.opcion == 2){
            alert("El precio es: $60")
        } else if (this.opcion == 3){
            alert("El precio es: $180")
        } else {
            alert("Precio no definido")
        }
    }
    }
}



