

//读取存储中的曾用指令
var readUsedCommands = function () {
  var value = wx.getStorageSync("usedCommands");
  if (value) {
    console.log(value);
    return value;
  } else
    return [{}];

}

var storeUsedCommands = function (usedCommandsArray) {
  wx.setStorage({
    key: "usedCommands",
    data: usedCommandsArray,
    success: function () {
      return true;
    }
  })
}

var addUsedCommmand = function (usedCommandsArray, commandStr) {
  console.log(usedCommandsArray);
  if (typeof (usedCommandsArray) == "undefined") {
    usedCommandsArray = new Array();
    console.log(typeof (usedCommandsArray));
  }
  if (usedCommandsArray.length >= 12)
    usedCommandsArray.splice(0, 1);
  usedCommandsArray.push({ timestamp: Date.now(), command: commandStr });
  console.log(usedCommandsArray);
  return usedCommandsArray;
};

var getUsedCommands = function (usedCommandsArray) {
  var temp = usedCommandsArray.slice(0);
  return temp.reverse();
}

module.exports = {
  getUsedCommands: getUsedCommands,
  addUsedCommmand: addUsedCommmand,
  storeUsedCommands: storeUsedCommands,
  readUsedCommands: readUsedCommands,

}