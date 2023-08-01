// OPERADORES BASICOS PARA CONTROL DE FLUJOS
// operador mayor o igual, >=
// operador menor o igual, <=
// operador igual que, ==
// operador y, &&
// operador o, ||
// operador mayor y menor,  < - >
// operador distinto !=


console.log("Pre entrega 1 - Figueroa Cilia");

let nombre = prompt("Ingrese su nombre de usuario");
let edad = parseInt(prompt("Ingrese su edad"));
let correo = prompt("Ingrese su correo electronico");
let contraseña = prompt("Ingrese su contraseña");
let repetir_contraseña = prompt("Repita su contraseña");

if (edad >= 18) {
  alert("Felicidades tu registro está completo");
} else {
  alert("Necesitar ser mayor de edad para poder hacer compras en esta página");
}

// Creamos arrays para almacenar los productos y sus precios
const productos = ["Camisa Navideña", "Conjunto BobEsponja", "Arnes"];
const precios = [10, 50, 15];
const carrito = []; // Array para almacenar los productos seleccionados

alert("Bienvenido a FashionFor2");
alert("Seleccione los productos que desea comprar");
alert(
  "Camisa Navideña Perro talla S $ 10.00, Conjunto BobEsponja / Perro talla S - Persona Mujer Talla L $ 50.00, Arnes para perro talla S $ 15.00"
);

// ELECCION DE PRODUCTOS
for (let i = 0; i < productos.length; i++) {
  let cantidad = parseInt(prompt(`Indique la cantidad de ${productos[i]} que llevará?`));
  console.log(`${cantidad} ${productos[i]} $ ${cantidad * precios[i]}`);

  // Agregamos los productos seleccionados al carrito
  carrito.push({
    producto: productos[i],
    cantidad: cantidad,
    precio: cantidad * precios[i]
  });
}

// Mostramos los productos agregados al carrito
for (let item of carrito) {
  console.log(`${item.cantidad} ${item.producto}(s) $ ${item.precio}`);
}

// CALCULO DE LA COMPRA TOTAL
let totalProductos = 0;
for (let item of carrito) {
  totalProductos += item.precio;
}

// COSTO DE ENVIO
alert("Costo de envío al norte: $ 20.00, al sur: $ 15.00, al centro: $ 10.00");
const envioNorte = 20;
const envioSur = 15;
const envioCentro = 10;

const envio = prompt(
  "Ingrese la zona de envío donde desea recibir sus productos (norte, sur, centro)"
);

//CALCULO DE LA COMPRA TOTAL CON ENVIO
let pedido = 0;

switch (envio) {
  case "norte":
    pedido = envioNorte + totalProductos;
    break;

  case "sur":
    pedido = envioSur + totalProductos;
    break;

  case "centro":
    pedido = envioCentro + totalProductos;
    break;

  default:
    alert("Opcion invalida");
    break;
}

console.log("Valor total del pedido con envio a zona " + envio + " es de: $" + pedido);

// MENSAJE FINAL
function final() {
  if (pedido === 80) {
    alert("Felicidades por el valor de la compra de $ 80.00 recibes gratis un collar para tu mascota");
    console.log("El valor final del pedido es de: " + pedido);
  } else if (pedido < 80) {
    alert("Recuerda que por cada $ 80.00 de compra recibes un regalo de FashionFor2");
  }
}

final();

console.log(
  "Gracias por tu compra. No olvides seguirnos en las redes sociales para enterarte de nuestras próximas promociones."
);






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