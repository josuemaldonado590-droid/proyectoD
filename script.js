const inputs =
document.querySelectorAll(".codigo input");

inputs.forEach((input,index)=>{

input.addEventListener("input",()=>{

if(
input.value.length===1 &&
index<inputs.length-1
){

inputs[index+1].focus();

}

});

});

function verificarClave(){

const clave =

document.getElementById("d1").value +
document.getElementById("d2").value +
document.getElementById("d3").value +
document.getElementById("d4").value +
document.getElementById("d5").value;

if(clave==="01237"){

document.getElementById("pantallaBloqueo").innerHTML =

"<h1>🏰 Bienvenida mi doncella...</h1><p>La historia está por comenzar ❤️</p>";

setTimeout(()=>{

document.getElementById("pantallaBloqueo").style.display="none";

document.getElementById("contenido").style.display="block";

},2500);

}else{

document.getElementById("error").innerHTML =

"🌹 Esa no parece ser la llave correcta del reino.";

}

}

function mostrarHistoria(){

document.getElementById("historia").style.display="block";

}