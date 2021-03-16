/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
// */
  
//   var marca;
//   var precio;
//   var pesoKg;
//   var tipo;

//   var acumuladorPesoCompra;

//   var precioMasCaro;
//   var marcaMasCara;
//   var tipoMasCaro;
//   var flag;

//   var precioMasBarato;
//   var marcaMasBarata;
//   var tipoMasBarato;
//   var flagPrecio;

//   do {

//     marca = prompt("Ingrese marca de producto");
    
//     precio = prompt("Ingrese precio de producto");
//     precio = parseFloat(precio);

//     while (isNaN(precio) && precio < 0) {
//       precio = prompt("ERROR!! Ingrese precio de producto");
//     }
//       pesoKg = prompt("Ingrese precio por kilogramo");
//       pesoKg = parseFloat(pesoKg);

//     while (isNaN(pesoKg) || pesoKg < 0) {
//       pesoKg = prompt("ERROR!! Ingrese precio por kilogramo");
//     }
//       tipo = prompt("Ingrese tipo con sus iniciales: solido/ liquido");
//     while (tipo != "s" && tipo != "l") {
//       tipo = prompt("ERROR!! Ingrese tipo con sus iniciales: solido/ liquido");
//     }
    
// }
// // a)informar el peso total de la compra.
//   //acumulador de cantidades
    
//       acumuladorPesoCompra = acumuladorPesoCompra + pesoKg;

//   // b)la marca del más caro de los líquidos
    
//     if (tipo == "l" && precio > precioMasCaro || flag == true ) {
//       precioMasCaro = precio;
//       marcaMasCara = marca;
//       flag = false;
//     }
//     // c)la marca del más barato de los sólidos
//     if (tipo == "s" && precio > precioMasBarato || flagPrecio == true ) {
//       precioMasBarato = precio;
//       marcaMasBarata = marca;
//       flagPrecio = false;
//     }
    
//   } while (confirm("Desea seguir ingresando datos"));

//   document.write("==========RESULTADOS======== " + "<br>");

//   document.write(" " + "<br>");

//   document.write("a)informar el peso total de la compra " + acumuladorPesoCompra + "<br>");

//   document.write("b)la marca del más caro de los líquidos " + marcaMasCara + "<br>");

//   document.write("c)la marca del más barato de los sólidos " +  marcaMasBarata + "<br>");

// }
function mostrar()
 {
// QUISPE SOLANGE

// 2)De una compra debes ingresar una cantidad indeterminada de productos,
// validando los siguientes datos:
// marca, precio, peso en kilogramos, tipo(sólido o líquido)
// a)informar el peso total de la compra.
// b)la marca del más caro de los líquidos
// c)la marca del más liviano de los sólidos
 
var marca;
var precio;
var peso;
var tipo;
var acumuladorPesoCompra = 0;
var precioMasCaro;
var flagPrecio = true;
var marcaMasCara;
var pesoMasLiviano;
var flagPeso = true;
var marcaDelMasLiviano;

do {
  marca = prompt("Ingrese la marca del producto");

  precio = prompt("Ingrese precio del producto");
  precio = parseFloat(precio);
  while (isNaN(precio) && precio < 0) {
    precio = prompt("ERROR!! Ingrese precio del producto");
  }

  peso = prompt("Ingrese el peso en kg");
  peso = parseFloat(peso);
  while (isNaN(peso) && peso < 0) {
    peso = prompt("ERROR!! Ingrese el peso en kg");
  }

  tipo = prompt("Ingrese el tipo segun sus iniciales: solido(s) / liquido(l)" );
while (tipo != "s" && tipo != "l") {
  tipo = prompt("ERROR!! Ingrese el tipo segun sus iniciales: solido(s) / liquido(l)" );
}
// a)informar el peso total de la compra.

  acumuladorPesoCompra = acumuladorPesoCompra + peso;
  // b)la marca del más caro de los líquidos
  if (flagPrecio == true || tipo == "l" && precio > precioMasCaro) {

    precioMasCaro = precio;
    marcaMasCara = marca;
    flagPrecio = false;
  }

// c)la marca del más liviano de los sólidos
  if ( flagPeso == true || tipo == "s" && peso < pesoMasLiviano) {
    
  pesoMasLiviano = peso;
  marcaDelMasLiviano = marca;
    flagPeso = false;
}

} while (confirm("¿Desea continuar?"));

document.write("==========RESULTADOS======== " + "<br>");

document.write("a)Informar el peso total de la compra: " +  acumuladorPesoCompra + " Kg " + "<br>");
if (flagPrecio = true) {
document.write("b)la marca del más caro de los líquidos: " + marcaMasCara + "<br>");
}else {
  document.write("no se ingreso ningun liquido");
}
if (flagPeso = true) {
document.write("c)la marca del más liviano de los sólidos: " +  marcaDelMasLiviano + "<br>");
}
else{
  document.write("No se ingreso ningun solido");
}

}
/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  alert("dos");
}
