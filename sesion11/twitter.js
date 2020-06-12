
let contador = 0;
   let cont2 = 1
function mostrarestado(){
  
 let  estado = document.getElementById('estado').value;
   document.getElementById("n"+contador+"").innerHTML = '<div class="row"><hr><div class="twelve columns"><img src="https://www.osustuff.org/img/avatars/2019-01-25/633316.jpg" alt="avatar" class="two columns avatar"><h3 class="four columns nom">Usuario De Prueba</h3><h5 class="four columns nom">@UsusarioDePrueba</h5></div><center><div class="row"><p align="left"class="ten columns est1" id="estado2">' + estado +'</p></div></center></div><div id="n'+cont2+'""></div>';
   contador ++;
   cont2 ++;
}