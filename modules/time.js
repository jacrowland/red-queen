exports.getTime = function() {
  //Initialize date
  var time = new Date();

  //Creates Time String
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds= time.getSeconds();

  //Creates 01, 02 etc. minutes format
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  //Creates Date, Time and DataTime String(s)
  var day = time.getDate();
  var month = time.getMonth() + 1;
  var year = time.getFullYear();

  var currentDate = day + "/" + month + "/" + year;
  var currentTime = hours + ":" + minutes;
  var dateTimeString = currentDate + " " + currentTime;

  return dateTimeString;
};
