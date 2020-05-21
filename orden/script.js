
function introducir(){
		//Obtención del arreglo:
        var arreglo = prompt('INTRODUCE UNA SERIE DE NÚMEROS ENTEROS SEPARADOS POR UN ESPACIO(SPACE BAR)');

        //División del arreglo con split:
        var arrSplit = arreglo.split(" ");
    
        //Obtención de la longitud del arreglo
        arrSplit.length;
    
        //Conversión del arreglo strings a numeric
        var numericArr=[];
        for(i=0; i<arrSplit.length; i++ )
            {
            numericArr[i] = parseInt(arrSplit[i])
            }
    
        //Funcion de obtener orden de arreglo numerico;
        var sortedArr = numericArr.sort(function(a, b){return a-b})
        //Impresión de los arreglos:
        document.getElementById('mostrador').innerHTML=("NUEVO ORDEN: " + numericArr);
    };

