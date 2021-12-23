const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("envio");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
	e.preventDefault();
	let error = validarCampos();
	if(error[0]){
		resultado.innerHTML = error[1];
		resultado.classList.add("red");
		resultado.classList.remove("green");
	}else{
		resultado.innerHTML = "Solicitud enviada correctamente";
		resultado.classList.add("green");
		resultado.classList.remove("red");
	}
});
const validarCampos=()=>{
	let error = [];
	if(nombre.value.length < 5 || nombre.value.length > 30){
		error[0] = true;
		error[1] = "el nombre es invalida";
		return error;
	}else if(email.value.length < 5 || 
		     email.value.length > 30 ||
			 email.value.indexOf("@") == -1 ||
			 email.value.indexOf(".") == -1){
		error[0] = true;
		error[1] = "el email es invalida";
		return error;
	}else if(materia.value.length < 3 || materia.value.length > 10){
		error[0] = true;
		error[1] = "la materia no existe";
		return error;
	}
	error[0] = false;
	return error;
}
