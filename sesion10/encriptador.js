function iniciar(){

var intro = prompt("Deseas Encriptar o Desencriptar? manda 1 para encriptar o 2 para desencriptar");
switch(intro){
    case '1' :
    encriptar();
    break;

    case '2' :
    desencriptar();
    break;
    
    default:
        alert("parametro no invalido");

    }   
}

function encriptar(){
   var cadena = prompt("Introduce el texto que deseas encriptar");
   cadena = cadena.toLowerCase();

   var enc = cadena.replace(/z/i, "a");
   var enc1 = enc.replace(/y/i, "b");
   var enc2 = enc1.replace(/x/i, "c");
   var enc3 = enc2.replace(/w/i, "d");
   var enc4 = enc3.replace(/v/i, "e");
   var enc5 = enc4.replace(/u/i, "f");
   var enc6 = enc5.replace(/t/i, "g");
   var enc7 = enc6.replace(/s/i, "h");
   var enc8 = enc7.replace(/r/i, "i");
   var enc9 = enc8.replace(/q/i, "j");
   var enc10 = enc9.replace(/p/i, "k");
   var enc11 = enc10.replace(/o/i, "l");
   var enc12 = enc11.replace(/n/i, "m");
   var enc13 = enc12.replace(/m/i, "n");
   var enc14 = enc13.replace(/i/i, "o");
   var enc15 = enc14.replace(/k/i, "p");
   var enc16 = enc15.replace(/j/i, "q");
   var enc17 = enc16.replace(/i/i, "r");
   var enc18 = enc17.replace(/h/i, "s");
   var enc19 = enc18.replace(/g/i, "t");
   var enc20 = enc19.replace(/f/i, "u");
   var enc21 = enc20.replace(/e/i, "v");
   var enc22 = enc21.replace(/d/i, "w");
   var enc23 = enc22.replace(/c/i, "x");
   var enc24 = enc23.replace(/b/i, "y");
   var enc25 = enc24.replace(/a/i, "z");


   console.log("La cadena desencriptada es: " + enc25);


}

function desencriptar(){
   var cadena = prompt("Introduce el texto que deseas encriptar");
   var enc = cadena.replace(/a/ig, "z");
   var enc1 = enc.replace(/b/ig, "y");
   var enc2 = enc1.replace(/c/ig, "x");
   var enc3 = enc2.replace(/d/ig, "w");
   var enc4 = enc3.replace(/e/ig, "v");
   var enc5 = enc4.replace(/f/ig, "u");
   var enc6 = enc5.replace(/g/ig, "t");
   var enc7 = enc6.replace(/h/ig, "s");
   var enc8 = enc7.replace(/i/ig, "r");
   var enc9 = enc8.replace(/j/ig, "q");
   var enc10 = enc9.replace(/k/ig, "p");
   var enc11 = enc10.replace(/l/ig, "o");
   var enc12 = enc11.replace(/m/ig, "n");
   var enc13 = enc12.replace(/n/ig, "m");
   var enc14 = enc13.replace(/o/ig, "l");
   var enc15 = enc14.replace(/p/ig, "k");
   var enc16 = enc15.replace(/q/ig, "j");
   var enc17 = enc16.replace(/r/ig, "i");
   var enc18 = enc17.replace(/s/ig, "h");
   var enc19 = enc18.replace(/t/ig, "g");
   var enc20 = enc19.replace(/u/ig, "f");
   var enc21 = enc20.replace(/v/ig, "e");
   var enc22 = enc21.replace(/w/ig, "d");
   var enc23 = enc22.replace(/x/ig, "c");
   var enc24 = enc23.replace(/y/ig, "b");
   var enc25 = enc24.replace(/z/ig, "a");

   console.log("La cadena desencriptada es: " + enc25);


}