import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import { arrayOfDates } from './navigation.js';
var redLinePlace = document.querySelectorAll('.day');
export function redLine() {
  for (var i = 0; i < arrayOfDates.length; i++) {
    if ((arrayOfDates[i] + '').split(' ')[2] == (new Date() + '').split(' ')[2]) {
      var redLineContainer = document.createElement('div');
      redLineContainer.classList.add('redLine');
      redLinePlace[i].append(redLineContainer);
      var redLineRound = document.createElement('div');
      var redLineLine = document.createElement('div');
      redLineRound.classList.add('redLine-round');
      redLineLine.classList.add('redLine-line');
      redLineContainer.append(redLineRound);
      redLineContainer.append(redLineLine);
      var timeParts = (arrayOfDates[i] + '').split(' ')[4].split(':');
      var margin = +timeParts[0] * 60 + +timeParts[1];
      redLineContainer.style.marginTop = "".concat(margin + 100, "px");
    }
  }
}
;