/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{ 
	// QUISPE SOLANGE
	var sexo;
	var lugar;
	var temporada;
	var cantidadPersonas;
	var contadorBariloche = 0;
	var contadorCataratas = 0;
	var contadorSalta = 0;
	var lugarMasVisitado;
	var flag;
	var mayorCantidadPersonas;
	var sexoDelTitular;
	var acumuladorPersPorViaje = 0;
	var contadorPersPorViaje = 0;



	do {
		// sexo del titular ,
		//lugar ( “bariloche”, “cataratas” o “salta”),
		// temporada(“otoño”,”invierno, “verano,”primavera”),
		// cantidad de personas que viajan.
		// informar:


		sexo = prompt("ingrese sexo f o m ");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("error, ingrese f o m");
		}


		lugar = prompt("ingrese lugar con sus iniciales bariloche/cataratas/salta ");
		while (lugar != "b" && lugar != "c" && lugar != "s") {
			lugar = prompt("error, ingrese lugar con sus iniciales bariloche/cataratas/salta");
		}

		temporada = prompt("ingrese temporada con sus iniciales otoño/invierno/verano/primavera");
		while (temporada != "o" && temporada != "i" && temporada != "p" && temporada != "p") {
			temporada = prompt("error, ingrese temporada con sus iniciales otoño/invierno/verano/primavera");
		}
		cantidadPersonas = parseInt(prompt("ingrese cantidad de personas que viajan"));

		while (isNaN(cantidadPersonas) || cantidadPersonas < 1) {
			cantidadPersonas = parseInt(prompt("error. ingrese cantidad de personas que viajan"));
		}

		//a)el lugar más elegido

		switch(lugar){

			case "bariloche":
				if( lugar == "bariloche"){
					contadorBariloche++;
				}
				break;
			case "cataratas":
				if(lugar == "cataratas"){
					contadorCataratas++;
		
				}
				break;
			case "salta":
				if(lugar == "salta"){
					contadorSalta++;	
				}
				break;
		}
		
		if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
				lugarMasVisitado = "b";	  
			
		  }else{
			  if(contadorCataratas > contadorSalta && contadorCataratas >= contadorBariloche){
				lugarMasVisitado = "c";	  
				
			  }else{

				lugarMasVisitado = "s";	  
			  }
		 }	
		// B)el sexo de titular que lleva más pasajeros.
		if (flag == true || cantidadPersonas > mayorCantidadPersonas) {
			mayorCantidadPersonas = cantidadPersonas;
			sexoDelTitular = sexo;
			flag = false;
		}
		//c)el promedio de personas por viaje, que viajan en invierno
		if (temporada == "i") {
			acumuladorPersPorViaje = acumuladorPersPorViaje + cantidadPersonas;
			contadorPersPorViaje++;
		}
		
	} while (confirm("desea seguir?")); 
	


promedio = acumuladorPersPorViaje / contadorPersPorViaje;

  document.write("==========RESULTADOS======== " + "<br>");

  document.write("a)el lugar más elegido " + lugarMasVisitado + "<br>");
  document.write("B)el sexo de titular que lleva más pasajeros " + sexoDelTitular + "<br>");
  document.write("c)el promedio de personas por viaje, que viajan en invierno " + promedio + "<br>");

}
// 3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
// validando los datos ingresados. 
// nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
// temporada(“otoño”,”invierno, “verano,”primavera”),
// cantidad de personas que viajan.
// informar:
// a)el lugar más elegido
// b)el nombre de titular que lleva más pasajeros.
// c)el promedio de
/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
// function mostrar()
// {
// 	alert("tres");

