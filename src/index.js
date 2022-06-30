import {createModal} from './modal';
import {createInbox} from './inbox';

createInbox();
createModal();

const operateModal = (function() {
    const newTask = document.querySelector('.new-task');
    const closeModalBtn = document.querySelector('.close-btn');
    const _modal = document.querySelector('.modal');
    const cancelBtn = document.querySelector('.cancel-btn');

    function addTask() {
        _modal.style.display = "block";
    }
    
    function closeModal() {
        _modal.style.display = "none";
    }
    
    return {addTask, closeModal, closeModalBtn, cancelBtn, newTask}
})();

operateModal.newTask.addEventListener('click', operateModal.addTask);
operateModal.closeModalBtn.addEventListener('click', operateModal.closeModal)
operateModal.cancelBtn.addEventListener('click', operateModal.closeModal);

console.log(operateModal.addTask);

