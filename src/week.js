function createWeek() {
    const content = document.getElementById('content');
    const weekDiv = document.createElement('div');
    const title = document.createElement('h2');

    title.innerText = "Week";

    title.classList.add('title');
    weekDiv.classList.add('week-div');

    weekDiv.appendChild(title);
    content.appendChild(weekDiv);
}


export{createWeek};