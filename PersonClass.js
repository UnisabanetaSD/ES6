class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  saludar() {
    return `Hola ${this.name}`;
  }
}

const person = new Person("Laura", 20, "Tester");
console.log(person.name);
console.log(person.saludar());
