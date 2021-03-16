/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
// function mostrar()
// {
// 	var nombre;
// 	var peso;
// 	var sexo;
// 	var edad;
// 	var contadorMujeres = 0;
// 	var acumuladorEdad = 0;
// 	var promedio;
// 	var flag = true;
// 	var hombreMasPesado;
// 	var nombreHombreMasPesado;

// 	for (var i = 0; i < 3; i++ ) {
// 	nombre = prompt("Ingrese nombre");
	
// 	peso = prompt("Ingrese peso");
// 	peso = parseFloat(peso);

	
//   while (isNaN(peso) || peso < 0) {
// 	peso = prompt("ERROR!! Ingrese precio");
//   }
//   	sexo = prompt("ingrese sexo f o m ");

// 		while (sexo != "f" && sexo != "m") {
// 			sexo = prompt("error, ingrese f o m");
// 		}
// 		edad = prompt("Ingrese su edad");
// 		edad = parseInt(edad);

// 		while (isNaN(edad) || edad < 1 ) {
// 			edad = prompt("Ingrese su edad");
// 		}
// 		// a)informar la cantidad de mujeres.
// 		if (sexo == "f") {
// 			contadorMujeres++;
// 		}
// 		// b)la edad promedio en total.
		
// 		acumuladorEdad = acumuladorEdad + edad;
		
// 		// c)el hombre mas pesado.
// 		if (sexo == "m" || flag == true && peso > hombreMasPesado) {
// 			hombreMasPesado = peso;
// 			nombreHombreMasPesado = nombre;
// 			flag = false;
// 		}
// 	}
// 	promedio = acumuladorEdad / 3;

// 	document.write("==========RESULTADOS======== " + "<br>");

//   document.write("a) informar la cantidad de mujeres " + contadorMujeres + "<br>");
//   document.write("b) la edad promedio en total " + promedio + "<br>");
//   document.write("c) el hombre mas pesado " + nombreHombreMasPesado + "<br>");

// }

// QUISPE SOLANGE
// function mostrar()
// {
// 1)De 5  personas que ingresan al hospital se deben tomar y
// validar los siguientes datos.
// nombre , temperatura, sexo y edad.
// a)informar la cantidad de personas de cada sexo.
// b)la edad promedio en total
// c)la mujer con más temperatura(si la hay) 
// pedir datos por prompt y mostrar por document.write o console.log
// var nombre;
// var temperatura;
// var sexo;
// var edad;
// var contadorHombres = 0;
// var contadorMujeres = 0;
// var acumuladorEdad = 0;
// var flagMujer = true;
// var mujerConMasTemperatura;
// var mujerConMayorTemperatura;
// var promedioEdad;

// for(var i = 0;i < 5; i++) {

// 	nombre = prompt("Ingrese su nombre");

// 	temperatura = prompt("Ingrese su temperatura corporal");
// 	temperatura = parseFloat(temperatura);
// 	while (isNaN(temperatura)) {
// 		 temperatura =  prompt("ERROR!! Ingrese su temperatura corporal");
// 	 }

// 	 sexo = prompt("Ingrese su sexo con la inicial correspondiente: f o m");
// 	 while (sexo != "f" && sexo != "m") {
// 	 	sexo = ("ERROR!! Ingrese su sexo con la inicial correspondiente: f o m");

// 	}
// 	 edad = prompt("Ingrese su edad");
// 	 edad = parseInt(edad);
// 	 while (isNaN(edad) && edad < 1) {
// 		edad = prompt("ERROR!! Ingrese su edad"); 
// 	 }
// 	 // a)informar la cantidad de personas de cada sexo.
// 	 if (sexo == "f") {
// 		contadorMujeres++;
// 	 }
// 	 else if (sexo == "m") {
// 		 contadorHombres++;
// 	 }
// 	 // b) la edad promedio en total
// 	 if (edad > 1) {
// 		 acumuladorEdad = acumuladorEdad + edad;
		
// 	 }
// 	// c)la mujer con más temperatura(si la hay)
// 	if (flagMujer == true || sexo == "f" && temperatura > mujerConMasTemperatura) {
// 		mujerConMasTemperatura = temperatura;
// 		mujerConMayorTemperatura = nombre;
// 		flagMujer = false;
// 	}


// }

// promedioEdad = acumuladorEdad / 5;

// document.write("==========RESULTADOS======== " + "<br>");

// document.write(" " + "<br>");

// document.write("a)La cantidad de personas de sexo f: " + contadorMujeres + " La cantidad de personas de sexo m: " + contadorHombres + "<br>");

// document.write("b)La edad promedio en total: " + promedioEdad + "<br>");

// if (flagMujer = true) {
// 	document.write("c)La mujer con más temperatura: " + mujerConMayorTemperatura + "<br>");
// }else {
// 	document.write("No ingreso ninguna mujer");
// }



// }


 


/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/

// Ejercicio 01:
// Se pide una cantidad indeterminada de edades enteras,
// informar:
// el máximo ingresado 
// el mínimo ingresado
// el promedio 
// la cantidad de edades ingresadas
function mostrar()
{
	alert("uno");
}
// maximo y minimo no se inicializan
