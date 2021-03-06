const createModal = function() {
    const content = document.getElementById('content');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeBtn = document.createElement('span');
  
    const modalHeaderDiv = document.createElement('div');
    const modalHeader = document.createElement('h2');
    const modalBodyDiv = document.createElement('div');
    const modalForm = document.createElement('form');

    const inputTitle = document.createElement('input');
    const inputDate = document.createElement('input');
    const inputDescription = document.createElement('textarea');
    const inputPriority = document.createElement('select');
    const inputProject = document.createElement('select');

    const formDiv1 = document.createElement('div');
    const formDiv2 = document.createElement('div');

    const modalInputs = document.createElement('div');
    
    const labelTitle = document.createElement('label');
    const labelDate = document.createElement('label');
    const labelDescription = document.createElement('label');
    const labelPriority = document.createElement('label');
    const labelProject = document.createElement('label');

    const titleDiv = document.createElement('div');
    const dateDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const priorityDiv = document.createElement('div');
    const projectDiv = document.createElement('div');

    const optionHigh = document.createElement('option');
    const optionMed = document.createElement('option');
    const optionLow = document.createElement('option');

    const formDiv3 = document.createElement('div');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');


    closeBtn.innerHTML = "&times;";
    modalHeader.innerText = 'Add New Task';
    addBtn.innerText = 'Add Task';
    cancelBtn.innerText = "Cancel";
    labelTitle.innerText = "Title:";
    labelDate.innerText = "Date:";
    labelDescription.innerText = "Description:";
    labelPriority.innerText = "Priority:";
    labelProject.innerText = "Project:"
    optionHigh.innerText = "High";
    optionMed.innerText = "Medium";
    optionLow.innerText = "Low";

    inputPriority.setAttribute('name', 'priority');
    optionHigh.setAttribute('value', 'high');
    optionMed.setAttribute('value', 'medium');
    optionLow.setAttribute('value', 'low');

    inputTitle.setAttribute('required', '');
    
    inputTitle.setAttribute('name', 'title1');
    inputDate.setAttribute('name', 'date');
    inputDescription.setAttribute('name', 'description');
    inputPriority.setAttribute('name', 'priority');
    inputProject.setAttribute('name', 'project');

    labelTitle.setAttribute('for', 'title1');
    labelDate.setAttribute('for', 'date');
    labelDescription.setAttribute('for', 'description');
    labelPriority.setAttribute('for', 'priority');
    labelProject.setAttribute('for', 'project');

    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    modalHeaderDiv.classList.add('modal-header-div');
    closeBtn.classList.add('close-btn');
    modalBodyDiv.classList.add('modal-body-div');
    modalForm.classList.add('modal-form');
    modalInputs.classList.add('modal-inputs');
    formDiv1.classList.add('form-div-1');
    formDiv2.classList.add('form-div-2');


    titleDiv.classList.add('input-div');
    dateDiv.classList.add('input-div');
    descriptionDiv.classList.add('input-div');
    priorityDiv.classList.add('input-div');
    projectDiv.classList.add('input-div');

    inputTitle.classList.add('input-element');
    inputTitle.classList.add('input-title');
    inputDate.classList.add('input-element');
    inputDescription.classList.add('input-element');
    inputDescription.classList.add('form-description');
    inputPriority.classList.add('input-element');
    inputProject.classList.add('input-element');
    

    formDiv3.classList.add('form-div-3');
    addBtn.classList.add('add-btn');
    cancelBtn.classList.add('cancel-btn');
    
    modalHeaderDiv.appendChild(modalHeader);
    modalHeaderDiv.appendChild(closeBtn);
    modalContent.appendChild(modalHeaderDiv);

    titleDiv.appendChild(labelTitle);
    titleDiv.appendChild(inputTitle);

    dateDiv.appendChild(labelDate);
    dateDiv.appendChild(inputDate);

    descriptionDiv.appendChild(labelDescription);
    descriptionDiv.appendChild(inputDescription);

    priorityDiv.appendChild(labelPriority);
    priorityDiv.appendChild(inputPriority);
    inputPriority.appendChild(optionHigh);
    inputPriority.appendChild(optionMed);
    inputPriority.appendChild(optionLow);


    projectDiv.appendChild(labelProject);
    projectDiv.appendChild(inputProject);

    formDiv1.appendChild(titleDiv);
    formDiv1.appendChild(descriptionDiv);
    formDiv2.appendChild(dateDiv);
    formDiv2.appendChild(priorityDiv);
    formDiv2.appendChild(projectDiv);
    formDiv3.appendChild(cancelBtn);
    formDiv3.appendChild(addBtn);

    modalInputs.appendChild(formDiv1);
    modalInputs.appendChild(formDiv2);
    modalForm.appendChild(modalInputs);
    modalForm.appendChild(formDiv3);
    modalBodyDiv.appendChild(modalForm);



    modalContent.appendChild(modalBodyDiv);
    modal.appendChild(modalContent);
    content.appendChild(modal);
}


export {createModal}