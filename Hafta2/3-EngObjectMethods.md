# Object methods:

represent the functions or behaviors associated with an object. These methods are used to perform operations you want on an object. Here are some examples of commonly used object methods in a programming language like JavaScript:

## toString():

Used to represent an object as a string. It returns the string representation of the object.

```javascript
let myObj = {
  name: "John",
  age: 30,
};

console.log(myObj.toString()); // "[object Object]"
```

## valueOf():

Used to return the primitive value of an object. It often works with numbers.

```javascript
let numObj = new Number(42);
console.log(numObj.valueOf()); // 42
```

## hasOwnProperty():

Checks whether an object has a specific property.

```javascript
let person = {
  name: "Alice",
  age: 25,
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false
```

## Object.keys():

Returns an array containing the properties of an object.

```javascript
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

let keys = Object.keys(car);
console.log(keys); // ["brand", "model", "year"]
```

## Object.values():

Returns an array containing the values of the properties of an object.

```javascript
let fruit = {
  name: "Apple",
  color: "Red",
  taste: "Sweet",
};

let values = Object.values(fruit);
console.log(values); // ["Apple", "Red", "Sweet"]
```

## Object.entries():

Returns an array containing the properties and values of an object.

```javascript
let person = {
  name: "Bob",
  age: 35,
  job: "Engineer",
};

let entries = Object.entries(person);

console.log(entries); // [["name", "Bob"], ["age", 35], ["job", "Engineer"]]
```

## Object.assign(target, ...sources):

Copies one or more sources into the target object. It is used to add multiple source objects to the target object.

```javascript
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { d: 5 };

const result = Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 3, c: 4, d: 5 }
```

In this example, Object.assign copies the properties from source1 and source2 into the target object. The result is that the target object is modified to include the properties from the sources, and the modified target object is printed to the console.`

## Object.create(proto, propertiesObject):

Creates a new object based on a specific prototype object (proto) and optionally takes a second argument, propertiesObject, to add new properties.

```javascript
const person = {
  name: "John",
  age: 30,
};

const newPerson = Object.create(person, {
  job: {
    value: "Developer",
  },
});

console.log(newPerson.name); // "John"
console.log(newPerson.job); // "Developer"
```

In this example, Object.create creates a new object, newPerson, based on the person prototype object. It also adds a new property, job, to the newPerson object.

## Object.freeze(obj):

Makes an object immutable, meaning its properties can no longer be modified.

```javascript
const person = {
  name: "John",
  age: 30,
};

Object.freeze(person);
person.age = 31; // This has no effect; 'age' remains 30
```

In this example, Object.freeze is used to make the person object immutable. Any attempts to change its properties will have no effect.

## Object.seal(obj):

Seals an object, meaning new properties cannot be added, but existing properties can still be modified.

```javascript
const person = {
  name: "John",
  age: 30,
};

Object.seal(person);
person.age = 31; // This works, 'age' can be updated
person.job = "Developer"; // This has no effect; new properties cannot be added
```

In this example, Object.seal is used to seal the person object, preventing the addition of new properties while allowing the modification of existing ones.

## Object.is(obj1, obj2):

Compares whether two objects are the same.

```javascript
const obj1 = { name: "John" };
const obj2 = { name: "John" };

console.log(Object.is(obj1, obj2)); // false`
```

In this example, Object.is is used to compare obj1 and obj2. Even though the objects have the same properties, they are not considered the same, and the result is false.

These are examples of some common object methods used in JavaScript. Every programming language has its own object methods and functions that are useful for processing and managing objects.
