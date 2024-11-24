const btn = document.querySelectorAll('#myBtns');

btn.forEach((button) => {
  button.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('hover');
  });
});
btn.forEach((button) => {
  button.addEventListener('mouseout', (event) => {
    event.target.classList.toggle('hover');
  });
});

btn.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.classList.contains('disabled')) {
      event.target.textContent += '🥶';
    } else {
      event.target.classList.replace('hover', 'disabled');
    }
  });
});

//add()
//remove()
//toggle(Remove if present,add if  not)
//replade(oldClass, newClass)
//contains()
