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
    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

