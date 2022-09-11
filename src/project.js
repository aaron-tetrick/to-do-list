export class ProjectEntry {
    // Creates sidebar projects
    static createProject(projectTitle) {
        const contentTitle = document.getElementById('content-title');
        const oldTitle = document.querySelector('.title');
        const title = document.createElement('h2');
        const newTask = document.querySelector('.new-task');
        console.log(oldTitle)

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

         // Displays newTask Button
         if(newTask.style.display === 'block') {
            return;
        } else if(newTask.style.display === 'none') {
            newTask.style.display = 'block';
        }
    }
}