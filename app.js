// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){

    //amigos.push(document.getElementById('amigo').value);
    let name = document.getElementById('amigo').value

    if( name == ""){
        alert("ERROR: Agregar un nombre, no se puede agregar nombres en blanco");
    } else{
        amigos.push(name);
    }
    limpiarCaja();

    console.log(amigos);
    
}

function limpiarCaja(){
    let textoCaja = document.getElementById('amigo').value = '';
}