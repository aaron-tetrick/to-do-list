import {createModal} from './modal';
import {createInbox} from './inbox';
import {createToday} from './today';
import {createWeek} from './week';

createInbox();
createModal();

//Open/Close the Modal
const operateModal = (function() {
    const newTask = document.querySelector('.new-task');
    const closeModalBtn = document.querySelector('.close-btn');
    const _modal = document.querySelector('.modal');
    const cancelBtn = document.querySelector('.cancel-btn');

    function addTask() {
        _modal.style.display = "block";
    }
    
    function closeModal() {
        _modal.style.display = "none";
    }
    
    return {addTask, closeModal, closeModalBtn, cancelBtn, newTask}
})();

operateModal.newTask.addEventListener('click', operateModal.addTask);
operateModal.closeModalBtn.addEventListener('click', operateModal.closeModal)
operateModal.cancelBtn.addEventListener('click', operateModal.closeModal);


const addBtn = document.querySelector('.add-btn');

const addNewTask = (function() {
    const _test = "TEST!!!";
    function myFunc() {
        console.log(_test);
    }
    return {myFunc}
})();


addBtn.addEventListener('click', addNewTask.myFunc);
addBtn.addEventListener('click', operateModal.closeModal);


const inbox = document.querySelector('.inbox');
const today = document.querySelector('.today');
const week = document.querySelector('.week');

inbox.addEventListener('click', selectInbox);
today.addEventListener('click', selectToday);
week.addEventListener('click', selectWeek);


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
    createModal();

    const operateModal = (function() {
        const newTask = document.querySelector('.new-task');
        const closeModalBtn = document.querySelector('.close-btn');
        const _modal = document.querySelector('.modal');
        const cancelBtn = document.querySelector('.cancel-btn');
    
        function addTask() {
            _modal.style.display = "block";
        }
        
        function closeModal() {
            _modal.style.display = "none";
        }
        
        return {addTask, closeModal, closeModalBtn, cancelBtn, newTask}
    })();
    
    operateModal.newTask.addEventListener('click', operateModal.addTask);
    operateModal.closeModalBtn.addEventListener('click', operateModal.closeModal)
    operateModal.cancelBtn.addEventListener('click', operateModal.closeModal);
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

    createWeek();
}


//console.log(addNewTask.test);
