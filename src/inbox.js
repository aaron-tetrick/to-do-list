const createInbox = function()  {
    const content = document.getElementById('content');
    const inboxDiv = document.createElement('div');
    const title = document.createElement('h2');
    const newTask = document.createElement('p');
        
    title.innerText = "Inbox";
    newTask.innerText = "+ New Task";

    inboxDiv.classList.add('inbox-div');
    title.classList.add('title');
    newTask.classList.add('new-task');

    inboxDiv.appendChild(title);
    inboxDiv.appendChild(newTask);
    content.appendChild(inboxDiv);
}


export {createInbox};