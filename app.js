let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre !== '') {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = '';
        input.focus();
    }
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para sortear.');
        return;
    }

    if (amigos.length % 2 !== 0) {
        alert('El número de amigos debe ser par para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const amigosSorteados = [...amigos];
    const sorteados = [];

    amigos.forEach((amigo) => {
        let indice;
        do {
            indice = Math.floor(Math.random() * amigosSorteados.length);
        } while (amigosSorteados[indice] === amigo);

        sorteados.push({ amigo, sorteado: amigosSorteados[indice] });
        amigosSorteados.splice(indice, 1);
    });

    sorteados.forEach((par) => {
        const li = document.createElement('li');
        li.textContent = `${par.amigo} le regala a ${par.sorteado}`;
        resultado.appendChild(li);
    });
}