const passwordLength = 12;
const inCludlowerChar = true;
const inCludupperChar = true;
const inCludnumberChar = true;
const inCludsymbolChar = true;
const showpass = document.getElementById('showpass');

function passwordGenerateFun(
  length,
  inCludlowerChar,
  inCludupperChar,
  inCludnumberChar,
  inCludsymbolChar
) {
  const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
  const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChar = '1234567890';
  const symbolChar = '~!@#$%^&*()_+';

  let allowPass = '';
  let password = '';
  allowPass += inCludlowerChar ? lowerChar : '';
  allowPass += inCludupperChar ? upperChar : '';
  allowPass += inCludnumberChar ? numberChar : '';
  allowPass += inCludsymbolChar ? symbolChar : '';

  if (length <= 0) {
    return `(password length must be at least 1)`;
  } else if (allowPass.length === 0) {
    return `(At least 1 set of character need to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const ramdomIndex = Math.floor(Math.random() * allowPass.length);
    password += allowPass[ramdomIndex];
  }

  showpass.textContent = `Generated password is: ${password}`;

  return password;
}

const generatePass = passwordGenerateFun(
  passwordLength,
  inCludlowerChar,
  inCludupperChar,
  inCludnumberChar,
  inCludsymbolChar
);

console.log(`Generage password ${generatePass}`);
