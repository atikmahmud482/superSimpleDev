/* 🧪 JavaScript Lesson 8: Object-Oriented Programming (OOP)
✅ 1. What is OOP?
OOP is a coding style where objects (with properties + methods) model real-world things — like a user, a car, or a todo item. */

/* ✅ 2. Class & Constructor
A class is a blueprint. A constructor initializes new objects.  */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`👋 Hello, my name is ${this.name}.`);
  }
}

const atik = new Person("Atik", 25);
atik.greet(); // Hello, my name is Atik.

// ✅ 3. Adding Methods
// You can add multiple methods inside the class:
class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.multiply(4, 5)); // 20

// ✅ 4. Inheritance (Extending another class)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Tommy");
dog.speak(); // Tommy barks.

// ✅ 5. super() in constructor
class Vehicle {
  constructor(type) {
    this.type = type;
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type); // calls Vehicle constructor
    this.brand = brand;
  }

  info() {
    console.log(`${this.brand} is a ${this.type}`);
  }
}

const car = new Car("sedan", "Toyota");
car.info(); // Toyota is a sedan
