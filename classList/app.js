let buttons = document.querySelectorAll('.myBtns');
console.log(buttons);

// buttons.forEach((button) => {
//   button.style.backgroundColor = 'tomato';
//   button.textContent += '😇';
// });

buttons.forEach((button) => {
  button.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'tomato';
  });
});
buttons.forEach((button) => {
  button.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'hsl(200, 100%, 60%)';
  });
});
