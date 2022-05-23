function displayDate() {
  let x = new Date();
  let y = document.getElementById("day");

  document.getElementById("hours").innerHTML = x.getHours();
  document.getElementById("min").innerHTML = x.getMinutes();
  document.getElementById("sec").innerHTML = x.getSeconds();
  document.getElementById("Date").innerHTML = x.getDate();
  document.getElementById("year").innerHTML = x.getFullYear();
  y = x.getDay();

  if (y == 0) {
    document.getElementById("day").innerHTML = "Sunday";
  } else if (y == 1) {
    document.getElementById("day").innerHTML = "Monday";
  } else if (y == 2) {
    document.getElementById("day").innerHTML = "Tuesday";
  } else if (y == 3) {
    document.getElementById("day").innerHTML = "wednesday";
  } else if (y == 4) {
    document.getElementById("day").innerHTML = "Thursday";
  } else if (y == 5) {
    document.getElementById("day").innerHTML = "Friday";
  } else if (y == 6) {
    document.getElementById("day").innerHTML = "Saturday";
  }
}

setInterval(() => {
  displayDate();
}, 500);
