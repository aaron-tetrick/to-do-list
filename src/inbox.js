export class Inbox {
    static createInbox()  {   
        const contentTitle = document.getElementById('content-title');
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
        content.appendChild(newTask);
        contentTitle.appendChild(inboxDiv);
    }
    
    
    static removeNewTask() {
        const newTask = document.querySelector('.new-task');
            newTask.remove();
    }

    //Open Inbox
    static selectInbox(e) {
        e.preventDefault();

        //Sidebar list
        const inbox = document.querySelector('.inbox');
        const today = document.querySelector('.today');
        const week = document.querySelector('.week');
       
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

    Inbox.createInbox();
    }

    
}