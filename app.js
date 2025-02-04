// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea un array para almacenar los nombres
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo(){
     inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    inputAmigo.value = "";

    //Valida la entrada
    if(nombre = ""){
        alert("Por favor, inserte un nombre.");
        return;
    }
    //Valida que el nombre no este duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`Este nombre ${nombreAmigo} ya esta en la lista.`);
        return;
    }
    amigos.push(nombreAmigo);
    inputAmigo.ariaValu = "";
    //Actualiza el array de amigos
    actualizaLista();
}
//Implementa una función para actualizar la lista de amigos
function actualizaLista (){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}
//Implementa una función para sortear los amigos
function sortearAmigo (){
    if(amigos.length === 0){
        alert("No hay amigos para sortear, por favor agrega uno.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}.`;
}
