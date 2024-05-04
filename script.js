let lista_de_contatos = []
const cadastro = document.querySelector("#cadastro");
const nome = document.querySelector("#nome");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const listagem = document.querySelector("#listagem");

function adicionar_contatos(e) {
    e.preventDefault()
    const novo_contato = {
        nome: nome.value,
        telefone: telefone.value,
        email:  email.value
    }
    console.log(novo_contato);
    visualizar_contatos(novo_contato);
    lista_de_contatos.push(novo_contato);
}

function visualizar_contatos(contato) {
    const novo_contato = document.createElement("div");
    novo_contato.classList.add("card");

    const novo_nome = document.createElement("h2");
    novo_nome.textContent = `nome: ${contato.nome}`;
    
    const novo_telefone = document.createElement("p");
    novo_telefone.textContent = `telefone: ${contato.telefone}`;

    const novo_email = document.createElement("p");
    novo_email.textContent = `email: ${contato.email}`;

    novo_contato.appendChild(novo_nome);
    novo_contato.appendChild(novo_telefone);
    novo_contato.appendChild(novo_email);

    listagem.appendChild(novo_contato);

}


function edit_info_contatos() {

}






function del_contato() {
    lista_de_contatos.filter(contato => contato.nome != "");
}

cadastro.addEventListener("submit", adicionar_contatos);

visualizar_contatos();