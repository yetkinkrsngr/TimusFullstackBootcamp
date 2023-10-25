# Rest Parameter:

> Rest parameters are a special type of parameter in JavaScript used when defining functions.
> Rest parameters collect multiple arguments passed to a function into a single array. This is especially useful when dealing with an uncertain number of arguments.
> A rest parameter begins with three dots (...) followed by a name, specifying how to access the rest parameter within the array. Here's an example:

```javascript
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

In the example above, the sum function uses the rest parameter ...numbers to sum multiple numbers. No matter how many numbers are passed to the function, they will be collected in the numbers array, and a loop is used to calculate the sum.

Rest parameters are useful when you need to work with an uncertain number of arguments or when you need to capture the remaining arguments while processing previous ones.

## Spread Operator:

> The spread operator is used to copy or merge the elements of an object or an array into another object or array. The spread operator is denoted by three consecutive dots (...). Here are a few examples of how the spread operator is used in JavaScript:

```javascript
Copying Array Elements:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]
Merging Array Elements:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
Copying Object Properties:
const originalObject = { firstName: 'John', lastName: 'Doe' };
const copiedObject = { ...originalObject };
console.log(copiedObject); // { firstName: 'John', lastName: 'Doe' }
Merging Object Properties:
const object1 = { firstName: 'John' };
const object2 = { lastName: 'Doe' };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // { firstName: 'John', lastName: 'Doe' }
```

The spread operator is a handy tool for copying or merging data, making your code more readable and organized.

"..." may seem the same, but let's look at their differences.
The spread operator and the rest parameter (rest operator) may look similar, but they serve different purposes and work differently.

## Spread Operator (...):

> The spread operator is typically used to spread the elements of an array or object. Using this operator, you can extract elements from an array or object and use them individually.
> The spread operator is often used to create a new array or object or to add another array or object to an existing one.

Example Usage:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Creates a new array: [1, 2, 3, 4, 5]
Rest Parameter (...):
```

The rest parameter is used to capture function arguments. When used in a function definition, this parameter collects the remaining arguments into an array.
The rest parameter is used in function definitions, while the spread operator is used to create arrays or objects.
Example Usage:

```javascript
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
const result = sum(1, 2, 3, 4, 5); // result value: 15
```

In short, the spread operator is used to spread data and create new objects or arrays, while the rest parameter is used to gather and use function arguments within an array. Their functions are different, but both use the ... symbol.
