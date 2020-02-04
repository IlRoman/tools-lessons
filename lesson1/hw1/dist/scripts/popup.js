import "core-js/modules/es.array.concat";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import { calendarRendering } from './calendar-visualization.js';
var startDate = document.querySelector('.start-date');
var startTime = document.querySelector('.start-time');
var endTime = document.querySelector('.end-time');
var endDate = document.querySelector('.end-date');

function dateToString(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  var day = date.getDate();
  day = day < 10 ? '0' + day : day;
  return "".concat(year, "-").concat(month, "-").concat(day);
}

;

function timeToString(date) {
  var hour = date.getHours();
  hour = hour < 10 ? '0' + hour : hour;
  var minute = date.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  return "".concat(hour, ":").concat(minute);
}

export var addButton = function addButton(event) {
  if (event.target.classList.value === 'emptyCell') {
    var popup = document.querySelector(".popup");
    popup.classList.add('popup-switch'); // вставляем время в попап

    startTime.value = event.target.closest('.emptyRow').dataset.time + '';
    endTime.value = event.target.closest('.emptyRow').dataset.time + ''; // вставляем дату в попап

    var month = document.querySelector('.dates').innerHTML.split(' ')[0];
    var startMonth = '02';
    var year = document.querySelector('.dates').innerHTML.split(' ')[1];
    var startYear = year;
    var startDay = event.target.dataset.date;
    startDate.value = "".concat(startYear, "-").concat(startMonth, "-").concat(startDay);
    endDate.value = "".concat(startYear, "-").concat(startMonth, "-").concat(startDay);
  } else {
    var _popup = document.querySelector(".popup");

    _popup.classList.add('popup-switch');

    startDate.value = dateToString(new Date());
    endDate.value = dateToString(new Date());
    startTime.value = timeToString(new Date());
    endTime.value = timeToString(new Date());
  }
};
var popupWindow = document.querySelector(".calendar-visualization");
var btnCreate = document.querySelector('.create-button');
popupWindow.addEventListener('click', addButton);
btnCreate.addEventListener('click', addButton);
var closeButton = document.querySelector('.close');

closeButton.onclick = function () {
  event.preventDefault();
  var popup = document.querySelector(".popup");
  popup.classList.remove('popup-switch');
  calendarRendering();
};