const inputNum = document.getElementById('tem-num');
const frhTag = document.getElementById('to-f');
const ccTag = document.getElementById('to-c');
const submmitTag = document.getElementById('btn');
const resultTag = document.getElementById('result');

let temp;
submmitTag.onclick = function (e) {
  e.preventDefault();
  temp = Number(inputNum.value);
  if (frhTag.checked) {
    const f = (9 / 5) * temp + 32;
    alert(textNum);
    resultTag.textContent = `${ff}°F`;
  } else if (ccTag.checked) {
    const c = (5 / 9) * (temp - 32);
    const cc = c.toFixed(1);

    resultTag.textContent = `${cc}°C`;
  } else {
    resultTag.textContent = `Please slect the unit`;
  }
};

const dicNum = Math.floor(Math.random() * 100) + 1;

console.log(dicNum);
