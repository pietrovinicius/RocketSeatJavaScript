console.log('Loading --- Todos.js');

//query selector para pegar os elementos do DOM

let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

//list de todos
let todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Pesquisar na comunidade',
];

//mostrar os todos na tela 
function renderTodos() {
    //removendo todo o conteúdo da lis antes de exibir
    listElement.innerHTML = "";

    //gerando a list
    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}
//inicializamdo a list
renderTodos();

function addTodo() {

    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
}

//ação do botão clicado
buttonElement.onclick = addTodo;

