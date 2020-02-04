import "core-js/modules/es.array.map";
import { arrOfEvents } from './storage.js';
export function validate(start, end) {
  if (!errorDate(start, end) || !duration(start, end) || !checkForUpdate(start) || !checkEvent()) return false;
}
var sixHourInMs = 21600000;
var fifteenMinInMs = 900000;
export var errorDate = function errorDate(start, end) {
  if (end < start) {
    alert('error');
    return false;
  }

  if (start - end > sixHourInMs) {
    alert('error');
    return false;
  }

  return true;
};
export var duration = function duration(start, end) {
  if (end.getHours() - start.getHours() > 6) {
    alert('You cannot create an event longer than 6 hours');
    return false;
  }

  if (start.getTime() - end.getTime() > sixHourInMs) {
    alert('You cannot create an event longer than 6 hours');
    return false;
  }

  return true;
};
export var checkForUpdate = function checkForUpdate(start) {
  var now = new Date(); // if (start - now < 0) return true;

  if (start - now.getTime() < fifteenMinInMs) {
    alert('you cannot delete/update event 15 minutes before the start');
    return false;
  }

  return true;
};
export var checkEvent = function checkEvent() {
  var inputName = document.querySelector('.input__name');
  var startDate = document.querySelector(".start-date");
  var startTime = document.querySelector('.start-time');
  var endDate = document.querySelector(".end-date");
  var endTime = document.querySelector('.end-time');
  var inputDescription = document.querySelector('.description-input');
  var newEventStart = new Date(startDate.value + 'T' + startTime.value);
  var newEventEnd = new Date(endDate.value + 'T' + endTime.value);
  var selectedId;

  for (var i = 0; i < arrOfEvents.length - 1; i++) {
    var eventStart = new Date(arrOfEvents[i].startDate);
    var eventEnd = new Date(arrOfEvents[i].endDate);

    if (startDate.value + 'T' + startTime.value == arrOfEvents[i].startDate) {
      if (arrOfEvents[i].id == selectedId) return true;
      alert('two events cannot intersect 1');
      return false;
    }

    ;

    if (newEventStart > eventStart && newEventStart < eventEnd) {
      if (arrOfEvents[i].id == selectedId) return true;
      alert('two events cannot intersect 2');
      return false;
    }

    ;
  }

  ;
  var closestBeginLeft;
  var closestBeginRight;
  var closestEndLeft;
  var closestEndRight;
  var beginEv = [];
  var endEv = [];
  var popupBegin = new Date(startDate.value + 'T' + startTime.value);
  var popupEnd = new Date(endDate.value + 'T' + endTime.value);
  var currentBegin;
  var currentEnd;
  arrOfEvents.map(function (arg) {
    beginEv.push(new Date(arg.startDate));
    endEv.push(new Date(arg.endDate));
  });

  var getClosestEvent = function getClosestEvent() {
    for (var _i = 0; _i < beginEv.length; _i++) {
      currentBegin = beginEv[_i];
      currentEnd = endEv[_i];

      if (currentBegin < popupBegin && (typeof closestBeginLeft === 'undefined' || closestBeginLeft < currentBegin)) {
        closestBeginLeft = currentBegin;
      } else if (currentBegin > popupBegin && (typeof closestBeginRight === 'undefined' || closestBeginRight > currentBegin)) {
        closestBeginRight = currentBegin;
      }

      ;

      if (currentEnd < popupEnd && (typeof closestEndLeft === 'undefined' || closestEndLeft < currentEnd)) {
        closestEndLeft = currentEnd;
      } else if (currentEnd > popupEnd && (typeof closestEndRight === 'undefined' || closestEndRight > currentEnd)) {
        closestEndRight = currentEnd;
      }
    }
  };

  getClosestEvent();

  if (popupBegin >= closestEndLeft && popupBegin <= closestBeginLeft) {
    alert('two events cannot intersect 3');
    return false;
  }

  ;

  if (popupEnd > closestBeginRight && popupEnd < closestEndRight) {
    alert('two events cannot intersect 4');
    return false;
  }

  ;
  return true;
};