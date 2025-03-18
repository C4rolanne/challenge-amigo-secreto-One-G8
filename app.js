

let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;   

    if(!nomeAmigo) {
        alert("Dígite o nome do amigo");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarlista();
}

 function atualizarlista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
        
        
    }
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert("Por favor, adicione um nome válido");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉O amigo sorteado foi: ${sorteado}🎉`

    
    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    amigos =[];

    lançarConfetti();
}

function lançarConfetti() {
    confetti({
        particleCount: 500, // Número de partículas
        spread: 160,        // Espalhamento dos confetes
        origin: { x: 0.5, y: 0.5 } // Origem no centro da tela
    });
}