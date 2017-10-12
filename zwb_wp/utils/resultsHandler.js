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
var addResult = function (rusultsArray, commandStr, resultStr, timestamp, typeValue) {
  //console.log(usedCommandsArray);
  if (typeof (rusultsArray) == "undefined")
    rusultsArray = new Array;


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

var getTypeValue = function (commandStr) {
  var typeValue = "";


  if (commandStr.match("^10[1 - 9].*|^20[1 - 2].*"))
    typeValue = 'alarm';
  else if (commandStr.match("^402.*"))
    typeValue = '402';
  else if (commandStr.match("^602.*"))
    typeValue = '602';
  else
    typeValue = 'else';
  return typeValue;
}
var cutAlarm = function (alarmStr) {
  var jsonArray = [];
  alarmStr = alarmStr.replace(/^序号.*基站名称\n/, "");
  alarmStr = alarmStr.replace(/\n\n【.*】/, "");
  alarmStr = alarmStr.split("\n");
  
  for (var i=0; i < alarmStr.length;i++){
    alarmStr[i] = alarmStr[i].split("|");

  }
  //console.log(alarmStr);
  
  return alarmStr;

}

module.exports = {
  addResult: addResult,
  getResultsArray: getResultsArray,
  storeResultsArray: storeResultsArray,
  getReverse: getReverse,
  getTypeValue: getTypeValue,
  cutAlarm: cutAlarm,
}