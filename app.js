// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array amigos
let amigos=[];
let inputAmigo=document.getElementById("amigo"); //obtiene el id amigo
let listaElementos=document.getElementById("listaAmigos"); //obtiene el id listaAmigos de la lista
//función agregar amigos
function agregarAmigo() {
    //captura el valor del campo
    let nombre = inputAmigo.value.trim();
    //validar la entrada: alerta campo vacío
    if (!nombre){
        alert("No ingresó un nombre, ingresa uno");
        return;
    }
    //actualiza el array
    amigos.push(nombre);
    //limpiar el campo
    inputAmigo.value="";
    actualizarLista();
}
//función actualizar la lista de amigos
function actualizarLista() {
    //limpiar lista
    listaElementos.innerHTML="";
    //iterar sobre el arreglo
    for(let i=0; i<amigos.length; i++) {
        let item=document.createElement("li");
        //agrega elementos a la lista
        item.textContent=amigos[i];
        listaElementos.appendChild(item);
    }
}
//función para sortear los amigos
function sortearAmigo() {
    
}