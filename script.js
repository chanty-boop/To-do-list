document.addEventListener('DOMContentLoaded', (event) => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    loadTasks();

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const timestamp = new Date().toLocaleString();
            const tr = createTaskElement(taskText, timestamp, false);
            taskList.appendChild(tr);
            saveTask(taskText, timestamp, false, false);
            taskInput.value = '';
        }
    }

    function createTaskElement(taskText, timestamp, important) {
        const tr = document.createElement('tr');

        const importantTd = document.createElement('td');
        const importantLabel = document.createElement('span');
        importantLabel.classList.add('important-label');
        if (important) {
            importantLabel.classList.add('important');
            tr.style.backgroundColor = '#fff3cd';
        }
        importantLabel.innerHTML = `<span class="text">Important</span><i class="fas fa-exclamation"></i>`;
        importantLabel.addEventListener('click', function(event) {
            event.stopPropagation();
            important = !important;
            if (important) {
                importantLabel.classList.add('important');
                tr.style.backgroundColor = '#fff3cd';
            } else {
                importantLabel.classList.remove('important');
                tr.style.backgroundColor = '';
            }
            toggleTaskImportance(taskText);
        });
        importantTd.appendChild(importantLabel);

        const taskTd = document.createElement('td');
        taskTd.textContent = taskText;

        const timestampTd = document.createElement('td');
        timestampTd.textContent = timestamp;
        timestampTd.classList.add('timestamp');

        taskTd.addEventListener('click', function() {
            tr.classList.toggle('completed');
            toggleTaskCompletion(taskText);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();
            taskList.removeChild(tr);
            deleteTask(taskText);
        });

        const actionsTd = document.createElement('td');
        actionsTd.appendChild(deleteButton);

        tr.appendChild(importantTd);
        tr.appendChild(taskTd);
        tr.appendChild(timestampTd);
        tr.appendChild(actionsTd);

        return tr;
    }

    function saveTask(taskText, timestamp, completed, important) {
        let tasks = getTasks();
        tasks.push({ text: taskText, timestamp: timestamp, completed: completed, important: important });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function deleteTask(taskText) {
        let tasks = getTasks();
        tasks = tasks.filter(task => task.text !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function toggleTaskCompletion(taskText) {
        let tasks = getTasks();
        tasks = tasks.map(task => {
            if (task.text === taskText) {
                task.completed = !task.completed;
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function toggleTaskImportance(taskText) {
        let tasks = getTasks();
        tasks = tasks.map(task => {
            if (task.text === taskText) {
                task.important = !task.important;
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function getTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    function loadTasks() {
        const tasks = getTasks();
        tasks.forEach(task => {
            const tr = createTaskElement(task.text, task.timestamp, task.important);
            if (task.completed) {
                tr.classList.add('completed');
            }
            taskList.appendChild(tr);
        });
    }
});
