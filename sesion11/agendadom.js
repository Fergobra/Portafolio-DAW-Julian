
    let contactos = 0

    function guardar(){

        function contacto(nombre,numero,correo,direccion){
            this.nombre = nombre;
            this.numero = numero;
            this.correo = correo;
            this.dirrecion = direccion;
        }
        let nombrec = document.getElementById("nombrec").value;
        let numeroc = document.getElementById("numeroc").value;
        let correoc = document.getElementById("correoc").value;
        let direccionc = document.getElementById("direccionc").value;

        if(nombrec.length==0){
            alert("Llena los todos los campos")
        }
        else{
            if(numeroc.length==0){
            alert("Llena los todos los campos")
        }
        else{
            if(correoc.length==0){
            alert("Llena los todos los campos")
        }
        else{
            if(direccionc.length==0){
            alert("Llena los todos los campos")
        }
        else{
            nuevocontacto = new contacto(nombrec, numeroc, correoc, direccionc)

agregar();
        }
        }
        }
        }


    }

    var basededatos = [];

    function agregar(){
        basededatos.push(nuevocontacto)
        console.log(basededatos);
        document.getElementById('tabla').innerHTML += '<tbody><tr><td>'+ nuevocontacto.nombre +'</td></tr></tbody>';
    }

    function buscar(){
    var busqueda = document.getElementById("buscarr").value
	var results=0;
	document.getElementById('tabla').innerHTML = ("Contacto encontrado");
	for (var i = basededatos.length - 1; i >= 0; i--) {
		if(busqueda=nombre[i]){
			document.getElementById('tabla').innerHTML += (basededatos[i]+"<br/>");
			results++;
		}
	}
	if(results==0)
		document.getElementById('tabla').innerHTML += ("no tienes ningún contacto registrado con ese nombre");
}