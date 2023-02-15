function setTime() {
  let newYork = moment.tz("America/New_York");
  let london = moment.tz("Europe/London");
  let tokyo = moment.tz("Asia/Tokyo");
  let sydney = moment.tz("Australia/Sydney");

  // set the current time for each city
  document.getElementById("newyork").innerHTML = newYork.format("h:mm:ss A");
  document.getElementById("london").innerHTML = london.format("h:mm:ss A");
  document.getElementById("tokyo").innerHTML = tokyo.format("h:mm:ss A");
  document.getElementById("sydney").innerHTML = sydney.format("h:mm:ss A");
}

// call the setTime function when the page loads
setTime();

// update the time every second
setInterval(setTime, 1000);
