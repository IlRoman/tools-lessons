import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
export var generateNumbersRange = function generateNumbersRange(from, to) {
  var result = [];

  for (var i = from; i <= to; i++) {
    result.push(i);
  }

  ;
  return result;
};
var tableTimesElem = document.querySelector('.timing');
export var getTimesBlocks = function getTimesBlocks() {
  var result = [];
  generateNumbersRange(1, 23).map(function (blockNumber) {
    var setTime = '';
    blockNumber < 10 ? setTime = "0".concat(blockNumber) : setTime = blockNumber;
    result.push("<div \n                    class=\"timing__blocks\" \n                    data-block-number='".concat(blockNumber, "'\n                    ><span class=\"clock\">").concat(setTime, ":00</span></div>"));
  });
  return result.join('');
};

var renderTableTimes = function renderTableTimes() {
  return tableTimesElem.innerHTML = getTimesBlocks();
};

renderTableTimes();