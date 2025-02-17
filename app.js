let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const listaResultado = document.getElementById('resultado');

//Esta función detecta y si es válido, agrega el nombre al array amigos[]. También límpia el texto una vez oprimido el botón de Añadir.

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    let limpiarTexto = document.getElementById('amigo');
    if (nombreAmigo == '') {
        alert('Introduzca un nombre válido');
    }
    else {
        if (amigos.includes(nombreAmigo)) {
            alert('Ese nombre ya está en la lista');
        }
        else {
            listaAmigos.innerHTML= '';
            amigos.push(nombreAmigo);
            amigos.forEach( i => {
                const li = document.createElement('li');
                li.textContent = i;
                listaAmigos.appendChild(li);
            })  
        }
        limpiarTexto.value = ('');
    }
}



//Esta función permite la rejugabilidad automática al pulsar en Sortear amigo, eligiendo un índice al azar del array amigos[] y reiniciándolo.

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos 2 nombre para sortear');
    }
    else {
        let amigoSecreto = (amigos[(Math.floor(Math.random()*amigos.length))]);
        listaAmigos.innerHTML = '';
        listaResultado.innerHTML = (`Tu amigo secreto es: ${amigoSecreto}`)
        amigos = [];
    }
}