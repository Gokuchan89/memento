function Brickset() {
}

Brickset.prototype.search = function(query) {
  var resultArray = [];
  var result = http().get("https://brickset.com/api/v3.asmx/getSets?apiKey=&userHash=&params={'query':'" + encodeURIComponent(query) + "'}");
  var rawxml = result.body;
  if (rawxml) {
    var xml = new XmlDocument(rawxml);
    xml.eachChild(function(lego) {
      var object = {};
      object["number"] = lego.valueWithPath("number");
      object["query"] = lego.valueWithPath("query");
      resultArray.push(object);
    });
  }
  return resultArray;
}

Brickset.prototype.getDetails = function(number) {
  var object = {};
  var result = http().get("https://brickset.com/api/v3.asmx/getSets?apiKey=&userHash=&params={'number':'" + encodeURIComponent(number) + "'}");
  var rawxml = result.body;
  if (rawxml) {
    var xml = new XmlDocument(rawxml);
    var imageBase = xml.valueWithPath("imageURL");
    var v;
    v = lego.valueWithPath("number");
    v = lego.valueWithPath("name");
    v = lego.valueWithPath("year");
    v = lego.valueWithPath("pieces");
    v = lego.valueWithPath("minifigs");
  }
  return object;
}
