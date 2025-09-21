// Array para armazenar a lista principal de amigos
let amigos = [];
// Array para controlar quem ainda pode ser sorteado
let sorteaveis = [];
// NOVO: Referência ao elemento de mensagem
const elementoMensagem = document.getElementById('area-mensagem');
let timeoutMensagem;

// NOVO: Função para exibir mensagens na tela em vez de usar alert()
function mostrarMensagem(texto, duracao = 3000) {
    elementoMensagem.textContent = texto;
    clearTimeout(timeoutMensagem); // Limpa timeout anterior se houver

    // Se a duração for 0, a mensagem fica permanentemente
    if (duracao > 0) {
        timeoutMensagem = setTimeout(() => {
            elementoMensagem.textContent = '';
        }, duracao);
    }
}

// Função para adicionar nomes
function adicionarNomes() {
    const input = document.querySelector("#amigo");
    const nome = (input.value || "").trim();

    if (!nome) {
        mostrarMensagem("Por favor, insira um nome válido.");
        return;
    }
    if (amigos.includes(nome)) {
        mostrarMensagem("Atenção! Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

// Adicionar nomes com a tecla Enter
document.querySelector("#amigo").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        adicionarNomes();
    }
});

// Função para atualizar a lista na tela, agora com identificador
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpar antes de recriar

    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        li.dataset.nome = nome; 
        lista.appendChild(li);
    });
}

// Função para sortear, agora com final definitivo
function sortearAmigo() {
    const nomesJaSorteados = document.querySelectorAll('#listaAmigos li.sorteado').length;
    if (sorteaveis.length === 0 && nomesJaSorteados === 0 && amigos.length >= 2) {
        sorteaveis = [...amigos];
    }

    if (sorteaveis.length === 0) {
        // Exibe a mensagem de forma permanente (duração 0)
        mostrarMensagem("O sorteio terminou! Clique em 'Reiniciar'.", 0);
        return;
    }

    const indice = Math.floor(Math.random() * sorteaveis.length);
    const sorteado = sorteaveis[indice];
    sorteaveis.splice(indice, 1);

    mostrarResultado(sorteado);
    
    const itemSorteado = document.querySelector(`#listaAmigos li[data-nome="${sorteado}"]`);
    if (itemSorteado) {
        itemSorteado.classList.add('sorteado');
    }
}

// Mostrar resultado na tela 
function mostrarResultado(nome) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: <strong>${nome}</strong>`;
}

// Função para reiniciar o jogo completamente
function reiniciarJogo() {
    amigos = [];
    sorteaveis = [];

    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    
    // Limpa também a área de mensagens
    mostrarMensagem('', 1);
}