class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} move at a speed of ${speed} kmh`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runningspeed) {
    super(name, age);
    this.runningspeed = runningspeed;
  }

  run() {
    console.log(`The ${this.name} can run`);
    super.move(this.runningspeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimmingspeed) {
    super(name, age);
    this.swimmingspeed = swimmingspeed;
  }
  swim() {
    console.log(`The ${this.name} can swim`);
    super.move(this.swimmingspeed);
  }
}
class Hawk extends Animal {
  constructor(name, age, flyingspeed) {
    super(name, age);
    this.flyingspeed = flyingspeed;
  }
  fly() {
    console.log(`The ${this.name} can fly`);
    super.move(this.flyingspeed);
  }
}

const rabbit = new Rabbit('rabbit', 8, 22.4);
const fish = new Fish('fish', 2, 12.4);
const hawk = new Hawk('hawk', 81, 52.4);

// console.log(rabbit.name);
// console.log(fish.age);
// console.log(hawk.flyingspeed);

rabbit.run();
fish.swim();
hawk.fly();
