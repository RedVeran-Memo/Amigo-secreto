// Array para almacenar los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  //Alerta de nombre vacío

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  console.log("Lista de amigos:", amigos);

  input.value = "";

   // Función que muestra los amigos en la lista
  mostrarAmigos();
}

function mostrarAmigos() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo de amigos
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento <li> por cada amigo
    const li = document.createElement("li");
    li.textContent = amigos[i];

    // Agregar el <li> a la lista
    lista.appendChild(li);
  }
}
//Función para sortear el amigo secreto
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}




