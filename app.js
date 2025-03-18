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
}
//función actualizar la lista de amigos
function actualizarLista() {
    
}
//función para sortear los amigos
function sortearAmigo() {
    
}