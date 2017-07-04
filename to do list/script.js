function addNewTask(){
	var task = document.getElementById('task').value
	var taskText = document.createTextNode(task)
	var newListPosition = document.createElement('li')
	newListPosition.appendChild(taskText);
	document.getElementById('list').appendChild(newListPosition)
}

document.getElementById('addNew').addEventListener('click', addNewTask);