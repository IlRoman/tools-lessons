import "core-js/modules/es.array.find";
import "core-js/modules/es.array.index-of";
import "core-js/modules/es.array.splice";
import { arrOfEvents, savetoLocalStorage } from './storage.js';
import { renderDates } from './navigation.js';
export function deleteButtonOnclick(obj) {
  var deleteButton = document.querySelector('.delete-event');
  deleteButton.addEventListener('click', deleteEvent);

  function deleteEvent() {
    event.preventDefault();
    var deletedEvent = arrOfEvents.indexOf(arrOfEvents.find(function (x) {
      return obj.id == x.id;
    }));
    arrOfEvents.splice(deletedEvent, 1);
    savetoLocalStorage();
    var popup = document.querySelector(".popup");
    popup.classList.remove('popup-switch');
    renderDates();
  }
}