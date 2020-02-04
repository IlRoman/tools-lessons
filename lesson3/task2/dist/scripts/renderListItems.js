import "core-js/modules/es.array.sort";
import "core-js/modules/web.dom-collections.iterator";
const listElem = document.querySelector('.list');
let task_input = document.querySelector('.task-input');
export const renderListItems = tasksList => {
  listElem.innerHTML = '';
  task_input.value = '';
  const listItemsElems = tasksList.sort((a, b) => b.date - a.date).sort((a, b) => a.done - b.done).map((_ref) => {
    let {
      text,
      done,
      _id
    } = _ref;
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

    if (done) {
      listItemElem.classList.add('list__item_done');
    }

    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    listItemElem.setAttribute('data-id', _id);
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    listItemElem.append(checkboxElem, text, deleteButton);
    return listItemElem;
  });
  listElem.append(...listItemsElems);
};