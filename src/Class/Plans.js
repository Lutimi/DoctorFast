class Plan {
constructor(opcion,nombre,price){
    this.opcion=opcion;
    this.nombre=nombre;
    this.price=price;
    
}
}


// function buy(){
//     var compra = {
//     opcion: parseInt(prompt("Ingrese el numero del paquete que desa compra [1]Condomio [2] Pueblo [3] Empresa")),   
//     pack: function(){
//         if (this.opcion == 1) {
//             console.log("Plan condomino selecionado");
           
//           } else if (this.opcion == 2) {
//             console.log("Plan Pueblo selecionado");
//           } else if (this.opcion == 3){
//             console.log("Plan Empresa selecionado");
//           }
//            else{
//                console.log("Plan no encontrado");
//            }         
//         },         
    
//     precio: function(){
        
//         if (this.opcion == 1) {
//             console.log("El precio es: $30")
//         } else if (this.opcion == 2){
//             console.log("El precio es: $60")
//         } else if (this.opcion == 3){
//             console.log("El precio es: $180")
//         } else {
//             alert("Precio no definido")
//         }
//     }
//     }

//     console.log("La opcion escogida es:" + compra.opcion);
//     console.log(compra.pack())
//     console.log(compra.precio())
// }

// function get_Info(){
//     //Registrar Usuario
//     var persona = {
//         nombre: prompt("Nombre: "),
        
//         edad: parseInt(prompt("Edad: ")),
//         id: prompt("Documento de indentidad(8 digitos): "),
//         temperatura: parseFloat(prompt("Temperatura registrada (en grados): ")),
//         access_code: function(){
//             console.log("Tu codigo de ingreso es: "+this.nombre.substr(-3,2) + ("#@S")+ this.edad
//             + this.temperatura);

//         }
//     }

//     console.log("Nombre:"+ persona.nombre);
//     console.log("Edad:" + persona.edad);
//     console.log("id:" +persona.id);
//     console.log(persona.access_code());
//     console.log("Temperatura:" + persona.temperatura);
   

    
// }