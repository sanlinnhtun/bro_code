//!counter program

// let count = 0;

// document.getElementById('decrease').onclick = function () {
//   count--;
//   document.getElementById('H1').textContent = `${count}`;
// };

// document.getElementById('reset').onclick = function () {
//   count = 0;
//   document.getElementById('H1').textContent = `${count}`;
// };

// document.getElementById('increase').onclick = function () {
//   count++;
//   document.getElementById('H1').textContent = `${count}`;
// };

// let x = 2;
// let y = 3;
// let z = 8;
// let arr = [32, 42, 52, 1, 2, 9, 3];

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.sqrt(x);
// z = Math.pow(x, y);
// max = Math.max(x, z, y);
// min = Math.min(x, z, y);
// ramdom = Math.floor(Math.random() * 10);

// console.log(ramdom);

//!checked property

// const myCheckBox = document.getElementById('myCheckBox');
// const visaRadio = document.getElementById('visaRadio');
// const masterRadio = document.getElementById('masterRadio');
// const paypalRadio = document.getElementById('paypalRadio');
// const subResult = document.getElementById('subResult');
// const paymentResult = document.getElementById('paymentResult');
// const myBtn = document.getElementById('myBtn');

// myBtn.addEventListener('click', () => {
//   if (myCheckBox.checked) {
//     subResult.textContent = `You are subscribed!`;
//   } else {
//     subResult.textContent = `You are NOT subscribed!`;
//   }

//   if (visaRadio.checked) {
//     paymentResult.textContent = `You are paying with VISA`;
//   } else if (masterRadio.checked) {
//     paymentResult.textContent = `You are paying with MASTER CARD`;
//   } else if (paypalRadio.checked) {
//     paymentResult.textContent = `You are paying with MASTER CARD`;
//   } else {
//     paymentResult.textContent = `You MUST select a payment type`;
//   }
// });

// let userName = 'BroCode';

// let phoneNumber = '123-456-789';
// console.log(userName.charAt(3));
// console.log(userName.indexOf('C'));
// console.log(userName.trim());
// console.log(userName.repeat(2));
// let result = userName.startsWith(' ');//.startWith is the same way
// console.log(userName.includes(' '));
// console.log(phoneNumber.replaceAll('-', '/'));
// console.log(userName.replace('B', 'b'));
// console.log(phoneNumber.padStart(15, '0'));
// console.log(phoneNumber.padEnd(15, '0'));
// console.log(userName.slice(4, 8));
// console.log(userName.indexOf(' '));

// if (result) {
//   console.log("You can't start with ' ' ");
// } else {
//   console.log(userName);
// }

//!Number guesing game

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + 1);
// console.log(answer);

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   guess = Number(prompt('Enter the guess number'));

//   if (isNaN(guess)) {
//     alert('Enter the valid number');
//   } else if (guess < minNum || guess > maxNum) {
//     alert('Enter the valid number between 1 - 100 ');
//   } else {
//     attempts++;
//     if (guess < answer) {
//       alert('Too low try again!');
//       running = false;
//     } else if (guess > answer) {
//       alert('too hight');
//       running = false;
//     } else {
//       alert(`CORRECT THE ANSWER, The answer was ${attempts}`);
//       running = false;
//     }
//   }

//   console.log(typeof guess, guess);
// running = false;
// }

// const arr = [1, 3, 4, 5];

// const arrM = [...arr, 5, 6, 7, 8];
// console.log(arrM);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);
console.log(squares);

function square(element) {
  return Math.pow(element, 2);
}

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = () => {
    console.log(`I'm drive ${this.make}`);
  };
}

const car1 = new Car('Ford', 'az12', '2024', 'red');
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1.drive());
