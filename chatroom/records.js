const {EventEmitter} = require("events");
const jsonData = require('./data.js');

let instance;
let data = [];
let MAX = 50;

// 自訂一個觸發事件
class Records extends EventEmitter {
  constructor () {
    super();
  }

  push (msg) {
    data.push(msg);
    jsonData.writeJSON(msg);

    if (data.length > MAX) {
      data.splice(0, 1);
    }

    this.emit("new_message", msg);
  }

  get () {
    return jsonData.readJSON();
  }

  getMax () {
    return MAX;
  }
}

module.exports = (function () {
  if (!instance) {
    instance = new Records();
  }

  return instance;
})();