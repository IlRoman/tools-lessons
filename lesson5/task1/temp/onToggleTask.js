// import { tasksList } from './onStorageChange.js';
import { renderListItems } from './renderListItems.js';
import { updateNewTask, getTasksList } from './tasksGetWay.js';
const todoListElem = document.querySelector('.list');
export const onToggleTask = element => {
  const Checkbox = element.target.classList.contains('list__item-checkbox');

  if (!Checkbox) {
    return;
  }

  let tasksList = localStorage.getItem('tasksList') ? JSON.parse(localStorage.getItem('tasksList')) : [];
  const taskId = tasksList.find(x => x._id == element.target.closest('.list__item').dataset.id);
  const upDatedTask = {
    text: taskId.text,
    date: taskId.date,
    done: taskId.done ? false : true
  };
  updateNewTask(taskId._id, upDatedTask).then(() => getTasksList()).then(tasks => {
    localStorage.setItem('tasksList', JSON.stringify(tasks));
    renderListItems(tasks);
  });
};
todoListElem.addEventListener('click', onToggleTask);