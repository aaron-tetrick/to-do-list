/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createInbox\": () => (/* binding */ createInbox),\n/* harmony export */   \"removeNewTask\": () => (/* binding */ removeNewTask)\n/* harmony export */ });\nconst contentTitle = document.getElementById('content-title');\nconst content = document.getElementById('content');\nconst inboxDiv = document.createElement('div');\nconst title = document.createElement('h2');\nconst newTask = document.createElement('p');\n\nconst createInbox = function()  {     \n    title.innerText = \"Inbox\";\n    newTask.innerText = \"+ New Task\";\n\n    inboxDiv.classList.add('inbox-div');\n    title.classList.add('title');\n    newTask.classList.add('new-task');\n\n    inboxDiv.appendChild(title);\n    content.appendChild(newTask);\n    contentTitle.appendChild(inboxDiv);\n}\n\n\nfunction removeNewTask() {\n        newTask.remove();\n}\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week */ \"./src/week.js\");\n\n\n\n\n\n\n(0,_inbox__WEBPACK_IMPORTED_MODULE_1__.createInbox)();\n(0,_modal__WEBPACK_IMPORTED_MODULE_0__.createModal)();\n//addObject();\n\n// Form inputs\nconst inputTitle = document.querySelector('.form-title');\nconst inputDate = document.querySelector('.form-date');\nconst inputDescription = document.querySelector('.form-description');\nconst inputPriority = document.querySelector('.form-priority');\nconst inputProject = document.querySelector('.form-project');\n\n\n\n// Open/Close the Modal\n    const newTask = document.querySelector('.new-task');\n    const closeModalBtn = document.querySelector('.close-btn');\n    const modal = document.querySelector('.modal');\n    const cancelBtn = document.querySelector('.cancel-btn');\n    \n\n    function addTask() {\n        modal.style.display = \"block\";\n    }\n    \n    function closeModal() {\n        modal.style.display = \"none\";\n    }\n\n//Event Listeners for modal form    \nnewTask.addEventListener('click', addTask);\ncloseModalBtn.addEventListener('click', closeModal);\ncancelBtn.addEventListener('click', closeModal);\n\n\n\n\n\n\n\n//Click Add Button\nconst addBtn = document.querySelector('.add-btn');\naddBtn.addEventListener('click', closeModal);\n\n//Sidebar list\nconst inbox = document.querySelector('.inbox');\nconst today = document.querySelector('.today');\nconst week = document.querySelector('.week');\n\n//Side bar list event listeners\ninbox.addEventListener('click', selectInbox);\ntoday.addEventListener('click', selectToday);\nweek.addEventListener('click', selectWeek);\ninbox.addEventListener('click', reloadPage);\n\n\nfunction reloadPage() {\n    location.reload();\n}\n\n//Open Inbox\nfunction selectInbox() {\n    const todayDiv = document.querySelector('.today-div');\n    const weekDiv = document.querySelector('.week-div');\n    if(today.className.includes('current-page')) {\n        console.log(\"You selected today.\");\n        todayDiv.remove();\n    } else if (week.className.includes('current-page')) {\n        console.log('You also selected today');\n        weekDiv.remove();\n    } else if (inbox.className.includes('current-page')) {\n        return;\n    }\n\n    today.classList.remove('current-page');\n    inbox.classList.add('current-page');\n    week.classList.remove('current-page');\n\n    (0,_inbox__WEBPACK_IMPORTED_MODULE_1__.createInbox)();\n}\n\n\n\n//Open Today's projects\nfunction selectToday() {\n    const inboxDiv = document.querySelector('.inbox-div');\n    const weekDiv = document.querySelector('.week-div');\n    if(inbox.className.includes('current-page')) {\n        console.log(\"You selected today.\");\n        console.log(inboxDiv);\n        inboxDiv.remove();\n    } else if (week.className.includes('current-page')) {\n        console.log('You also selected today');\n        weekDiv.remove();\n    } else if (today.className.includes('current-page')) {\n        return;\n    }\n\n    today.classList.add('current-page');\n    inbox.classList.remove('current-page');\n    week.classList.remove('current-page')\n    \n    ;(0,_inbox__WEBPACK_IMPORTED_MODULE_1__.removeNewTask)();\n    (0,_today__WEBPACK_IMPORTED_MODULE_2__.createToday)();\n}\n\n//Open Week projects\nfunction selectWeek() {\n    const inboxDiv = document.querySelector('.inbox-div');\n    const todayDiv = document.querySelector('.today-div');\n    if(inbox.className.includes('current-page')) {\n        console.log(\"You selected week\");\n        inboxDiv.remove();\n    } else if (today.className.includes('current-page')) {\n        console.log('You also selected week');\n        todayDiv.remove();\n    } else if (week.className.includes('current-page')) {\n        return;\n    }\n\n    today.classList.remove('current-page');\n    inbox.classList.remove('current-page');\n    week.classList.add('current-page')\n\n    ;(0,_inbox__WEBPACK_IMPORTED_MODULE_1__.removeNewTask)();\n    (0,_week__WEBPACK_IMPORTED_MODULE_3__.createWeek)();\n}\n\nclass NewTask {\n    constructor(title, date, priority, project) {\n        this.title = title;\n        this.date = date;\n        this.priority = priority;\n        this.project = project;\n    }\n}\n\n// UI Class: Handle UI Tasks\nclass UI {\n    static displayTasks() { \n        const StoredTasks = [\n            {\n                title: 'Dishes',\n                date: '8/21/22',\n                priority: 'Medium',\n                project: 'Household Chores'\n            },\n            {\n                title: 'Visit Bank',\n                date: '8/24/22',\n                priority: 'High',\n                project: 'Errands'\n            }\n        ];\n\n        const tasks = StoredTasks;\n\n        tasks.forEach(task => UI.addTaskToList(task));\n    }\n\n    static addTaskToList(task) {\n        const list = document.querySelector('#to-do-list');\n\n        const row = document.createElement('tr');\n\n        row.innerHTML = `\n            <td class='tdl-header delete'><input type=\"radio\"></td>\n            <td class='tdl-header'>${task.title}</td>\n            <td class='tdl-header'>${task.date}</td>\n            <td class='tdl-header'>${task.priority}</td>\n            <td class='tdl-header'>${task.project}</td>\n        `;\n\n\n        list.appendChild(row);\n    }\n}\n\n// Event: Display Books\ndocument.addEventListener('DOMContentLoaded', UI.displayTasks);\n\n// Event: Add a Task\n\n// Event: Remove a Task\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createModal\": () => (/* binding */ createModal)\n/* harmony export */ });\nconst content = document.getElementById('content');\nconst modal = document.createElement('div');\nconst modalContent = document.createElement('div');\nconst closeBtn = document.createElement('span');\n\nconst modalHeaderDiv = document.createElement('div');\nconst modalHeader = document.createElement('h2');\nconst modalBodyDiv = document.createElement('div');\nconst modalForm = document.createElement('form');\n\nconst inputTitle = document.createElement('input');\nconst inputDate = document.createElement('input');\nconst inputPriority = document.createElement('select');\nconst inputProject = document.createElement('select');\n\nconst formDiv1 = document.createElement('div');\nconst formDiv2 = document.createElement('div');\n\nconst modalInputs = document.createElement('div');\n\nconst labelTitle = document.createElement('label');\nconst labelDate = document.createElement('label');\nconst labelPriority = document.createElement('label');\nconst labelProject = document.createElement('label');\n\nconst titleDiv = document.createElement('div');\nconst dateDiv = document.createElement('div');\nconst priorityDiv = document.createElement('div');\nconst projectDiv = document.createElement('div');\n\nconst optionHigh = document.createElement('option');\nconst optionMed = document.createElement('option');\nconst optionLow = document.createElement('option');\n\nconst formDiv3 = document.createElement('div');\nconst addBtn = document.createElement('button');\nconst cancelBtn = document.createElement('button');\n\n\nconst createModal = function() {\n    closeBtn.innerHTML = \"&times;\";\n    modalHeader.innerText = 'Add New Task';\n    addBtn.innerText = 'Add Task';\n    cancelBtn.innerText = \"Cancel\";\n    labelTitle.innerText = \"Title:\";\n    labelDate.innerText = \"Date:\";\n    labelPriority.innerText = \"Priority:\";\n    labelProject.innerText = \"Project:\"\n    optionHigh.innerText = \"High\";\n    optionMed.innerText = \"Medium\";\n    optionLow.innerText = \"Low\";\n\n    inputPriority.setAttribute('name', 'priority');\n    optionHigh.setAttribute('value', 'high');\n    optionMed.setAttribute('value', 'medium');\n    optionLow.setAttribute('value', 'low');\n\n    //inputTitle.setAttribute('required', '');\n    \n    inputTitle.setAttribute('name', 'title');\n    inputDate.setAttribute('name', 'date');\n    inputPriority.setAttribute('name', 'priority');\n    inputProject.setAttribute('name', 'project');\n\n    labelTitle.setAttribute('for', 'title1');\n    labelDate.setAttribute('for', 'date');\n    labelPriority.setAttribute('for', 'priority');\n    labelProject.setAttribute('for', 'project');\n\n    modal.classList.add('modal');\n    modalContent.classList.add('modal-content');\n    modalHeaderDiv.classList.add('modal-header-div');\n    closeBtn.classList.add('close-btn');\n    modalBodyDiv.classList.add('modal-body-div');\n    modalForm.classList.add('modal-form');\n    modalInputs.classList.add('modal-inputs');\n    formDiv1.classList.add('form-div-1');\n    formDiv2.classList.add('form-div-2');\n\n\n    titleDiv.classList.add('input-div');\n    dateDiv.classList.add('input-div');\n    priorityDiv.classList.add('input-div');\n    projectDiv.classList.add('input-div');\n\n    inputTitle.classList.add('input-element');\n    inputTitle.classList.add('form-title');\n    inputDate.classList.add('input-element');\n    inputDate.classList.add('form-date');\n    inputPriority.classList.add('input-element');\n    inputPriority.classList.add('form-priority');\n    inputProject.classList.add('input-element');\n    inputProject.classList.add('form-project');\n    \n\n    formDiv3.classList.add('form-div-3');\n    addBtn.classList.add('add-btn');\n    cancelBtn.classList.add('cancel-btn');\n    \n    modalHeaderDiv.appendChild(modalHeader);\n    modalHeaderDiv.appendChild(closeBtn);\n    modalContent.appendChild(modalHeaderDiv);\n\n    titleDiv.appendChild(labelTitle);\n    titleDiv.appendChild(inputTitle);\n\n    dateDiv.appendChild(labelDate);\n    dateDiv.appendChild(inputDate);\n\n    priorityDiv.appendChild(labelPriority);\n    priorityDiv.appendChild(inputPriority);\n    inputPriority.appendChild(optionHigh);\n    inputPriority.appendChild(optionMed);\n    inputPriority.appendChild(optionLow);\n\n\n    projectDiv.appendChild(labelProject);\n    projectDiv.appendChild(inputProject);\n\n    formDiv1.appendChild(titleDiv);\n    formDiv2.appendChild(dateDiv);\n    formDiv1.appendChild(priorityDiv);\n    formDiv2.appendChild(projectDiv);\n    formDiv3.appendChild(cancelBtn);\n    formDiv3.appendChild(addBtn);\n\n    modalInputs.appendChild(formDiv1);\n    modalInputs.appendChild(formDiv2);\n    modalForm.appendChild(modalInputs);\n    modalForm.appendChild(formDiv3);\n    modalBodyDiv.appendChild(modalForm);\n\n    modalContent.appendChild(modalBodyDiv);\n    modal.appendChild(modalContent);\n    content.appendChild(modal);\n}\n\n\n\n\n\n\n\n// function addObject(title, date, priority, project) {\n//    const taskObj =  {\n//        name: this.title,\n//     }\n\n//     console.log(taskObj.name);\n\n   \n\n//     return {taskObj}\n// }\n\n//const myTask = addObject('Dishes', '1/1/2022', 'Do the dishes', 'High', 'Chores');\n\n//console.log(myTask.taskObj);\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modal.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToday\": () => (/* binding */ createToday)\n/* harmony export */ });\nfunction createToday() {\n    const contentTitle = document.getElementById('content-title');\n    const content = document.getElementById('content');\n    const todayDiv = document.createElement('div');\n    const title = document.createElement('h2');\n\n    title.innerText = \"Today\";\n\n    title.classList.add('title');\n    todayDiv.classList.add('today-div');\n\n    todayDiv.appendChild(title);\n    contentTitle.appendChild(todayDiv);\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/today.js?");

/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createWeek\": () => (/* binding */ createWeek)\n/* harmony export */ });\nconst contentTitle = document.getElementById('content-title');\nconst content = document.getElementById('content');\nconst weekDiv = document.createElement('div');\nconst title = document.createElement('h2');\n\nfunction createWeek() {\n    title.innerText = \"Week\";\n\n    title.classList.add('title');\n    weekDiv.classList.add('week-div');\n\n    weekDiv.appendChild(title);\n    contentTitle.appendChild(weekDiv);\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/week.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;