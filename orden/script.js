
function introducir(){
	//Obtención del arreglo:
	var arreglo = prompt('introduce una serie de números enteros separados por espacio (space bar)');

	//Division del arreglo con split:
	var arrcortado = arreglo.split(" ");

	//Obtención de la longitud del arreglo
	arrcortado.length;

	//Conversion del arreglo strings a numeric
	var arreglo2=[];
	for(i=0; i<arrcortado.length; i++ )
		{
		arreglo2[i] = parseInt(arrcortado[i])
		}

	//Funcion de obtener orden de arreglo numerico;
	var sortedArr = arreglo2.sort(function(a, b){return a-b})
	//Impresión de los arreglos:

	document.getElementById('mostrador').innerHTML=("<h4>Arreglo Ordenado</h4> <h5>" + arreglo2 +"</h5>");
}
