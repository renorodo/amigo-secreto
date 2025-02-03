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
    lista();

    console.log(amigos);
    
}

function limpiarCaja(){
    let textoCaja = document.getElementById('amigo').value = '';
}

function lista(){

    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {        
        
        let listaElementos = document.createElement('li');
        listaElementos.textContent = amigos[index]; 
        lista.appendChild(listaElementos);

    }
    
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert('Agregue amigos');
    } else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(indiceAleatorio);
        let amigoSecreto = amigos[indiceAleatorio];
        let mensajeGanador = document.getElementById('resultado');
        mensajeGanador.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;

    }
}