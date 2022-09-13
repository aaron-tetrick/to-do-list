import { Inbox } from "./inbox";

export class Week {
    // Creates Week's projects
    static createWeek() {
        const contentTitle = document.getElementById('content-title');
        const oldTitle = document.querySelector('.title');
        const title = document.createElement('h2');

        oldTitle.remove();
        title.innerText = "Week";

        title.classList.add('title');

        contentTitle.appendChild(title);
    }

    //Open Week projects
    static selectWeek(e) {
        e.preventDefault();

        //Sidebar list
        const inbox = document.querySelector('.inbox');
        const today = document.querySelector('.today');
        const week = document.querySelector('.week');

        const newTask = document.querySelector('.new-task');
     
        Week.createWeek();
        if(newTask) {
            Inbox.removeNewTask();
        }
    }
}
