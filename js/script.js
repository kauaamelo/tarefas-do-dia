// # Elementos 
const listaForm = document.querySelector("#lista");
const listaInput = document.querySelector("#lista-input");
const listaTarefas = document.querySelector("#todas-tarefas");
const editarForm = document.querySelector("#editar-lista");
const editarInput = document.querySelector("#editar-input");
const botaoCancelar = document.querySelector("#botao-cancelar");

// Funções 
const salvarTarefa = (text) => {
    const lista = document.createElement("div");
    lista.classList.add("lista");

    const tituloLista = document.createElement("h3");
    tituloLista.innerText = text;
    lista.appendChild(tituloLista)

    const botaoConcluir = document.createElement("button")
    botaoConcluir.classList.add("finalizarLista")
    botaoConcluir.innerHTML = '<i class="fas fa-check"></i>'
    lista.appendChild(botaoConcluir)

    const botaoEditar = document.createElement("button")
    botaoEditar.classList.add("editarLista")
    botaoEditar.innerHTML = '<i class="fas fa-pen"></i>'
    lista.appendChild(botaoEditar)

    const botaoRemover = document.createElement("button")
    botaoRemover.classList.add("removerLista")
    botaoRemover.innerHTML = '<i class="fas fa-remove"></i>'
    lista.appendChild(botaoRemover)

    listaTarefas.appendChild(lista)
    listaInput.value = ""; 
    listaInput.focus();
}

// Eventos

listaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = listaInput.value;

    if (inputValue) {
        salvarTarefa(inputValue)
    }
})
