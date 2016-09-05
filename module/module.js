var fs = require('fs');

module.exports = (function () {

    var dbFilePath = './data/data.json';

    var getDataFromFile = function (path) {
      try {
        var result = fs.readFileSync(path, 'utf8');
        return JSON.parse(result);
      } catch(e) {           
        return [];
      }
    };
    
    var data = getDataFromFile(dbFilePath);
    
    var displayAll = function() {
      var result = [];      
      for (var i = 0; i < data.length; ++i) {
        result.push(data[i]);
      }        
      return result;      
    }; 

    var displayId = function(id){
      var result = [];      
      result.push(data[id]);
      return result;
    };

    

    return {
        displayAll: displayAll,        
        displayId: displayId
    };

})();
