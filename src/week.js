import { Inbox } from "./inbox";

export class Week {
    // Creates Week's projects
    static createWeek() {
        const contentTitle = document.getElementById('content-title');
        const content = document.getElementById('content');
        const weekDiv = document.createElement('div');
        const title = document.createElement('h2');

        title.innerText = "Week";

        title.classList.add('title');
        weekDiv.classList.add('week-div');

        weekDiv.appendChild(title);
        contentTitle.appendChild(weekDiv);
    }

    //Open Week projects
    static selectWeek(e) {
        e.preventDefault();

        //Sidebar list
        const inbox = document.querySelector('.inbox');
        const today = document.querySelector('.today');
        const week = document.querySelector('.week');

        const inboxDiv = document.querySelector('.inbox-div');
        const todayDiv = document.querySelector('.today-div');
        const newTask = document.querySelector('.new-task');
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

        Week.createWeek();
        if(newTask) {
            Inbox.removeNewTask();
        }
    }
}
