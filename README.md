# To-Do List Application

This is a simple and responsive To-Do List application built using HTML, CSS, and JavaScript, enhanced with Bootstrap 5 for responsiveness. It allows users to add, mark as important, mark as completed, and delete tasks. The application also saves tasks to local storage so that the list persists even after refreshing the page.

## Features

- **Add Tasks**: Add new tasks to the list.
- **Mark Important**: Mark tasks as important, which changes the label to an exclamation point and highlights the row.
- **Mark Completed**: Click on a task to mark it as completed, which applies a strikethrough style.
- **Delete Tasks**: Remove tasks from the list.
- **Local Storage**: Tasks are saved to local storage, ensuring persistence between sessions.
- **Responsive Design**: The application is responsive and works well on both desktop and mobile devices, thanks to Bootstrap 5.

## Project Structure
├── index.html
├── style.css
├── script.js
└── README.md


## Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-list.git


   cd todo-list



## Usage
Add a Task: Type a task into the input field and click the "Add" button. The task will appear in the list with a timestamp.
Mark as Important: Click the "Important" label next to a task to mark it as important. The label will change to an exclamation point, and the row will be highlighted in yellow.
Mark as Completed: Click on the task description to mark it as completed. The text will be struck through.
Delete a Task: Click the "Delete" button to remove the task from the list.


## Code Explanation
HTML
The HTML file (index.html) contains the structure of the application, including the input field, add button, and table for displaying tasks. Bootstrap 5 is included for styling and responsiveness.

CSS
The CSS file (style.css) is used to style the application, ensuring it is responsive and visually appealing. Key styles include:

.important-label for marking tasks as important.
.timestamp for styling the timestamp.
Responsive styles for different screen sizes are managed by Bootstrap 5.
JavaScript
The JavaScript file (script.js) contains the functionality of the application. Key functions include:

addTask(): Adds a new task to the list.
createTaskElement(taskText, timestamp, important): Creates a new task row with the provided text, timestamp, and important status.
saveTask(taskText, timestamp, completed, important): Saves tasks to local storage.
deleteTask(taskText): Deletes a task from local storage.
toggleTaskCompletion(taskText): Toggles the completed status of a task.
toggleTaskImportance(taskText): Toggles the important status of a task.
getTasks(): Retrieves tasks from local storage.
loadTasks(): Loads tasks from local storage on page load.