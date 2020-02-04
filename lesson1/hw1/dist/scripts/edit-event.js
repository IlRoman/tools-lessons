import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.splice";
import "core-js/modules/es.function.name";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import { arrOfEvents, savetoLocalStorage } from './storage.js';
import { deleteButtonOnclick } from './delete-event.js';
import { renderDates } from './navigation.js';
export function activeEventOnclick() {
  var activeEvents = document.querySelectorAll('.active_event');

  for (var i = 0; i < activeEvents.length; i++) {
    activeEvents[i].addEventListener('click', function () {
      for (var j = 0; j < arrOfEvents.length; j++) {
        if (event.target.dataset.id == arrOfEvents[j].id) {
          displayCurrentEvent(arrOfEvents[j]);
          deleteButtonOnclick(arrOfEvents[j]); // edit event

          var editButton = document.querySelector('.submit-button ');
          editButton.addEventListener('click', editEvent.bind(editButton, arrOfEvents[j]));
        }
      }
    });
  }
}

function displayCurrentEvent(editedEvent) {
  var popup = document.querySelector(".popup");
  popup.classList.add('popup-switch');
  var name = document.querySelector('.input__name');
  var startDate = document.querySelector('.start-date');
  var startTime = document.querySelector('.start-time');
  var endTime = document.querySelector('.end-time');
  var endDate = document.querySelector('.end-date');
  var description = document.querySelector('.description-input '); // вносим title в popup

  name.value = editedEvent.name + ''; // вносим дату в popup (input type="date")

  var startMonth = editedEvent.startDate.getMonth() + 1 < 9 ? "0".concat(editedEvent.startDate.getMonth() + 1 + '') : "".concat(editedEvent.startDate.getMonth() + 1);
  var startYear = (editedEvent.startDate + '').split(' ')[3];
  var startDay = (editedEvent.startDate + '').split(' ')[2];
  startDate.value = "".concat(startYear, "-").concat(startMonth, "-").concat(startDay); // вносим время в popup

  startTime.value = (editedEvent.startDate + '').split(' ')[4].split(':').splice(0, 2).join(":");
  endTime.value = (editedEvent.endDate + '').split(' ')[4].split(':').splice(0, 2).join(':'); // вносим дату в popup (input type="date")

  var endMonth = editedEvent.endDate.getMonth() + 1 < 9 ? "0".concat(editedEvent.endDate.getMonth() + 1 + '') : "".concat(editedEvent.endDate.getMonth() + 1);
  var endYear = (editedEvent.endDate + '').split(' ')[3];
  var endDay = (editedEvent.endDate + '').split(' ')[2];
  endDate.value = "".concat(endYear, "-").concat(endMonth, "-").concat(endDay); // вносим description в popup

  description.value = editedEvent.description;
}

function editEvent(obj) {
  for (var i = 0; i < arrOfEvents.length; i++) {
    if (obj.id == arrOfEvents[i].id) {
      arrOfEvents.splice(i, 1);
      savetoLocalStorage();
      renderDates();
    }
  }

  var editButton = document.querySelector('.submit-button ');
  editButton.removeEventListener('click', editEvent);
  var popup = document.querySelector(".popup");
  popup.classList.remove('popup-switch');
}