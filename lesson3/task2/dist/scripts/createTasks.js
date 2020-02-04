import { renderListItems } from './renderListItems.js';
import { createNewTask, getTasksList } from './tasksGetWay.js';
let createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', createTask);
export function createTask() {
  let task_input = document.querySelector('.task-input');
  const newTask = {
    text: task_input.value,
    done: false,
    id: Math.trunc(Math.random() * 1000),
    date: new Date()
  };
  createNewTask(newTask).then(() => getTasksList()).then(tasks => {
    localStorage.setItem('tasksList', JSON.stringify(tasks));
    renderListItems(tasks);
  });
}