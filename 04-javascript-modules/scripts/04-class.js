export class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi(name) {
    console.info(`Hi ${name}, my name is ${this.name}`);
  }
}
