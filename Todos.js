console.log('Loading --- Todos.js');

//query selector para pegar os elementos do DOM

let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let buttonFormatList = document.querySelector('#format');

console.log(buttonFormatList);

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
        let todoText = document.createTextNode(todo + " - ");

        let linkElement = document.createElement('a');
        //obrigatoriamente o componente a precisa de um href
        linkElement.setAttribute('href', '#');

        //posicao do todo na list
        let posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deletetodo(' + posicao + ')');

        let linkText = document.createTextNode('X');
        linkElement.appendChild(linkText);

        //add na minha li o texto e o link
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
//inicializamdo a list
renderTodos();

//adicionar o todo
function addTodo() {

    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
}

//remover todo
function deletetodo(posicao) {
    todos.splice(posicao, 1);
    renderTodos();
}

//format list
function formatList(){    
    let tamanho = todos.length;
    for(i=0; i<tamanho; i++){
        todos.splice(i, tamanho);
        console.log(`Apagando - ${i}`);
    }
    //apagando o input e renderizando a list
    inputElement.value = "";
    renderTodos();
}

//ação do botão clicado
buttonElement.onclick = addTodo;
buttonFormatList.onclick = formatList;

