import "core-js/modules/es.array.concat";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import { arrayOfDates } from './navigation.js';
export var visual = document.querySelector('.calendar-visualization');
export var calendarRendering = function calendarRendering() {
  visual.innerHTML = '';

  for (var i = 1; i <= 24; i++) {
    var day = document.createElement('div');
    day.setAttribute('data-time', "".concat(i < 10 ? 0 : '').concat(i, ":00"));
    day.classList.add('emptyRow');
    visual.append(day);

    for (var j = 1; j <= 7; j++) {
      var hour = document.createElement('div');
      var date = arrayOfDates[j - 1] + '';
      var dayNameofSlot = date.split(' ')[0];
      var dateOfSlot = date.split(' ')[2];
      hour.setAttribute('data-day', "".concat(dayNameofSlot));
      hour.setAttribute('data-date', "".concat(dateOfSlot));
      hour.setAttribute('data-number', "".concat(j - 1));
      hour.classList.add('emptyCell');
      day.append(hour);
    }
  } // localStorage.clear();

};
calendarRendering();