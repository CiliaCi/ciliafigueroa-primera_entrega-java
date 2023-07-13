// OPERADORES BASICOS PARA CONTROL DE FLUJOS
// operador mayor o igual, >=
// operador menor o igual, <=
// operador igual que, ==
// operador y, &&
// operador o, ||
// operador mayor y menor,  < - >
// operador distinto !=

// Pre entrega 1 - Carrito de compras de una tienda de ropa y accesorios para mascotas

console.log ("Pre entrega 1 - Figueroa Cilia")


let nombre = prompt ("Ingrese su nombre de usuario");
let edad = parseInt(prompt("Ingrese su edad"));
let correo = prompt("Ingrese su correo electronico");
let constraseña = prompt("Ingrese su contraseña");
let repetir_constraseña = prompt("Repita su contraseña");


if (edad >= 18){
    alert("Felicidades tu registro está completo");
} else {
    alert("Necesitar ser mayor de edad para poder hacer compras en está página");
}

//PRODUCTOS 

alert ("Bienvenido a FashionFor2");
alert ("Seleccione los productos que desea comprar");
alert ("Camisa Navideña Perro talla S $ 10.00, Conjunto BobEsponja / Perro talla S - Persona Mujer Talla L $ 50.00, Arnes para perro talla S $ 15.00");


//COSTO DE PRODUCTOS SELECCIONADOS
const valorCamisa = "10";
const valorConjunto = "50";
const valorArnes = "15";


//ELECCION DE PRODUCTOS
const eleccionCamisa = parseInt(prompt("Indique la cantidad de camisas navideñas talla S que llevará?"));
alert ("Se agrego al carrito " + eleccionCamisa + " camisa/as para perro talla S");
const totalCamisa = parseInt(eleccionCamisa*valorCamisa);
console.log ((eleccionCamisa) + " Camisas " + " $ " + (eleccionCamisa* valorCamisa));

const eleccionConjunto = parseInt(prompt("Indique la cantidad de conjuntos de Bob Esponja para usted y su mascota que llevará?"));
alert ("Se agrego al carrito " + eleccionConjunto + " conjuntos de Bob Esponja para usted (mujer talla L) y su mascota");
const totalCaonjunto = parseInt(eleccionConjunto*valorConjunto);
console.log ((eleccionConjunto) + " Conjunto BobEsponja / Perro talla S - Mujer Talla L " + " $ " + (eleccionConjunto* valorConjunto));

const eleccionArnes = parseInt(prompt("Indique la cantidad de arnes talla S que llevará?"));
alert ("Se agrego al carrito " + eleccionArnes + " arnes talla S");
const totalArnes = parseInt(eleccionArnes*valorArnes);
console.log ((eleccionArnes) + " Arnes para perro talla S " + " $ " + (eleccionArnes* valorArnes));


const totalProductos = parseInt('totalCamisa' + 'totalConjunto' + 'totalArnes');


//COSTO DE ENVIO 

alert("Costo de envío al norte: $ 20.00, al sur: $ 15.00, al centro: $ 10.00");
const envioNorte =  "20";
const envioSur = "15";
const envioCentro = "10";
const envio = prompt("Ingrese la zona de envío donde desea recibir sus productos(norte, sur, centro)");
alert("Se agrego al carrito el costo de envío de la zona" + envio);
console.log ( "Zona elegida " + envio);

//CALCULO DE LA COMPRA TOTAL

let pedido = 0;

switch (envio){

    case 'norte':
        pedido = envioNorte + totalProductos;
        alert("Detalle de su compra: " + totalProductos + "costo de productos " + envioNorte + " costo de envio = " + pedido);
        break; 

    case 'sur':
        pedido = envioSur + totalProductos;
        alert("Detalle de su compra: $ " + totalProductos + "costo de productos " + envioSur + " costo de envio = " + pedido);
        break;

    case 'centro':
        pedido = envioCentro + totalProductos;
        alert("Detalle de su compra:  $ " + totalProductos + " costo de productos + $  " + envioCentro + " costo de envio = $  " + pedido);    
        break; 

    default:
        alert("Opcion invalida");
        break;
}


console.log ("Valor total del pedido con envio a zona " + envio + " es de: $" + pedido);



let finalPedido = 0
function final () {
    if (pedido === '80') {
        alert ("Felicidades por el valor de la compra de $ 80.00 recibes gratis un collar para tu mascota");
        console.log ("El valor final del pedido es de: " + valorFinal);
    }
    if (pedido < '80') {
        alert ("Recuerda que por cada $ 80.00 de compra recibes un regalo de FashionFor2");
    }   
}

console.log("Gracias por tu compra. No olvides seguirnos en las redes sociales para enterarte de nuestras proximas promociones.")







//for es un bucle de tipo contable 

/*for(let i = 0; i < 3; i++){
    const primernumero= parseInt(prompt("Ingrese el primer numero"));
    const segundonumero= parseInt (prompt("Ingrese  el segundo numero"));
    const operacion= prompt("Escriba la operacion (sumar, restar, multiplicar, dividir)");

    let resultado = 0;
   
    switch (operacion){
        
        case 'sumar':
            resultado = primernumero + segundonumero;
            alert (resultado);
            break;

        case 'restar':
            resultado = primernumero - segundonumero;
            alert (resultado);
            break;

        case 'multiplicar':
            resultado = primernumero * segundonumero;
            alert (resultado);
            break;                

        case 'dividir':
            resultado = primernumero / segundonumero;
            alert (resultado);
            break;

        default:
            alert("Opcion no valida");
            break;
   }




}*/