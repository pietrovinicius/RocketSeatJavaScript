console.log('Loading --- Todos.js');

//query selector para pegar os elementos do DOM

let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let buttonFormatList = document.querySelector('#format');

//list de todos com os dados do local Storage
let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

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
    if(todoText.length < 1){
        console.log(`InputTexto vazio`);
        alert(`TODO não pode ser vazio!`);
    }else{
        todos.push(todoText);
        inputElement.value = "";
        renderTodos();
        saveToStorage();
    }
}

//remover todo
function deletetodo(posicao) {
    todos.splice(posicao, 1);
    renderTodos();
    saveToStorage();
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
    saveToStorage();
}

//localStorage
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}


//ação do botão clicado
buttonElement.onclick = addTodo;
buttonFormatList.onclick = formatList;

