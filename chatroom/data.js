var jsonData = require('./record.json');

module.exports = {
  writeJSON: function(newData) {
    //node.js 的檔案系統，能夠幫助存取、讀取檔案
    var fs = require('fs');
    fs.readFile('./record.json', function (err, originalData) {
      if (err) {
        return console.error(err);
      }
      var user = originalData.toString();
      user = JSON.parse(user);
      user.originalData.push(newData);
      user.total = user.originalData.length;

      var str = JSON.stringify(user);
      fs.writeFile('./record.json', str, function (err) {
        if (err) {
          console.error(err);
        }
      })
    })
  },
  readJSON: function() {
    delete require.cache[require.resolve('./record.json')]
    jsonData = require('./record.json');
    return jsonData.originalData
  }
}