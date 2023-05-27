// Selectors
const str ="";
const addNoteButton = document.querySelector(".add-symbol");
const inputTasks = document.querySelector('.todo-input');
const todolist = document.querySelector('.todo-list');
// Event Listener
addNoteButton.addEventListener('click',addTasks);

// Functions
function addTasks(){
if(inputTasks.value.length > 0){
    let task = inputTasks.value;
   const createlist = document.createElement('div');
   createlist.classList.add('task');
   createlist.innerHTML = `${task}
           <ul>
                 <li><button class="check"><i class= "trash-btn uil uil-check"></i></button></li>
                 <li><button class="delete"><i class="check-btn uil uil-trash-alt"></i></button></li>
          </ul>       
          </div>`;
    inputTasks.value = str;
todolist.appendChild(createlist);
// Deleting the to-do list
const deletelist = document.querySelectorAll('.uil-trash-alt');
deletelist.forEach((item)=>{
    item.addEventListener("click",deleteTask);
    function deleteTask(e){
        let work = item.parentElement.parentElement.parentElement.parentElement;
        work.classList.add('fall')
        work.addEventListener('transitionend', function(){
            work.remove();
        })
    }
})
// Completion of tasks
const checkedlist = document.querySelectorAll('.uil-check');
checkedlist.forEach((item)=>{
    item.addEventListener("click",taskdone);
    function taskdone(e){
           let completedWork =  item.parentElement.parentElement.parentElement.parentElement;
           completedWork.classList.add('completed');
    }
})
}
}
