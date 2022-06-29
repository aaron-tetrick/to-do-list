const createInbox = function()  {
    const content = document.getElementById('content');
    const title = document.createElement('h2');
    const newTask = document.createElement('p');
    const modalHeader = document.createElement('div');

    
    title.innerText = "Inbox";
    newTask.innerText = "New Task";

    title.classList.add('title');
    newTask.classList.add('new-task');

   content.appendChild(title);
    content.appendChild(newTask);
}


export {createInbox};