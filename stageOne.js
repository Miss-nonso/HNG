const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

document.querySelector(".currentDayOfTheWeek").innerHTML =
  daysOfTheWeek[new Date().getDay()];

const timeUpdate = () => {
  document.querySelector(".currentUTCTime").innerHTML = new Date().getTime();
};

setInterval(timeUpdate, 1);
