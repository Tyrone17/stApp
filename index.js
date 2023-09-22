var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


var ts = new Date();
var dString = ts.toUTCString();
dString.slice(0,10);
var tTime = ts.getTime();


// your first API endpoint... 
app.get("/api/date", function (req, res) {
  // var tYear = ''+ts.getUTCFullYear(); //+ts.getMonth()+ts.getDay();
  // var tMonth = ts.getUTCMonth()+1;
  // var oMonth
  // if (tMonth <10){
  //   oMonth = '0'+tMonth;
  // }else{
  //   oMonth = tMonth;
  // }
  // var tDay = ts.getUTCDay();
  // var oDay
  // if(tDay<10){
  //   oDay = '0'+tDay;
  // }else{
  //   oDay = tDay;
  // }
  // var dString = tYear +"-"+oMonth+"-"+oDay;
  res.json({"utc":dString});
 
});

app.get("/api/time", function (req, res) {
  res.json({"unix":tTime});

});

app.get("/api/timestamp", function (req, res) {
  res.json({"unix":tTime, "utc":dString});

});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// var ts = new Date();
// var timesStamp = ts.toJSON('TIMESTAMP');
// // Ideal view of out:
// // {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

// // Get the canvas element to display the time stamp in:
// var doc = document.getElementById('demo');

// doc.textContent = timeStamp;
