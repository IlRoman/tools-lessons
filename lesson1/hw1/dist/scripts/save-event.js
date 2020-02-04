import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { arrOfEvents, savetoLocalStorage } from './storage.js';
import { renderEvents } from './slots-logic.js';
import { activeEventOnclick } from './edit-event.js';
import { renderDates } from './navigation.js';
import { calendarRendering } from './calendar-visualization.js';
import { validate } from './validate.js';
var popupForm = document.querySelector('.popup__form');
export var saveButton = document.querySelector('.submit-button');
export function saveEvent() {
  event.preventDefault();

  var formData = _toConsumableArray(new FormData(popupForm));

  var name = formData[0][1];
  var color = formData[1][1];
  var startDate = "".concat(formData[2][1], "T").concat(formData[3][1]);
  var endDate = "".concat(formData[5][1], "T").concat(formData[4][1]);
  var description = formData[6][1];

  if (validate(new Date(startDate), new Date(endDate)) == false) {
    return;
  }

  var newEvent = {
    id: Math.random() * 1000,
    name: name,
    color: color,
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    description: description
  };

  if (!isNaN(newEvent.startDate.getTime()) && !isNaN(newEvent.endDate.getTime())) {
    arrOfEvents.push(newEvent);
  }

  savetoLocalStorage();
  renderEvents(arrOfEvents);
  var popup = document.querySelector(".popup");
  popup.classList.remove('popup-switch');
  renderDates();
  activeEventOnclick();
  calendarRendering();
}
saveButton.addEventListener('click', saveEvent);