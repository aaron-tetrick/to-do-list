import { Modal } from './modal';
import { Inbox } from './inbox';
import { Today } from './today';
import { Week } from './week';
import { ProjectEntry } from './project';
import { format, addDays, parseISO, isToday, isThisWeek } from 'date-fns';

// Load the Inbox page (and the hidden Modal) on pageload
Modal.createModal();
Inbox.createInbox();

// Project Class: Represents a Project
class Project {
    constructor(title) {
        this.title = title
    }
}

// Task Class: Represents a Task
class Task {
    constructor(title, date, priority, project) {
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.project = project;
    }

    static changeTitle(oldTitle, newTitle) {
        // Unstringifies the tasks objects in localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        // Changes the title in localStorage to newly inputted title
        for (let i=0; i < tasks.length; i++) {
                if(tasks[i].title === oldTitle) {
                    tasks[i].title = newTitle;
                }
        }
        // Restringifies and sets the tasks objects in localStorage 
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static changePriority(newPriority, entryTitle) {
        // Unstringifies the tasks objects in localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        for (let i=0; i < tasks.length; i++) {
            if(tasks[i].title === entryTitle) {
                tasks[i].priority = newPriority;
            }
        }
        // Restringifies and sets the tasks objects in localStorage 
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static changeDate(currentDate, entryTitle) {
        // Unstringifies the tasks objects in localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        for (let i=0; i < tasks.length; i++) {
            if(tasks[i].title === entryTitle) {
                tasks[i].date = currentDate
            }
        }
        // Restringifies and sets the tasks objects in localStorage 
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

// Store Tasks Class: Handles Storage of Tasks
export class StoreTasks {
    static getTasks() {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    static addTask(task) {
        const tasks = StoreTasks.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask(title) {
        const tasks = StoreTasks.getTasks();
        tasks.forEach((task, index) => {
            if(task.title === title) {
                tasks.splice(index, 1);
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

// Store Projects Class: Handles Storage of Project
 class StoreProjects {
    static getProjects() {
        let projects;
        if(localStorage.getItem('projects') === null) {
            projects = [];
        } else {
            projects = JSON.parse(localStorage.getItem('projects'));
        }
        return projects;
    }

    static addProject(project) {
        const projects = StoreProjects.getProjects();
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static removeProject(title) {
        const projects = StoreProjects.getProjects();
        projects.forEach((project, index) => {
            if(project.title === title) {
                projects.splice(index, 1);
            }
        });
        localStorage.setItem('projects', JSON.stringify(projects));
    }
 }

// UI Class: Handle UI Tasks
export class UI {
    // Open Modal
    static displayModal() {
        const modal = document.querySelector('.modal');
        modal.style.display = "block";
    }

    // Close Modal
    static closeModal() {
        const modal = document.querySelector('.modal');
        modal.style.display = "none";
        UI.clearFields();
    }

    // Task UI Methods
    static displayTasks() { 
        const tasks = StoreTasks.getTasks();
        tasks.forEach(task => UI.addTaskToList(task));
    }

    static addTaskToList(task) {
        const list = document.querySelector('#to-do-list');
        const row = document.createElement('tr');

        const date = addDays(parseISO(`${task.date}`), 0);
        const dateFormatted = format(date, 'P');
        let formatTitle = task.title.replaceAll(' ', '-');

        row.innerHTML = `
            <td class='tdl-header delete ${task.project}'>
                <div class='checkbox-container'>
                    <input type='checkbox' class='completed' id=${formatTitle}>
                    <label for=${formatTitle}>
                </div>
            </td>
            <td class='tdl-header'><span class='title'>${task.title}</span></td>
            <td class='tdl-header ${formatTitle.toLowerCase()}-date-parent'><span class='date'>${dateFormatted}</span></td>
            <td class='tdl-header ${formatTitle.toLowerCase()}-parent'><span class='${formatTitle.toLowerCase()} priority'>${task.priority}</span></td>
        `;

        UI.showPriority(row.children[3])
        list.appendChild(row);
    }

    static showPriority(el) {
        if(el.innerText === 'High') {
            el.classList.add('high');
        }
        else if(el.innerText === 'Medium') {
            el.classList.add('medium');
        } 
        else if(el.innerText === 'Low') {
            el.classList.add('low');
        }
    }

    // Deletes a task from the UI
    static deleteTask(el) {
        if(el.classList.contains('completed')) {
          el.parentElement.parentElement.parentElement.remove();
        }
    }

    static showAlert() {
        const div = document.createElement('div');
        div.className = 'alert';
        div.appendChild(document.createTextNode('Please fill in all fields'));
        const container = document.querySelector('.modal-body-div');
        const form = document.querySelector('.modal-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 1500);
    }

    static clearFields() {
        document.querySelector('.form-title').value = '';
        document.querySelector('.form-date').value = '';
        document.querySelector('.form-priority').value = '';
        document.querySelector('.form-project').value = '';
    }

    static changeTitle(currentTitle) {
        const titleInput = document.createElement('div');
        titleInput.classList.add('title-input');

        currentTitle.innerText = '';
        
        titleInput.innerHTML = `
        <form class='title-form'>
            <div id="entry-div">
            <input name='title-input' type="text" class="change-title">
            <label for='title-input'></label>
            </div>    
            <div id="project-btn-div">
                    <button id="change-title-btn">Change</button>
                    <button id="cancel-title-btn">Cancel</button>
                </div>
            </form>
        `
        currentTitle.appendChild(titleInput);
    }

    static changePriority(currentPriority, title) {
        let formatTitle = title.replaceAll(' ', '-');
        const priorityDropdown = document.createElement('select');
        const priorityParent = document.querySelector(`.${formatTitle}-parent`);
    
        priorityDropdown.classList.add(`priority-dropdown-${formatTitle}`);
        priorityDropdown.classList.add(`priority-dropdown`);
        currentPriority.parentElement.classList.remove('high');
        currentPriority.parentElement.classList.remove('medium');
        currentPriority.parentElement.classList.remove('low');
        currentPriority.remove();

        priorityDropdown.innerHTML = `
        <option value='none'></option>
        <option class='priorityOption' value='high'>High</option>
        <option class='priorityOption' value='medium'>Medium</option>
        <option class='priorityOption' value='low'>Low</option>
        `;

        priorityParent.appendChild(priorityDropdown);
    }

    static selectPriority(priority, title) {
        let formatPriority = title.replaceAll(' ', '-');
        const newPriority = document.createElement('span');
        const priorityDropdown = document.querySelector(`.priority-dropdown-${formatPriority.toLowerCase()}`);
        const priorityParent = document.querySelector(`.${formatPriority.toLowerCase()}-parent`);

        newPriority.innerHTML = `${priority}`;
        newPriority.classList.remove('medium');
        newPriority.classList.remove('low');
        newPriority.classList.add(`${priority}`.toLowerCase());
        newPriority.classList.add('priority');

        priorityDropdown.remove();
        priorityParent.appendChild(newPriority);
    }

    static changeDate(currentDate, title) {
        const formatTitle = title.replaceAll(' ', '-');
        const newDate = document.createElement('span');
        const dateParent = document.querySelector(`.${formatTitle.toLowerCase()}-date-parent`)
        
        newDate.innerHTML = `<input name ='newDate' type='date' class='${formatTitle.toLowerCase()}-date date-input'>`;

        currentDate.remove();
        dateParent.appendChild(newDate);
    }

    static selectDate(selectedDate, title) {
        let formatTitle = title.replaceAll(' ', '-');
        const dateParent = document.querySelector(`.${formatTitle.toLowerCase()}-date-parent`);
        const dateInput = document.querySelector(`.${formatTitle.toLowerCase()}-date`);
        const dateFormmated = format(parseISO(`${selectedDate}`), 'P');
        const newDate = document.createElement('span');
        newDate.classList.add('date');
        newDate.innerHTML = `${dateFormmated}`;

        dateInput.remove();
        dateParent.appendChild(newDate);
    }

    // Project UI Methods
    static displayProjects() { 
        const projects = StoreProjects.getProjects();
        projects.forEach(project => UI.addProjectToList(project));
    }
    
    static addProjectToList(project) {
        const projectsList = document.querySelector('.projects-list');
        const newProject = document.createElement('li');
        newProject.className = 'project-list-item';

        newProject.innerHTML = `
        <div class="list-item-div">
        <div class="project-title-item">${project.title}</div>
        <div class="close-project-btn">x</div>
        </div>`;

        projectsList.append(newProject);
    }

    // Hide New Project and Show Project Input Form
    static hideInputForm() {
        const newProject = document.querySelector('#add-project');
        const projectForm = document.querySelector('#project-form')
        newProject.style.display = 'block';
        projectForm.style.display = 'none';
    }

    // Clear Project Input
    static clearProjectInput() {
    document.querySelector('#project-entry').value = '';
    }

    // Delete a Project from Sidebar
    static deleteProject(el) {
         if(el.classList.contains('close-project-btn')) {
            el.parentElement.remove();
         }
        }

    // Add Project Entry to Modal
    static addProjectOptionToModal(option) {
        const projectDropdown = document.querySelector('.form-project');
        const projectEntry = document.createElement('option');
        projectEntry.setAttribute('value', `${option}`)
        projectEntry.innerHTML = `${option}`;

        projectDropdown.appendChild(projectEntry);
    }
    // Delete Project Entry to Modal
    static deleteProjectOptionFromModal(option) {
        const projectDropdown = Array.from(document.querySelector('.form-project').children);
        
        for (let i=0; i < projectDropdown.length; i++) {
            if(projectDropdown[i].innerText === option) {
            projectDropdown[i].remove();
            }
        }
    }

    // Populate the dropdown with the project entries after reloading page.
    static populateDropdown() {
      const projectsList = Array.from(document.querySelector('.projects-list').children);
      const projectDropdown = document.querySelector('.form-project');
      if(projectsList.length !== 0) {
        projectsList.forEach(project => {
            const entryTitle = project.firstChild.nextSibling.firstChild.nextSibling.innerText
            const projectEntry = document.createElement('option');
            projectEntry.setAttribute('value', `${entryTitle}`)
            projectEntry.innerHTML = `${entryTitle}`;

            projectDropdown.appendChild(projectEntry);
        });
      }      
    }
};

//*****EVENTS*****\\

// Event: Display Projects and populate Dropdown with Projects
document.addEventListener('DOMContentLoaded', UI.displayProjects);
document.addEventListener('DOMContentLoaded', UI.populateDropdown);

// Sidebar Event Listeners
document.querySelector('.inbox').addEventListener('click', Inbox.selectInbox);
document.querySelector('.today').addEventListener('click', Today.selectToday);
document.querySelector('.week').addEventListener('click', Week.selectWeek);

//Modal Form Event Listeners
document.querySelector('.new-task').addEventListener('click', UI.displayModal);
document.querySelector('.close-btn').addEventListener('click', UI.closeModal);
document.querySelector('.cancel-btn').addEventListener('click', UI.closeModal);

// Event: Delete Project
    document.querySelector('.projects-list').addEventListener('click', (e) => {
        if(e.target.classList.contains('close-project-btn')) {
            if(confirm('Are you sure you want to delete this project?')  === true) {
            // Remove Project from UI
            UI.deleteProject(e.target);

            // Remove Project from Storage
            StoreProjects.removeProject(e.target.previousElementSibling.innerText);
        
            //  Remove Project from Dropdown
            UI.deleteProjectOptionFromModal(e.target.previousElementSibling.innerText);

            // Removes all tasks within Project
            const tasks = StoreTasks.getTasks();
            tasks.forEach(task => {
                if(task.project === e.target.previousElementSibling.innerText) {
                    if(task.title.includes(' ')) {
                        let newTitle = task.title.replaceAll(' ', '-');
                        let taskUI = document.querySelector(`#${newTitle}`);
                        UI.deleteTask(taskUI);
                    } else {
                    let taskUI = document.querySelector(`#${task.title}`);
                    // Remove task from UI
                    UI.deleteTask(taskUI);
                    }
                    // Remove task from Storage
                    StoreTasks.removeTask(task.title);
                }
            })

            const table = document.querySelector('#table');
            const contentTitle = document.querySelector('.title');
            const newTask = document.querySelector('.new-task');
            // Blank out the page
                if(contentTitle.innerText === e.target.previousElementSibling.innerText) {
                contentTitle.innerText = '';
                newTask.style.display = 'none';
                table.style.display = 'none';
                }
            }
        }
    });

// Event: Add Project Input
document.querySelector('#add-project').addEventListener('click', (e) => {
    // Vanish New Project Button and display Project Form
    const newProjectBtn = document.querySelector('#add-project');
    const projectForm = document.querySelector('#project-form');
    newProjectBtn.style.display = 'none';
    projectForm.style.display = 'block';
})

// Event: Add a Project
document.querySelector('#add-project-btn').addEventListener('click', (e) => {
      // Prevent Default
      e.preventDefault();

      // Get project title value
    const title = document.querySelector('#project-entry').value;
      let projects = StoreProjects.getProjects();

    // Check if a project already exists
  let match = projects.filter(project => {
        if(project.title === title) {
            return true;
        }
    });

    if(title === '') {
        alert('Please enter a value');
    } else if(match.length > 0) {
        alert('Project names must be different');
    } else if (title === 'Inbox' || title === 'Today' || title === 'This Week' || title === 'Week') {
        alert('Invalid project name');
    } else {
    // Instantiate Project
    const project = new Project(title);

    // Add Project to List
    UI.addProjectToList(project);

    // Add Project to StoreProjects
    StoreProjects.addProject(project);

    // Hide input form
    UI.hideInputForm();

    // Clear Project fields
    UI.clearProjectInput();

    // Add project entry to Modal dropdown
    UI.addProjectOptionToModal(title);

    match = [];
    }
})

// Cancel adding a project entry
document.querySelector('#cancel-project-btn').addEventListener('click', (e) => {
  // Prevent Default
  e.preventDefault();

  // Hide input form
  UI.hideInputForm();

  // Clear Project fields
  UI.clearProjectInput();
})

// Event: Click on a sidelist project
document.querySelector('.projects-list').addEventListener('click', (e) => {
      // Prevent Default
      e.preventDefault();
    if(e.target.classList.contains('project-title-item')) {
        const contentTitle = document.querySelector('.title').innerText

        if(contentTitle !== e.target.innerText) {
        ProjectEntry.selectProject(e.target.innerText);
        ProjectEntry.createProject(e.target.innerText);
        }   
    }
})

// Event: Display Tasks
document.addEventListener('DOMContentLoaded', UI.displayTasks);

// Event: Add a Task
document.querySelector('.modal-form').addEventListener('submit', (e) => {
    // Prevent Default
    e.preventDefault();

    // Get form values
    const title = document.querySelector('.form-title').value
    const date = document.querySelector('.form-date').value
    const priority = document.querySelector('.form-priority').value;
    const project = document.querySelector('.form-project').value;
    const contentTitle = document.querySelector('.title').innerText;
    let tasks = StoreTasks.getTasks();

    // Check if a task already exists
  let match = [];
  
  tasks.filter(task => { if(task.title === title) { 
    match.push(task);
    }
});
        // Validate
        if(title === '' || date === '' || priority === '') {
            UI.showAlert();
        } else if(match.length > 0) {
            alert('Task names must be different');
        } else {
            // Instantiate Task
            const task = new Task(title, date, priority, project)

            let newDate = date.replace(/-/g, ', ');
            const todayResult = isToday(new Date(newDate));
            const weekResult = isThisWeek(new Date(newDate));

            if(contentTitle === 'Inbox' || contentTitle === task.project || todayResult === true && contentTitle === 'Today' || weekResult === true && contentTitle === 'Week') {
             // Add Task to UI
             UI.addTaskToList(task);
            }
            
            // Add Task to StoreTasks
            StoreTasks.addTask(task);
    
            // Clear Fields
            UI.clearFields();

            // Close Modal
            UI.closeModal();

            match = [];          
        }
});

// Event: Remove a Task
document.querySelector('#to-do-list').addEventListener('click', (e) => {
    // Remove Task from UI
    UI.deleteTask(e.target);

    // Remove Task from StoreTasks
    if(e.target.classList.contains('completed')) {
    StoreTasks.removeTask(e.target.parentElement.parentElement.nextElementSibling.textContent);
    }
})

// CHANGE THE TASK INFORMATION ON THE TABLE \\
// Double click on Title to pull up changeTitle form
document.querySelector('#table').addEventListener('dblclick', (e) => {
    if(e.target.classList.contains('title')) {
        const currentTitle = e.target.innerText
        UI.changeTitle(e.target);

        // Change a New Title entry
        document.querySelector('#change-title-btn').addEventListener('click', (e) => {
        // Prevent Default
        e.preventDefault();

     const titleInput = document.querySelector('.change-title').value;

     if(titleInput === '') {
        alert('Please enter a value');
     } else {
        // Change the UI title to user-inputted title
     e.target.parentElement.parentElement.parentElement.parentElement.innerText = titleInput;
        // Change the Task Object title
     Task.changeTitle(currentTitle, titleInput);
    }
 })
        // Cancel a New Title entry
    document.querySelector('#cancel-title-btn').addEventListener('click', (e) => {
       // Prevent Default
       e.preventDefault();

    // Keeps the Title name the same
    e.target.parentElement.parentElement.parentElement.parentElement.innerText = currentTitle;
        })
    }
 
})

// Double click on Priority to pull up Priority Dropdown
document.querySelector('#table').addEventListener('dblclick', (e) => { 
    if(e.target.classList.contains('priority')) {
        const entryTitle = e.target.parentElement.previousElementSibling.previousElementSibling.firstChild.innerText;
        let formatTitle = entryTitle.replaceAll(' ', '-');
        const currentPriority = e.target;
        UI.changePriority(currentPriority, entryTitle.toLowerCase());

        // Change the priority level
        document.querySelector(`.priority-dropdown-${formatTitle.toLowerCase()}`).addEventListener('change', (e) => {
            if(e.target.value === 'none') {
                alert('Please select a priority');
            } else if(e.target.value === 'high') {
                UI.selectPriority('High', entryTitle);
                Task.changePriority('High', entryTitle);
            } else if(e.target.value === 'medium') {
                UI.selectPriority('Medium', entryTitle);
                Task.changePriority('Medium', entryTitle);
            } else if(e.target.value === 'low') {
                UI.selectPriority('Low', entryTitle);
                Task.changePriority('Low', entryTitle);
            }
        })
    }
})

// Double click on Date to pull up Date input
document.querySelector('#table').addEventListener('dblclick', (e) => {
    if(e.target.classList.contains('date')) {
        const entryTitle = e.target.parentElement.previousElementSibling.firstElementChild.innerText;
        let formatTitle = entryTitle.replaceAll(' ', '-');
        const currentDate = e.target
        UI.changeDate(currentDate, entryTitle);

         // Change the date
        document.querySelector(`.${formatTitle.toLowerCase()}-date`).addEventListener('change', (e) => {
            if(e.target.value === '') {
                alert('Please select a due date');
            } else {
            UI.selectDate(e.target.value, entryTitle);
            Task.changeDate(e.target.value, entryTitle);
            }
        })
    }
})