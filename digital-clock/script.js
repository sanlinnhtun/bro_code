const containerTag = document.getElementById('clock-con');
const clockTag = document.getElementById('clock');
let int = null;

function clockSetup() {
  const now = new Date();
  let hour = now.getHours();
  const meridiem = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  hour = hour.toString().padStart(2, 0);
  const minute = now.getMinutes().toString().padStart(2, 0);
  const second = now.getSeconds().toString().padStart(2, 0);
  const toString = `${hour} : ${minute} : ${second} ${meridiem}`;
  clockTag.textContent = toString;
}
setInterval(clockSetup, 1000);
clockSetup();
