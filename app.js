const form = document.getElementById('form');
const inputFeild = document.getElementById('input-feild');
const addButton = document.getElementById('add-button');
const list = document.getElementById('list');
const count = document.querySelector('#count');
const clear = document.getElementById('clear-button');
let counter = 0;


function resetInputFeild (inputFeild){
    document.querySelector('.input-feild input').value = '';
    
}

form.addEventListener('submit', e => {
    e.preventDefault();

    //Get the Valur of the input//
    let inputValue = inputFeild.querySelector('input').value.trim();
    

    //Build a todo element//
    const todo = document.createElement('div');

    //Add a Class to element//
   todo.classList.add('input-feild');


    //Add the input and button to the element//
    const input = document.createElement('input');

    //Add delete button//
    const delBtn = document.createElement('button');

    //Add css to delete button//
    delBtn.classList.add('delete');

    //Add type to button//
    delBtn.setAttribute('type', 'button');

    //Add icon to the delete button//
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

    todo.appendChild(input);

    todo.appendChild(delBtn);

    

    //Add the value into the element
    todo.querySelector('input').value = inputValue

    //Append it to the list
    list.appendChild(todo);

    //Add count to counter//
    counter ++

    //Add the todo to the pending tasks counter//
    count.textContent = counter

    //Clear inputFeild//
    resetInputFeild();
    
});

clear.addEventListener('click', () => {
    list.innerHTML = '';
    counter = 0
    count.textContent = counter
})

list.addEventListener('click', e => {

    if(e.target.parentElement.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        counter --;
        count.textContent = counter
        console.log('yes')
    }else {
        console.log('no')
    }
})
 







