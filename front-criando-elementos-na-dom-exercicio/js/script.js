const containerNewTask = document.querySelector('.container-new-task');
const input = document.querySelector('input');
const button = document.querySelector('button');
const msgAlert = document.querySelector('.msg-alert');
const containerTasks = document.querySelector('.container-tasks');

button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (input.value === '') {
        msgAlert.textContent = 'Preencha a tarefa';
        input.style.border = '2px solid red';
        return;
    }

    const task = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');

    task.classList.add('task');
    containerTasks.appendChild(task);

    span.innerHTML = `${input.value}`;
    task.appendChild(span);

    img.src = "./assets/remove.svg"
    task.appendChild(img);

    img.addEventListener('click', (event) => {
        containerTasks.removeChild(task);
    });
});