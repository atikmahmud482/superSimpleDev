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
