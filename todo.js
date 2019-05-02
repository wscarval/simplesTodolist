var listElement = document.querySelector('#to_do_list ul')
var inputElement = document.querySelector('#to_do_list #inserirTD')
var buttonElement = document.querySelector('#to_do_list button')

var itemsCount = 0

//Items estaticos que serão caregados ao iniciar a pagina
var todos = [

]


function renderTodos() {

    listElement.innerHTML = '';
    //var of var cria algo especifico para cada item do array
    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo);
       
        //Junção com appendchild Elemento LI com o Texto
        todoElement.appendChild(todoText)
        //Junção com appendchild UL com o elemento LI
        listElement.appendChild(todoElement)

          //Criação dos elementos para exclusão
          var deleteElement = document.createElement('button')
          //Pegar o Index do Text
          var posit = todos.indexOf(todo)
          ///////////////////////
          deleteElement.setAttribute('onclick','excluirItem(' +posit+ ')')
          var textoBtn = document.createTextNode('X')
          deleteElement.appendChild(textoBtn)
          //////////////////////////////////////
          var todoText = document.createTextNode(document.getElementById('inserirTD').value)

          listElement.appendChild(deleteElement)

    }
}

renderTodos()



function fAddTodo() {
    
    var itemList = document.getElementById('inserirTD').value;

    if (itemList === ''){
        alert('Sem Item!')
    } else {

        todos.push(itemList)
        document.getElementById('inserirTD').value = ''
        itemsCount++
        document.getElementById('totalItems').innerHTML = 'Items: '+itemsCount
        renderTodos()
    }
    
}

function excluirItem(posit) {
   todos.splice(posit, 1)
   itemsCount--
   document.getElementById('totalItems').innerHTML = 'Items: '+itemsCount
   renderTodos()

}


