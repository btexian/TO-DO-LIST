const form = document.querySelector('form');
const input = document.querySelector('input');
const taskList = document.querySelector('.task-list');

// Add task to the list
function addTask(e) {
	e.preventDefault();

	// Get input value
	const inputValue = input.value.trim();

	// If input is empty, return
	if (inputValue === '') return;

	// Create a new task element
	const task = document.createElement('li');
	task.className = 'task';
	task.innerHTML = `
		<span>${inputValue}</span>
		<button class="delete-btn">Delete</button>
	`;

	// Add the task to the list
	taskList.appendChild(task);

	// Clear the input
	input.value = '';
}

// Delete task from the list
function deleteTask(e) {
	if (e.target.classList.contains('delete-btn')) {
		e.target.parentElement.remove();
	}
}

// Event listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
