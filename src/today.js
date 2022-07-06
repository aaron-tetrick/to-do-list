function createToday() {
    const content = document.getElementById('content');
    const todayDiv = document.createElement('div');
    const title = document.createElement('h2');

    title.innerText = "Today";

    title.classList.add('title');
    todayDiv.classList.add('today-div');

    todayDiv.appendChild(title);
    content.appendChild(todayDiv);
}


export{createToday};