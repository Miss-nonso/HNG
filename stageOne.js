const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

document.getElementById("currentDayOfTheWeek").innerHTML =
  daysOfTheWeek[new Date().getDay()];

const timeUpdate = () => {
  document.getElementById("currentUTCTime").innerHTML = new Date().getTime();
};

setInterval(timeUpdate, 1);
