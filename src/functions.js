
function CrearUsuario() {
	nombreUsuario = $("#nombreUsuario");
    correoUsuario = $("#correoUsuario");
	contraseñaUsuario = $("#contraseñaUsuario");
	

	if (nombreUsuario.value === "" || correoUsuario.value === "" || contraseñaUsuario.value === "") {

		avisoRegistro.textContent = "Datos no validos, ingresalos nuevamente";
		btnEsconder.style.display = "";
		$("#modalAviso").modal("show");

	} else if (validaCorreoElectronico(correoUsuario.value) === false) {

		avisoRegistro.textContent = "El formato del correo electrónico es incorrecto. Verifica y vuelve a intentar.";
		// btnEsconder.style.display = "";
		$("#modalAviso").modal("show");

	} else {

		let nombre = nombreUsuario.value;
		let correo = correoUsuario.value;
		let contraseña = contraseñaUsuario.value;

		let usuarioNuevo = new Usuario(nombre, correo, contraseña);

		registrarUsuarioSession(usuarioNuevo);

		avisoRegistro.textContent = "Registro exitoso.";
		btnEsconder.style.display = "none";
		$("#modalAviso").modal("show");
		nombreRegistro.value = ""
		correoRegistro.value = ""
		contraseñaRegistro.value = ""
	}
}



// Registra el usuario en el localStorage. Bloquea el botón de registro.

function registrarUsuarioSession(usuarioNuevo) {

	const {nombre, correo} = usuarioNuevo;

	let usuarioNuevoJSONSession = JSON.stringify(usuarioNuevo);
	localStorage.setItem("usuarios", usuarioNuevoJSONSession);
	usuarioActivo = JSON.parse(localStorage.getItem("usuarios"));
	document.getElementById("nombreUsuario").innerHTML = `${ correo }, ${ nombre }`;
	document.getElementById("CrearUsuario").disabled = true;

}

// Verifica si hay una sesión previa en el localStorage y la recupera.

function reestableceSesion() {
	if (localStorage.usuarios !== undefined) {
		
		usuarioActivo = JSON.parse(localStorage.getItem("usuarios"));
		const {nombre, correo} = usuarioActivo;
		document.getElementById("nombreUsuario").innerHTML = `${ correo }, ${ nombre }`;
		document.getElementById("CrearUsuario").disabled = true;
	}
}

function registrarUsuarioSession(usuarioNuevo) {

	const {nombre, correo} = usuarioNuevo;

	let usuarioNuevoJSONSession = JSON.stringify(usuarioNuevo);
	localStorage.setItem("usuarios", usuarioNuevoJSONSession);
	usuarioActivo = JSON.parse(localStorage.getItem("usuarios"));
	document.$("nombreUsuario").html(`${ correo }, ${ nombre }`) 
	document.getElementById("CrearUsuario").disabled = true;

}