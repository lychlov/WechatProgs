var getResultsArray = function () {
  var value = wx.getStorageSync("results");

  if (value) {
    //console.log(value);
    return value;
  } else
    return [{}];
};
var getReverse = function (rusultsArray) {
  var temp = rusultsArray.slice(0);
  return temp.reverse();
}
var addResult = function (rusultsArray, commandStr, resultStr, timestamp) {
  //console.log(usedCommandsArray);
  var typeValue = "";
  if (typeof (rusultsArray) == "undefined")
    rusultsArray = new Array();
  if (rusultsArray.length >= 30)
    rusultsArray.splice(0, 1);
  if (commandStr.match("^10[1 - 9].*|^20[1 - 2].*"))
    typeValue = 'alarm';
  else if (commandStr.match("^402.*"))
    typeValue = '402';
  else if (commandStr.match("^602.*"))
    typeValue = '602';
  else
    typeValue = 'else';


  rusultsArray.push({ timestamp: timestamp, command: commandStr, result: resultStr, typeValue: typeValue });
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
  storeResultsArray: storeResultsArray,
  getReverse: getReverse
}