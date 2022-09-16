import { StoreTasks } from ".";
import { UI } from ".";

export class ProjectEntry {
    // Creates sidebar projects
    static createProject(projectTitle) {
        const contentTitle = document.getElementById('content-title');
        const oldTitle = document.querySelector('.title');
        const title = document.createElement('h2');
        const newTask = document.querySelector('.new-task');

        // Changes title text
        if(oldTitle === null) {
            title.innerText = `${projectTitle}`;
            title.classList.add('title');
            contentTitle.appendChild(title);
        } else if(oldTitle.innerText !== `${projectTitle}`) {
            oldTitle.remove();
            title.innerText = `${projectTitle}`;
            title.classList.add('title');
            contentTitle.appendChild(title);
        }

        // Displays Table
        if(table.style.display === 'block') {
            return;
        } else if(table.style.display === 'none') {
            table.style.display = 'block';
        }

         // Displays newTask Button
         if(newTask.style.display === 'block') {
            return;
        } else if(newTask.style.display === 'none') {
            newTask.style.display = 'block';
        }
    }

       // Click Project on Sidebar
       static selectProject(projectTitle) {
        const list = Array.from(document.querySelector('#to-do-list').childNodes);
        const tasks = StoreTasks.getTasks();

        list.forEach(task => {
            task.remove();
        })
        
        for(let i=0; i < tasks.length; i++) {
            if(tasks[i].project === projectTitle) {
            UI.addTaskToList(tasks[i])
            }
        }
    }
}