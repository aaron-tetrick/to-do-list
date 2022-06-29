const createModal = function() {
    const content = document.getElementById('content');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeBtn = document.createElement('span');
    const testPara = document.createElement('p');
    const modalHeaderDiv = document.createElement('div');
    const modalHeader = document.createElement('h2');
    const modalBodyDiv = document.createElement('div');
    const modalForm = document.createElement('form');
    const inputTitle = document.createElement('input');


    const modalFooterDiv = document.createElement('div');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');


    testPara.innerText = "Hello... I am a modal";
    closeBtn.innerHTML = "&times;";
    modalHeader.innerText = 'Add New Task';
    addBtn.innerText = 'Add Task';
    cancelBtn.innerText = "Cancel";

    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    modalHeaderDiv.classList.add('modal-header-div');
    closeBtn.classList.add('close-btn');
    modalBodyDiv.classList.add('modal-body-div');
    modalForm.classList.add('modal-form');

    modalFooterDiv.classList.add('modal-footer-div');
    addBtn.classList.add('add-btn');
    cancelBtn.classList.add('cancel-btn');
    
    modalHeaderDiv.appendChild(modalHeader);
    modalHeaderDiv.appendChild(closeBtn);
    modalContent.appendChild(modalHeaderDiv);
    modalBodyDiv.appendChild(testPara);
    modalBodyDiv.appendChild(modalForm);

    modalContent.appendChild(modalBodyDiv);
    modalFooterDiv.appendChild(cancelBtn);
    modalFooterDiv.appendChild(addBtn);
    modalContent.appendChild(modalFooterDiv)
    modal.appendChild(modalContent);
    content.appendChild(modal);
}




export {createModal}