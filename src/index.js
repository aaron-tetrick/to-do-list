import {createModal} from './modal';
import {createInbox} from './inbox';



createInbox();
createModal();


const newTask = document.querySelector('.new-task');

const closeModalBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal')

newTask.addEventListener('click', addTask);
closeModalBtn.addEventListener('click', closeModal);

function addTask() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}




//console.log(createModal());

