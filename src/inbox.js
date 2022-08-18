const contentTitle = document.getElementById('content-title');
const content = document.getElementById('content');
const inboxDiv = document.createElement('div');
const title = document.createElement('h2');
const newTask = document.createElement('p');

const createInbox = function()  {     
    title.innerText = "Inbox";
    newTask.innerText = "+ New Task";

    inboxDiv.classList.add('inbox-div');
    title.classList.add('title');
    newTask.classList.add('new-task');

    inboxDiv.appendChild(title);
    content.appendChild(newTask);
    contentTitle.appendChild(inboxDiv);
}


function removeNewTask() {
        newTask.remove();
}




export {createInbox, removeNewTask};