const imgLink = './img/dice1.jpg';
const scoreTag = document.getElementById('score');
const btnTag = document.getElementById('btn');
const imgTagOne = document.getElementById('img1');
const imgTagTwo = document.getElementById('img2');
const CounterTag = document.getElementById('count');
const p1Score = document.getElementById('p1');
const p2Score = document.getElementById('p2');
const countContainerTag = document.getElementById('count-container');
const rollBtn = document.getElementById('roll-dic');

const min = 1;
const max = 6;
let count = 0;
let resultCheck1 = 0;
let resultCheck2 = 0;

btnTag.addEventListener('click', () => {
  let result1 = Math.floor(Math.random() * max) + min;
  let result2 = Math.floor(Math.random() * max) + min;
  count++;
  CounterTag.textContent = `Count: ${count}`;

  if (count > 5) {
    resultCheck1 = 0;
    resultCheck2 = 0;
    count = 0;
    imgTagOne.src = './img/dice1.jpg';
    imgTagTwo.src = './img/dice1.jpg';
    p1Score.textContent = `${resultCheck1} time`;
    p2Score.textContent = `${resultCheck2} time`;
    countContainerTag.innerHTML = '';
    rollBtn.innerHTML = '';
    CounterTag.textContent = `Count: ${count}`;
    const newDiv = document.createElement('button');
    newDiv.textContent = 'Refresh Me';
    newDiv.className = 'ref-btn';
    countContainerTag.appendChild(newDiv);
    newDiv.addEventListener('click', refresh);
  } else {
    imgTagOne.src = `./img/dice${result1}.jpg`;
    imgTagTwo.src = `./img/dice${result2}.jpg`;
    if (result1 > result2) {
      resultCheck1++;
      p1Score.textContent = `${resultCheck1} wins`;
    } else if (result1 < result2) {
      resultCheck2++;
      p2Score.textContent = `${resultCheck2} wins`;
    }

    if (count === 5) {
      if (resultCheck1 > resultCheck2) {
        scoreTag.textContent = 'Winner is Player One 🥇';
      } else if (resultCheck1 < resultCheck2) {
        scoreTag.textContent = 'Winner is Player Two 🥇';
      } else {
        scoreTag.textContent = "It's a Draw 🤝";
      }
    }
  }
});

function refresh() {
  count = 0;
  resultCheck1 = 0;
  resultCheck2 = 0;
  CounterTag.textContent = `Count: ${count}`;
  p1Score.textContent = `${resultCheck1} time`;
  p2Score.textContent = `${resultCheck2} time`;
  countContainerTag.innerHTML = '';
  countContainerTag.appendChild(CounterTag);
  rollBtn.appendChild(btnTag);
  scoreTag.textContent = 'Winner is...';
}
