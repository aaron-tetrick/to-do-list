import { UI } from ".";
import { Inbox } from "./inbox";
import { StoreTasks } from ".";
import { isThisWeek } from 'date-fns';

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

        // Displays Table
        if(table.style.display === 'block') {
            return;
        } else if(table.style.display === 'none') {
            table.style.display = 'block';
        }
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
        Week.displayWeek();

        if(newTask) {
            Inbox.removeNewTask();
        }
    }

     // Display only Today's tasks
     static displayWeek() {
        const list = Array.from(document.querySelector('#to-do-list').childNodes);
        const tasks = StoreTasks.getTasks();

        list.forEach(task => {
            task.remove();
        })
        
        for(let i=0; i < tasks.length; i++) {
            let date = tasks[i].date;
            let newDate = date.replace(/-/g, ', ');
            const result = isThisWeek(new Date(newDate))
            if(result === true) {   
                UI.addTaskToList(tasks[i])
            }
        }
    }
}


document.querySelector('.week').addEventListener('click', Week.selectWeek);