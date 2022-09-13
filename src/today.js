import { Inbox } from "./inbox";

export class Today {
    // Creates Today's UI
    static createToday() {
        const contentTitle = document.getElementById('content-title');
        const title = document.createElement('h2');
        const oldTitle = document.querySelector('.title');

        oldTitle.remove();
        title.innerText = "Today";
        title.classList.add('title');
    
        contentTitle.appendChild(title);
    }

    //Open Today's projects
    static selectToday(e) {
        e.preventDefault();

        //Sidebar list
        const inbox = document.querySelector('.inbox');
        const today = document.querySelector('.today');
        const week = document.querySelector('.week');
        
        const newTask = document.querySelector('.new-task');

        Today.createToday();

        if(newTask) {
            Inbox.removeNewTask();
         }
    }
}