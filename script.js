var form = document.querySelector('form');
var todoList = document.querySelector('ul');
var button = document.querySelector('button');
var input = document.getElementById('user-todo')

//Declare variable 'todosArray' to hold our todos
// Set our todosArray to an empty array

//var todosArray = [];
// we want to see if there are already todos in the localStorage. If so, then we will get those 'todos';
// using JSON.parse. If local storage does not contain any todos, then we will set our todosArray to  
// an empty array.
var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

// use localStorage setItem() method to set todos with a string using JSON.stringify()
//JSON.stringify is used because localStorage works with strings. This is how we sent data to localStorage.
localStorage.setItem('todos',JSON.stringify(todosArray))

// Decalare a variable storage that contains all the information in localStorage.
// We will assign to storage the JSON.parse() method to convert strings from the
// localStorage into data that we can access with javaScript
// when receiving data from a web server, the data is always a string.
// parse the data with JSON.parse(), and the data becomes a javaScript object.

var storage = JSON.parse(localStorage.getItem('todos'));



form.addEventListener('submit',function(e){
    e.preventDefault();
// push onto todosArray, the 'input.value'
todosArray.push(input.value);
// on localStorage now use setItem() for the key 'todos' the value
// of the todosArray as a string  with the JSON.stringify() method

localStorage.setItem('todos', JSON.stringify(todosArray));
    todoMaker(input.value);
    input.value = ' '
})

var todoMaker = function(text){
    var todo = document.createElement('li');
    todo.textContent = text;
    todoList.appendChild(todo);
}
// loop through local storage when a user first opens the page and runs the todoMaker function.
for (var i=0; i<storage.length; i++){
    todoMaker(storage[i]);
}


button.addEventListener('click',function(){
    // clear the storage with the 'clear ()' method
    localStorage.clear()
    while (todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
})