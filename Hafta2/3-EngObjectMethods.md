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

These are examples of some common object methods used in JavaScript. Every programming language has its own object methods and functions that are useful for processing and managing objects.
