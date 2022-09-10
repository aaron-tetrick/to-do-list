import { Inbox } from "./inbox";

export class Today {
    // Creates Today's UI
    static createToday() {
        const contentTitle = document.getElementById('content-title');
        const content = document.getElementById('content');
        const todayDiv = document.createElement('div');
        const title = document.createElement('h2');
    
        title.innerText = "Today";
    
        title.classList.add('title');
        todayDiv.classList.add('today-div');
    
        todayDiv.appendChild(title);
        contentTitle.appendChild(todayDiv);
    }

    //Open Today's projects
    static selectToday(e) {
        e.preventDefault();

        //Sidebar list
        const inbox = document.querySelector('.inbox');
        const today = document.querySelector('.today');
        const week = document.querySelector('.week');
        
        const inboxDiv = document.querySelector('.inbox-div');
        const weekDiv = document.querySelector('.week-div');
        const newTask = document.querySelector('.new-task');
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

        Today.createToday();

        if(newTask) {
            Inbox.removeNewTask();
        }
    }
}