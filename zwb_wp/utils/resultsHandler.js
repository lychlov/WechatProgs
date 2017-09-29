var getResultsArray = function () {
  var value = wx.getStorageSync("results");
  if (value) {
    //console.log(value);
    return value;
  } else
    return false;
};
var getReverse = function (rusultsArray) {
  var temp = rusultsArray.slice(0);
  return temp.reverse();
}
var addResult = function (rusultsArray, commandStr, resultStr,timestamp) {
  //console.log(usedCommandsArray);
  if (typeof (rusultsArray) == "undefined")
    rusultsArray = new Array();
  if (rusultsArray.length >= 30)
    rusultsArray.splice(0, 1);
  rusultsArray.push({ timestamp: timestamp, command: commandStr, result: resultStr });
  console.log(rusultsArray);
  return rusultsArray;
};

var storeResultsArray = function (rusultsArray) {
  wx.setStorage({
    key: "results",
    data: rusultsArray,
    success: function () {
      return true;
    }
  })
}

module.exports = {
  addResult: addResult,
  getResultsArray: getResultsArray,
  storeResultsArray:storeResultsArray,
getReverse: getReverse
}