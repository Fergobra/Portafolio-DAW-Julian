var nombre = [];
var numero = [];
var correo = [];
var direccion = [];
var contactos = [];
var i = 0;

function agregar(){

nombre[i] = prompt("Nombre nuevo contacto");
numero[i] = prompt("Número de contacto")
direccion[i] = prompt("Dirección de contacto");
correo[i] = prompt("Email de contacto");
contactos[i] = nombre[i] + " " 
+ " " + numero[i] + " " + correo[i]
+ " " + direccion[i];
alert("Contacto Guardado: ");
return  i = i + 1;
}

function verlista(){
    document.getElementById('mostrador').innerHTML = ("<h3>Lista de contactos</h3><hr>");
	for (var i = contactos.length - 1; i >= 0; i--) {
		document.getElementById('mostrador').innerHTML += (contactos[i]+"<br/><hr>");
	}
}

function buscar(){
    var buscarNom = prompt("Ingrese el nombre a buscar:");
	var results=0;
	document.getElementById('mostrador').innerHTML = ("<h3>Contacto encontrado</h3><br />");
	for (var i = contactos.length - 1; i >= 0; i--) {
		if(buscarNom==nombre[i]){
			document.getElementById('mostrador').innerHTML += (contactos[i]+"<br/>");
			results++;
		}
	}
	if(results==0)
		document.getElementById('mostrador').innerHTML += ("no existen coincidencias");
}
function menu(){
	var menu = prompt("Bienvenido al menú, oprime el número correspondiente a la opción deseada y presiona enter: 1. Añadir Contacto  /  2. Ver Lista de contactos  /  3. Buscar un contacto");
	switch(menu){
		case '1':
		agregar();
		break;

		case '2':
		verlista();
		break;

		case '3':
		buscar()
		break;

		default:
		document.getElementById('mostrador').innerHTML = ("Ha introducido una opcion invalida, por favor intentelo de nuevo");
		break

	}


}
