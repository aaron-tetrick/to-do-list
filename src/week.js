const contentTitle = document.getElementById('content-title');
const content = document.getElementById('content');
const weekDiv = document.createElement('div');
const title = document.createElement('h2');

function createWeek() {
    title.innerText = "Week";

    title.classList.add('title');
    weekDiv.classList.add('week-div');

    weekDiv.appendChild(title);
    contentTitle.appendChild(weekDiv);
}


export{createWeek};