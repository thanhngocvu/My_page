const toggle = document.querySelector(".toggle");
const nav = document.querySelector("ul");
const menu = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
console.log(nav);
toggle.addEventListener("click", function () {
  nav.classList.toggle("enable");
  toggle.classList.toggle("enable");
});
let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

function getTime() {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth();
  let d = date.getDay();
  let h = date.getHours();
  let mi = date.getMinutes();
  let s = date.getSeconds();
  year.innerHTML = y;
  month.innerHTML = m;
  day.innerHTML = d;
  hour.innerHTML = h;
  min.innerHTML = mi;
  sec.innerHTML = s;
}
setInterval(getTime, 1000);
