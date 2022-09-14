import { UI } from ".";
import { Inbox } from "./inbox";
import { isToday } from 'date-fns';

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

          // Displays Table
          if(table.style.display === 'block') {
            return;
        } else if(table.style.display === 'none') {
            table.style.display = 'block';
        }
    }

    //Open Today's projects
    static selectToday(e) {
        e.preventDefault();
        console.log(e.target);

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

document.querySelector('.today').addEventListener('click', Today.selectToday);