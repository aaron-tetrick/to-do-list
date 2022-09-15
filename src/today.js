import { UI } from ".";
import { StoreTasks } from ".";
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
        
        const newTask = document.querySelector('.new-task');

        Today.createToday();
        Today.displayToday();

        if(newTask) {
            Inbox.removeNewTask();
        }
    }

    // Display only Today's tasks
    static displayToday() {
        const list = Array.from(document.querySelector('#to-do-list').childNodes);
        const tasks = StoreTasks.getTasks();

        list.forEach(task => {
            task.remove();
        })
        
        for(let i=0; i < tasks.length; i++) {
            let date = tasks[i].date;
            let newDate = date.replace(/-/g, ', ');
            const result = isToday(new Date(newDate))
            if(result === true) {   
                UI.addTaskToList(tasks[i])
            }
        }
    }
}