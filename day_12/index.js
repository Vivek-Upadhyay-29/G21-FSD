document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
 
    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
 
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.textContent = taskText;
            
            // Append the new task to the list (assuming there's a ul or ol element with an id 'taskList')
            document.getElementById('taskList').appendChild(li);
    
            // Display an alert box
            alert('Task added: ' + taskText);
        }
    }
    
            const editButton = document.createElement('button');
            editButton.className = 'btn btn-primary btn-sm mr-2';
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => {
                editTask(li);
            });
 
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });
 
            const buttonGroup = document.createElement('div');
            buttonGroup.appendChild(editButton);
            buttonGroup.appendChild(deleteButton);
 
            li.appendChild(buttonGroup);
            taskList.appendChild(li);
 
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
 
            taskInput.value = '';
        }
    }
 
    function editTask(taskItem) {
        const currentText = taskItem.firstChild.textContent;
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'form-control';
        inputField.value = currentText;
        taskItem.firstChild.replaceWith(inputField);
        inputField.focus();
 
        inputField.addEventListener('blur', () => {
            const newText = inputField.value.trim();
            if (newText !== '') {
                inputField.replaceWith(document.createTextNode(newText));
            } else {
                taskItem.remove();
            }
        });
 
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                inputField.blur();
            }
        });
    }
}); 