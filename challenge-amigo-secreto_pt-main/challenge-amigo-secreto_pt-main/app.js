let amigos = []; //aqui é a lista o Array e está vazio....

function adicionarAmigo() {
    let input = document.getElementById("amigo");//aqui pega o campo onde o a pessoa colocou o nome do amigo
    let nome = input.value.trim();// pega só o texto e exclui os espaços

    if (!nome) { // Verifica se o nome está vazio
        alert("Coloque o nome de um amigo.");
        return; 
    }

    if (nome && !amigos.includes(nome)) {//verifica se te nome e se o nome ta repetido...
        amigos.push(nome);

        let lista = document.getElementById("listaAmigos");
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    }

    input.value = ""; // Sempre limpa o campo de entrada
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Adicione pelo menos 1 amigo para sortear.");
        return;//interrompe
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteia um amigo aleatório

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores

    let li = document.createElement("li");
    li.textContent = `O amigo sorteado foi: ${sorteado}`;
    resultado.appendChild(li);
}
