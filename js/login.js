
class Usuario {
	constructor(email, nombre, contraseña) {
		this.email = email;
		this.nombre = nombre;
		this.contraseña = contraseña;
	}
}

let usuarios = [];

//TOMA EL VALOR INGRESADO EN LOS INPUTS CREA UN NUEVO USUARIO Y LO GUARDAMOS EN LOCAL STORAGE
function getData() {
	let email = document.getElementById("email").value
	let nombre = document.getElementById("nombre1").value
	let contraseña = document.getElementById("pass1").value

	localStorage.setItem("e1", email);
	localStorage.setItem("n1", nombre);
	localStorage.setItem("p1", contraseña);

	usuarios.push(new Usuario(email, nombre, contraseña));

	enJSON = JSON.stringify(usuarios);
	localStorage.setItem("usuario", enJSON);
	alert("Registro Exitoso")
	//blanqueamos los input del login
	document.getElementById("email").value = "";
	document.getElementById("nombre1").value = "";
	document.getElementById("pass1").value = "";
	document.getElementById("formulario1").style.display = "none";
	return
}



//VALIDA QUE LOS DATOS INGRESADOR EN LOGIN COINCIDAN CON LOS GUARDADOS EN EL LOCAL STORAGE
function validarData() {

	let enteredEmail = document.getElementById("email2").value
	let enteredPass = document.getElementById("pass2").value

	let storedEmail = localStorage.getItem("e1");
	let storedPass = localStorage.getItem("p1");

	if (enteredEmail == storedEmail && enteredPass == storedPass) {
		usuario1 = JSON.parse(localStorage.getItem("usuario"));
		document.getElementById("ingresar").innerHTML = "<a href=\"\">" + usuario1[0].email + "</a>"

    //blanqueamos los input's
		document.getElementById("email2").value = "";
		document.getElementById("pass2").value = "";

    //MENSAJE DE BIENVENIDA 
		alert("Bienvenido " + usuario1[0].nombre);
		document.getElementById("formulario2").style.display = "none";

	} else {
    //MENSAJE DE ERROR
		alert("Nombre y contraseña incorrectos");
		document.getElementById("email2").value = "";
		document.getElementById("pass2").value = "";
		document.getElementById("email2").focus();

	}
}

