import { deleteNewTask, getTasksList } from './tasksGetWay.js';
import { renderListItems } from './renderListItems.js';
const todoListElem = document.querySelector('.list');
export const deleteEvent = element => {
  const deleteButton = element.target.classList.contains('delete-btn');

  if (!deleteButton) {
    return;
  }

  let tasksList = localStorage.getItem('tasksList') ? JSON.parse(localStorage.getItem('tasksList')) : [];
  const taskId = tasksList.find(x => x._id == element.target.closest('.list__item').dataset.id);
  deleteNewTask(taskId._id).then(() => getTasksList()).then(tasks => {
    localStorage.setItem('tasksList', JSON.stringify(tasks));
    renderListItems(tasks);
  });
};
todoListElem.addEventListener('click', deleteEvent);