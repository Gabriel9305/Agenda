const form = document.getElementById('form-agenda');
const corpoTabela = document.querySelector('tbody');
const agenda = [];
const numeros = [];

let contatos = [];
let linhas = [];
form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    
    const inputNomeContato = document.getElementById("contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    console.log(inputNomeContato);
    
    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas.push(linha); 
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); 
    corpoTabela.innerHTML = linhas;
}
