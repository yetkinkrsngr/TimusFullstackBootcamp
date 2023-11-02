# Class :

> is a concept in object-oriented programming (OOP) that serves as a blueprint or template for an object. A class contains the properties (fields) and behaviors (methods) of an object. Some programming languages like JavaScript allow the direct use of the "class" keyword, while in other languages, class-like structures may be referred to with different terms (e.g., "class" in Python, "class" in Java, etc.).

# Subclass,

> on the other hand, is a version of a class that is derived from or inherits from another class. A subclass inherits the properties and behaviors of the superclass and can also add its own additional properties or behaviors.

Here's a basic example of creating a class and a subclass in JavaScript:

```javascript
// Definition of the base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Definition of the subclass
class Student extends Person {
  constructor(name, age, school) {
    super(name, age); // Call the constructor of the base class
    this.school = school;
  }

  introduceSchool() {
    console.log(
      `I am ${this.name} and I am ${this.age} years old. My school is ${this.school}.`
    );
  }
}

// Using the subclass
const student1 = new Student("Alice", 16, "High School");
student1.greet(); // Can call the base class method
student1.introduceSchool(); // Can call its own methods
```

> In the above example, the Person class represents the base class, while the Student class is a subclass derived from Person. The extends keyword indicates that the Student class inherits from the Person class. The super keyword is used to call the constructor of the base class.

> The subclass can use both the methods of the base class and its own methods, allowing for the extension or modification of the base class's behavior. This is used to implement the primary principle of object-oriented programming, "inheritance."
