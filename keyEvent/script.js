const myBox = document.getElementById('myBox');
const moveMount = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', () => {
  myBox.textContent = '😣';
  myBox.style.backgroundColor = 'tomato';
});

document.addEventListener('keyup', () => {
  myBox.textContent = '😁';
  myBox.style.backgroundColor = 'lightblue';
});

document.addEventListener('keydown', (event) => {
  if (event.key.startsWith('Arrow')) {
    event.preventDefault();
    switch (event.key) {
      case 'ArrowUp':
        y -= moveMount;
        break;
      case 'ArrowDown':
        y += moveMount;
        break;
      case 'ArrowLeft':
        x -= moveMount;
        break;
      case 'ArrowRight':
        x += moveMount;
        break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
