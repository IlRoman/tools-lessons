import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.includes";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import { calendarRendering } from './calendar-visualization.js';
import { arrOfEvents } from './storage.js';
import { renderEvents } from './slots-logic.js';
import { redLine } from './red-line.js';
import { activeEventOnclick } from './edit-event.js';
var dayNumbers = document.querySelectorAll('.day-number');
var dates = document.querySelector('.dates');
export var arrayOfDates = [];
export function createDates() {
  var currentDayOfWeek = new Date().getDay();

  for (var i = 0; i < 7; i++) {
    if (i < currentDayOfWeek) {
      var currentDate = new Date();
      var day = currentDate.getDate() - (i + 1);
      var previosDate = currentDate.setDate(day);
      arrayOfDates.unshift(new Date(previosDate));
    }

    if (currentDayOfWeek == i) {
      arrayOfDates.push(new Date());
    }

    if (i > currentDayOfWeek) {
      var _currentDate = new Date();

      var _day = _currentDate.getDate() + (i - _currentDate.getDay());

      var _previosDate = _currentDate.setDate(_day);

      arrayOfDates.push(new Date(_previosDate));
    }
  }
}
;
export function renderDates() {
  for (var i = 0; i < 7; i++) {
    var content = (arrayOfDates[i] + '').split(' ')[2];
    dayNumbers[i].innerHTML = content;

    if ((arrayOfDates[i] + '').split(' ')[2] === (new Date() + '').split(' ')[2]) {
      dayNumbers[i].classList.add('current-day');
    } else {
      dayNumbers[i].classList.remove('current-day');
    }
  }

  showCurrentMonthAndYear();
  var clear = document.querySelectorAll('.active_event');

  for (var _i = 0; _i < clear.length; _i++) {
    clear[_i].remove();
  }

  renderEvents(arrOfEvents);
  activeEventOnclick();
  redLine();
}
;
export function showCurrentMonthAndYear() {
  var arrOfMonth = [];
  var arrOfYears = [];
  var resultMonth = [];
  var resultYears = [];

  for (var i = 0; i < arrayOfDates.length; i++) {
    arrOfMonth.push((arrayOfDates[i] + '').split(' ')[1]);
    arrOfYears.push((arrayOfDates[i] + '').split(' ')[3]);
  }

  for (var _i2 = 0, _arrOfMonth = arrOfMonth; _i2 < _arrOfMonth.length; _i2++) {
    var str = _arrOfMonth[_i2];
    if (!resultMonth.includes(str)) resultMonth.push(str);
  }

  for (var _i3 = 0, _arrOfYears = arrOfYears; _i3 < _arrOfYears.length; _i3++) {
    var _str = _arrOfYears[_i3];
    if (!resultYears.includes(_str)) resultYears.push(_str);
  }

  if (resultYears.length == 1) {
    dates.innerHTML = "".concat(resultMonth[0], " ").concat(resultYears[0]);
  } else {
    dates.innerHTML = "".concat(resultMonth[0], " ").concat(resultYears[0], " - ").concat(resultMonth[1], " ").concat(resultYears[1]);
  }
}
;
createDates();
renderDates();
var arrow_button__next = document.querySelector('.arrow-button__next');
var arrow_button__prev = document.querySelector('.arrow-button__prev');
export function renderNextWeek() {
  for (var i = 0; i < 7; i++) {
    var nextDate = arrayOfDates[i].getDate() + 7;
    nextDate = new Date(arrayOfDates[i]).setDate(nextDate);
    arrayOfDates[i] = new Date(nextDate);
  }

  renderDates();
  calendarRendering();
  var redLineElement = document.querySelector('.redLine');
  if (redLineElement !== null) redLineElement.remove('div');
  redLine();
}
;
export function renderPreviousWeek() {
  for (var i = 0; i < 7; i++) {
    var nextDate = arrayOfDates[i].getDate() - 7;
    nextDate = new Date(arrayOfDates[i]).setDate(nextDate);
    arrayOfDates[i] = new Date(nextDate);
  }

  renderDates();
  calendarRendering();
  var redLineElement = document.querySelector('.redLine');
  if (redLineElement !== null) redLineElement.remove('div');
  redLine();
}
;
arrow_button__prev.addEventListener('click', renderPreviousWeek);
arrow_button__next.addEventListener('click', renderNextWeek);
var today_button = document.querySelector('.today-button');
export function today_button_function() {
  arrayOfDates = [];
  createDates();
  renderDates();
}
today_button.addEventListener('click', today_button_function);