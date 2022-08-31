import { createModal } from './modal';
import { createInbox, removeNewTask } from './inbox';
import { createToday } from './today';
import { createWeek } from './week';

createInbox();
createModal();
//addObject();

// Form inputs
const inputTitle = document.querySelector('.form-title');
const inputDate = document.querySelector('.form-date');
const inputPriority = document.querySelector('.form-priority');
const inputProject = document.querySelector('.form-project');


// Open/Close the Modal
    const newTask = document.querySelector('.new-task');
    const closeModalBtn = document.querySelector('.close-btn');
    const modal = document.querySelector('.modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    

    function addTask() {
        modal.style.display = "block";
    }
    
    function closeModal() {
        modal.style.display = "none";
        UI.clearFields();
    }

//Event Listeners for modal form    
newTask.addEventListener('click', addTask);
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);





//Click Add Button
const addBtn = document.querySelector('.add-btn');
// addBtn.addEventListener('click', closeModal);

//Sidebar list
const inbox = document.querySelector('.inbox');
const today = document.querySelector('.today');
const week = document.querySelector('.week');

//Side bar list event listeners
inbox.addEventListener('click', selectInbox);
today.addEventListener('click', selectToday);
week.addEventListener('click', selectWeek);
inbox.addEventListener('click', reloadPage);


function reloadPage() {
    location.reload();
}

//Open Inbox
function selectInbox() {
    const todayDiv = document.querySelector('.today-div');
    const weekDiv = document.querySelector('.week-div');
    if(today.className.includes('current-page')) {
        console.log("You selected today.");
        todayDiv.remove();
    } else if (week.className.includes('current-page')) {
        console.log('You also selected today');
        weekDiv.remove();
    } else if (inbox.className.includes('current-page')) {
        return;
    }

    today.classList.remove('current-page');
    inbox.classList.add('current-page');
    week.classList.remove('current-page');

    createInbox();
}



//Open Today's projects
function selectToday() {
    const inboxDiv = document.querySelector('.inbox-div');
    const weekDiv = document.querySelector('.week-div');
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
    
    removeNewTask();
    createToday();
}

//Open Week projects
function selectWeek() {
    const inboxDiv = document.querySelector('.inbox-div');
    const todayDiv = document.querySelector('.today-div');
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

    removeNewTask();
    createWeek();
}

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
} 

// UI Class: Handle UI Tasks
class UI {
    // Task UI Methods
    static displayTasks() { 
        const StoredTasks = [
            {
                title: 'Dishes',
                date: '8/21/22',
                priority: 'Medium',
                project: 'Household Chores'
            },
            {
                title: 'Visit Bank',
                date: '8/24/22',
                priority: 'High',
                project: 'Errands'
            }
        ];

        const tasks = StoredTasks;

        tasks.forEach(task => UI.addTaskToList(task));
        tasks.forEach(task => {
            if(task.priority === 'High') {
                console.log(task);
                
            }
            console.log(task.priority);
        })
    }

    static addTaskToList(task) {
        const list = document.querySelector('#to-do-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td class='tdl-header delete'>
                <div class='checkbox-container'>
                    <input type='checkbox' class='completed' id=${task.title.replace(' ', '-')}>
                    <label for=${task.title.replace(' ', '-')}>
                </div>
            </td>
            <td class='tdl-header title'>${task.title}</td>
            <td class='tdl-header date'>${task.date}</td>
            <td class='tdl-header priority'>${task.priority}</td>
        `;

        UI.showPriority(row.children[3])

        list.appendChild(row);
    }

    static showPriority(el) {
        if (el.innerText === 'High') {
            el.classList.add('high');
        }
        else if (el.innerText === 'Medium') {
            el.classList.add('med');
        } 
        else if (el.innerText === 'Low') {
            el.classList.add('low');
        }
    }

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

        currentTitle.innerText = '';
        
        titleInput.innerHTML = `
        <form class='title-form'>
            <div id="entry-div">
            <input name='title-input' type="text" class="change-title">
            <label for='title-input'></label>
            </div>    
            <div id="project-btn-div">
                    <button id="add-project-btn">Change</button>
                    <button id="cancel-project-btn">Cancel</button>
                </div>
            </form>
        `
        currentTitle.appendChild(titleInput);

        const newTitle = document.querySelector('.change-title').innerText
        
        console.log(newTitle);

    }

    // Project UI Methods
    static displayProjects() { 
        const StoredProjects = [
            {
                title: 'Chores'
            },
            {
                title: 'Errands',
            }
        ];

        const projects = StoredProjects;

        projects.forEach(project => UI.addProjectToList(project));
    }
    
    static addProjectToList(project) {
        const projectsList = document.querySelector('.projects-list');

        const newProject = document.createElement('li');
        newProject.className = 'project-list-item';

        newProject.innerHTML = `
        <div class="list-item-div">
        <div>${project.title}</div>
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
         console.log(el.parentElement);
         if(el.classList.contains('close-project-btn')) {
            el.parentElement.remove();
         }
        }
};

// Event: Display Projects
document.addEventListener('DOMContentLoaded', UI.displayProjects);

// Event: Delete Project
    document.querySelector('.projects-list').addEventListener('click', (e) => {
        UI.deleteProject(e.target);
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
    if (title === '') {
        alert('Please enter a value');

    } else {
    // Instantiate Project
    const project = new Project(title);

    // Add Project to List
    UI.addProjectToList(project);

    // Hide input form
    UI.hideInputForm();

    // Clear Project fields
    UI.clearProjectInput();
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

    // Validate
    if(title === '' || date === '' || priority === '' || project === '') {
        UI.showAlert();
    } else {
        // Instantiate Task
        const task = new Task(title, date, priority, project)

        // Add Task to UI
        UI.addTaskToList(task);
    
        // Clear Fields
        UI.clearFields();

        // Close Modal
        closeModal();

        console.log(task);
  }
});

// Event: Remove a Task
document.querySelector('#to-do-list').addEventListener('click', 
(e) => {
    UI.deleteTask(e.target);
})
// Double click on Title to pull up changeTitle form
document.querySelector('#table').addEventListener('dblclick', (e) => {
    if(e.target.classList.contains('title')) {
    console.log(e.target);
    UI.changeTitle(e.target);
    }
})


