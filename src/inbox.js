import { UI } from ".";

export class Inbox {
    static createInbox()  {   
        const contentTitle = document.getElementById('content-title');
        const oldTitle = document.querySelector('.title');
        const title = document.createElement('h2');
        const newTask = document.querySelector('.new-task');

        
        // Changes title text
        if(oldTitle === null) {
            title.innerText = "Inbox";
            title.classList.add('title');
            contentTitle.appendChild(title);
        } else if(oldTitle.innerText !== "Inbox") {
            oldTitle.remove();
            title.innerText = "Inbox";
            title.classList.add('title');
            contentTitle.appendChild(title);
        }

        // Displays newTask Button
        if(newTask.style.display === 'block') {
            return;
        } else if(newTask.style.display === 'none') {
            newTask.style.display = 'block';
        }
    }
    
    static removeNewTask() {
        const newTask = document.querySelector('.new-task');
            newTask.style.display = 'none';
    }

    //Open Inbox
    static selectInbox(e) {
        e.preventDefault();

        console.log(e, 'PLZZZZ')

        //Sidebar list
        const inbox = document.querySelector('.inbox');
        const today = document.querySelector('.today');
        const week = document.querySelector('.week');

    const list = Array.from(document.querySelector('#to-do-list').childNodes);
    let removeTasks = list.forEach(task => {
        let checkbox = task.firstElementChild.firstElementChild.firstElementChild
        UI.deleteTask(checkbox);
    })

    UI.displayTasks();
    Inbox.createInbox();
    
    }

    
}