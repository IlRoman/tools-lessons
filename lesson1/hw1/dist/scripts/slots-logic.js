import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.split";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import { arrayOfDates } from './navigation.js';
import { arrOfEvents, getFromLocalStorage } from './storage.js';
var eventPlace = document.querySelectorAll('.day');
var eventDay = document.querySelectorAll('.day-number');
export function displayEvent(starttime, endTime, name, descriprion, id, color) {
  if (arrayOfDates[0].getMonth() === starttime.getMonth()) {
    var diff = (endTime - starttime) / 1000 / 60;

    for (var i = 0; i < 7; i++) {
      var timeParts = (starttime + '').split(' ')[4].split(':');

      if (eventDay[i].innerHTML == endTime.getDate()) {
        //create long event
        if (starttime.getDate() !== endTime.getDate()) {
          var activeEventShort = document.createElement('div');
          var activeEventLong = document.createElement('div');
          activeEventShort.classList.add('active_event');
          activeEventLong.classList.add('active_event');
          var marginTopOfShortEvent = +timeParts[0] * 60 + +timeParts[1];
          activeEventShort.style.marginTop = "".concat(marginTopOfShortEvent + 100, "px");
          activeEventShort.style.height = "".concat(1440 - marginTopOfShortEvent, "px");
          var heightOfLongEvent = endTime;
          activeEventLong.style.marginTop = '100px';
          activeEventLong.style.height = "".concat(1440 - (1440 - (endTime + '').split(' ')[4].split(':')[0] * 60 + +(endTime + '').split(' ')[4].split(':')[1]), "px");
          eventPlace[i - 1].append(activeEventShort);
          eventPlace[i].append(activeEventLong);
          activeEventLong.innerHTML += "".concat(name, "<br>");
          activeEventLong.innerHTML += "".concat((starttime + '').split(' ')[4], " - ").concat((endTime + '').split(' ')[4], "<br>");
          activeEventLong.innerHTML += "".concat(descriprion);
          activeEventShort.innerHTML += "".concat(name, "<br>");
          activeEventShort.innerHTML += "".concat((starttime + '').split(' ')[4], " - ").concat((endTime + '').split(' ')[4], "<br>");
          activeEventShort.innerHTML += "".concat(descriprion);
          activeEventShort.setAttribute('data-id', id);
          activeEventShort.style.backgroundColor = color;
          activeEventLong.setAttribute('data-id', id);
          activeEventLong.style.backgroundColor = color;
        } else {
          // create short event
          var margin = +timeParts[0] * 60 + +timeParts[1];
          var activeEvent = document.createElement('div');
          eventPlace[i].append(activeEvent);
          activeEvent.classList.add('active_event');
          activeEvent.style.height = "".concat(diff, "px");
          activeEvent.style.marginTop = "".concat(margin + 100, "px");
          activeEvent.innerHTML += "".concat(name, "<br>");
          activeEvent.innerHTML += "".concat((starttime + '').split(' ')[4], " - ").concat((endTime + '').split(' ')[4], "<br>");
          activeEvent.innerHTML += "".concat(descriprion);
          activeEvent.setAttribute('data-id', id);
          activeEvent.style.backgroundColor = color;
        }
      }
    }
  }
}
;
export function renderEvents() {
  getFromLocalStorage();

  for (var i = 0; i < arrOfEvents.length; i++) {
    if (_typeof(arrOfEvents[i].startDate) !== 'object') {
      arrOfEvents[i].startDate = new Date(arrOfEvents[i].startDate);
      arrOfEvents[i].endDate = new Date(arrOfEvents[i].endDate);
    }

    displayEvent(arrOfEvents[i].startDate, arrOfEvents[i].endDate, arrOfEvents[i].name, arrOfEvents[i].description, arrOfEvents[i].id, arrOfEvents[i].color);
  }

  ;
}
;