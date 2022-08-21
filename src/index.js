import { createModal } from './modal';
import { createInbox, removeNewTask } from './inbox';
import { createToday } from './today';
import { createWeek } from './week';


createInbox();
createModal();
//addObject();

// Form inputs
const inputTitle = document.querySelector('.form-title');
const inputDate = document.querySelector('.form-date');
const inputDescription = document.querySelector('.form-description');
const inputPriority = document.querySelector('.form-priority');
const inputProject = document.querySelector('.form-project');



// Open/Close the Modal
    const newTask = document.querySelector('.new-task');
    const closeModalBtn = document.querySelector('.close-btn');
    const modal = document.querySelector('.modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    

    function addTask() {
        modal.style.display = "block";
    }
    
    function closeModal() {
        modal.style.display = "none";
    }

//Event Listeners for modal form    
newTask.addEventListener('click', addTask);
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);







//Click Add Button
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', closeModal);

//Sidebar list
const inbox = document.querySelector('.inbox');
const today = document.querySelector('.today');
const week = document.querySelector('.week');

//Side bar list event listeners
inbox.addEventListener('click', selectInbox);
today.addEventListener('click', selectToday);
week.addEventListener('click', selectWeek);
inbox.addEventListener('click', reloadPage);


function reloadPage() {
    location.reload();
}

//Open Inbox
function selectInbox() {
    const todayDiv = document.querySelector('.today-div');
    const weekDiv = document.querySelector('.week-div');
    if(today.className.includes('current-page')) {
        console.log("You selected today.");
        todayDiv.remove();
    } else if (week.className.includes('current-page')) {
        console.log('You also selected today');
        weekDiv.remove();
    } else if (inbox.className.includes('current-page')) {
        return;
    }

    today.classList.remove('current-page');
    inbox.classList.add('current-page');
    week.classList.remove('current-page');

    createInbox();
}



//Open Today's projects
function selectToday() {
    const inboxDiv = document.querySelector('.inbox-div');
    const weekDiv = document.querySelector('.week-div');
    if(inbox.className.includes('current-page')) {
        console.log("You selected today.");
        console.log(inboxDiv);
        inboxDiv.remove();
    } else if (week.className.includes('current-page')) {
        console.log('You also selected today');
        weekDiv.remove();
    } else if (today.className.includes('current-page')) {
        return;
    }

    today.classList.add('current-page');
    inbox.classList.remove('current-page');
    week.classList.remove('current-page')
    
    removeNewTask();
    createToday();
}

//Open Week projects
function selectWeek() {
    const inboxDiv = document.querySelector('.inbox-div');
    const todayDiv = document.querySelector('.today-div');
    if(inbox.className.includes('current-page')) {
        console.log("You selected week");
        inboxDiv.remove();
    } else if (today.className.includes('current-page')) {
        console.log('You also selected week');
        todayDiv.remove();
    } else if (week.className.includes('current-page')) {
        return;
    }

    today.classList.remove('current-page');
    inbox.classList.remove('current-page');
    week.classList.add('current-page')

    removeNewTask();
    createWeek();
}



addBtn.addEventListener('click', testFunc);

function testFunc() {
    console.log(inputTitle.value);
    console.log(inputTitle);

}


console.log(12)






// const operateModal = (function() {
//     const newTask = document.querySelector('.new-task');
//     const closeModalBtn = document.querySelector('.close-btn');
//     const _modal = document.querySelector('.modal');
//     const cancelBtn = document.querySelector('.cancel-btn');

//     function addTask() {
//         _modal.style.display = "block";
//     }
    
//     function closeModal() {
//         _modal.style.display = "none";
//     }
    
//     return {addTask, closeModal, closeModalBtn, cancelBtn, newTask}
// })();


// console.log(operateModal.newTask)
//  operateModal.newTask.addEventListener('click', operateModal.addTask);
//  operateModal.closeModalBtn.addEventListener('click', operateModal.closeModal)
//  operateModal.cancelBtn.addEventListener('click', operateModal.closeModal);