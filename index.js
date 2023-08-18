const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('tasks');
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const newTask = await addTaskToServer(taskText);
        addTaskToList(newTask);
        taskInput.value = '';
    }
});
async function addTaskToServer(taskText) {
    // Simulating server request - Replace with actual API call
    return { id: Date.now(), text: taskText, completed: false };
}
function addTaskToList(task) {
    const taskElement = document.createElement('li');
    taskElement.className = `task ${task.completed ? 'completed' : ''}`;
    taskElement.innerHTML = `
  <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
  <span>${task.text}</span>
  <span class="delete-button">&#10006;</span>
 `;
    const checkbox = taskElement.querySelector('.task-checkbox');
    checkbox.addEventListener('change', async () => {
        await updateTaskStatusOnServer(task.id, checkbox.checked);
        taskElement.classList.toggle('completed', checkbox.checked);
    });
    const deleteButton = taskElement.querySelector('.delete-button');
    deleteButton.addEventListener('click', async () => {
        await deleteTaskFromServer(task.id);
        taskList.removeChild(taskElement);
    });
    taskList.appendChild(taskElement);
}

async function updateTaskStatusOnServer(taskId, completed) {

    // Simulating server request - Replace with actual API call

    console.log(`Updating task ${taskId} status to ${completed ? 'completed' : 'incomplete'}`);

}



async function deleteTaskFromServer(taskId) {

    // Simulating server request - Replace with actual API call

    console.log(`Deleting task ${taskId}`);

}

