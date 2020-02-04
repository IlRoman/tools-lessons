import { renderListItems } from './renderListItems.js';
export let tasksList = localStorage.getItem('tasksList') ? JSON.parse(localStorage.getItem('tasksList')) : [];
export function onStorageChange(event) {
  if (event.key == 'tasksList') {
    tasksList = localStorage.getItem('tasksList') ? JSON.parse(localStorage.getItem('tasksList')) : [];
    renderListItems(tasksList);
  }
}
window.addEventListener('storage', onStorageChange);
export const onDocumentLoaded = () => {
  renderListItems(tasksList);
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);