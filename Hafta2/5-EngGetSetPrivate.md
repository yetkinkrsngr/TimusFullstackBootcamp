# "get" and "set":

> are special features used in object-oriented programming in a programming language to control the reading and assignment of property values.

1. get: "get" is used to read the value of a property. When this feature is defined on an object, it can perform specific operations and return a value when the property is accessed.

2. set: "set" is used to assign a value to a property. When this feature is defined on an object, it can perform specific operations and change the value of the property when a value is assigned.

These features are useful, especially when you want to control, validate, or perform custom operations when accessing or updating a property value. Here's an example of using "get" and "set" features in JavaScript:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Using "get" to get the full name
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  // Using "set" to update first and last names separately
  set fullName(newFullName) {
    const parts = newFullName.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const person1 = new Person("John", "Doe");

// Using "get" to get the full name
console.log(person1.fullName); // "John Doe"

// Using "set" to update the full name
person1.fullName = "Alice Johnson";

console.log(person1.firstName); // "Alice"
console.log(person1.lastName); // "Johnson"`
```

> In the example above, a "get" and "set" feature is defined for the "fullName" property in the "Person" class. "get" is used to read the property value, and "set" is used to perform specific operations when updating the property value.

# Private property :

> Private properties in JavaScript are properties that are not meant to be accessed or modified directly from outside the class where they are defined. They are typically used to encapsulate and protect internal state, making it inaccessible from external code. JavaScript doesn't have built-in support for private properties like some other languages, but you can achieve privacy using conventions and more recently through JavaScript features.

Private Fields (ES6 and Later): JavaScript now has an official way to define private fields using the # symbol. These fields are truly private and cannot be accessed from outside the class.

```javascript
class Person {
  #name; // Private field

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}
```

> Using the `#` syntax, properties are kept private and encapsulated within the class. This is the most secure way to define private properties in modern JavaScript.

> It's essential to note that support for private fields may not be available in older JavaScript environments or may require transpilers to be used in your codebase. However, it offers a robust solution for creating truly private properties in JavaScript.

# example:

```javascript
class SuperClass {
  #privateName;
  constructor(name1, name2) {
    this.#privateName = name1;
    this.publicName = name2;
  }

  getPrivateName() {
    return this.#privateName;
  }
  setPrivateName(name3) {
    this.#privateName = name3;
  }
}

let supero = new SuperClass("Ali", "Veli");
console.log(supero.getPrivateName()); // Ali
console.log(supero.publicName); // publicName is public

supero.setPrivateName("Ahmet");
console.log(supero.getPrivateName()); // Ahmet
```
