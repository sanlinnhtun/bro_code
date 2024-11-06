//!setting and getting in javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === 'string' && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error('First name must be a non-epmty string');
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === 'string' && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error('Last name must be a non-epmty string');
    }
  }

  set age(newAge) {
    if (typeof newAge === 'number' && newAge > 0) {
      this._age = newAge;
    } else {
      console.error('Age must be a greather than 0');
    }
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }

  get fullName() {
    return this._firstName + ' ' + this.lastName;
  }
}

const person = new Person('Bro', 'Code', 21);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);

//!Destructure

const person1 = {
  firstName: 'David',
  lastName: 'Hlaing',
  age: 22,
  job: 'Fry cook',
};

const person2 = {
  firstName: 'Jhon',
  lastName: 'Whick',
  age: 22,
};

// const { firstName, lastName, age, job } = person1;
const { firstName, lastName, age, job = 'Soilder' } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

function personInfo({ firstName, lastName, age }) {
  console.log(`First name: ${firstName}`);
  console.log(`Last name: ${lastName}`);
  console.log(`Full name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

personInfo(person2);

const numbers = [10, 2, 3, 4, 5, 6, 7, 8, 9, 1];

numbers.sort((a, b) => b - a);

console.log(numbers);

const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}

shuffle(cards);

console.log(cards);

//!Closure

function createCounter() {
  let count = 0;

  function increamentCount() {
    count++;
    console.log(`Increament counter number is ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increamentCount, getCount };
}

const counter = createCounter();

counter.increamentCount();
counter.increamentCount();
counter.increamentCount();
counter.increamentCount();
counter.increamentCount();
counter.increamentCount();

console.log(`The current count is ${counter.getCount()}`);

function createGame() {
  let score = 0;

  function increateFun(points) {
    score += points;
    console.log(`The score +${score} pst`);
  }

  function decreateFun(points) {
    score -= points;
    console.log(`The score -${score} pst`);
  }

  function getPoint() {
    return score;
  }

  return { increateFun, decreateFun, getPoint };
}

const game = createGame();

game.increateFun(10);
game.decreateFun(6);
// game.increateFun();

console.log(`The final score is ${game.getPoint()}`);
