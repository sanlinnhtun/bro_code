const buttonTag = document.getElementById('btn');
const imageTag = document.getElementById('img');

buttonTag.addEventListener('click', () => {
  if (imageTag.style.visibility === 'hidden') {
    imageTag.style.visibility = 'visible';
    buttonTag.textContent = 'Hide';
  } else {
    imageTag.style.visibility = 'hidden';
    buttonTag.textContent = 'Show';
  }
});
