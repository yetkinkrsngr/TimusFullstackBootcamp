# reduce() in JavaScript

> The rest parameter helps make code more readable for operations that use the Math method.
> A function used to loop through an array and concatenate all elements or calculate a value. This function is useful for reducing array elements to a single value, such as the sum, average, maximum value, and more.

Here's a reduce() example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total); // Output: 15
```

# Rest parameter

> It is a feature in JavaScript used as the last parameter of a function. The rest parameter collects all additional parameters passed to a function as an array. This is particularly useful when you don't know in advance how many arguments the function will take. The rest parameter allows you to easily process these additional parameters within the function.

The rest parameter starts with three dots (...) followed by a name (usually ...rest or another name). Here's an example of a rest parameter:

```javascript
function sum(a, b, ...otherNumbers) {
  let totalValue = a + b;
  for (let number of otherNumbers) {
    totalValue += number;
  }
  return totalValue;
}

console.log(sum(1, 2)); // Output: 3
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

Now, let's see why using the rest parameter is more convenient by reading the following code.

```javascript
let a = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10];
let min = Math.min(...a);
let max = Math.max(...a);
console.log(min); // 0
console.log(max); // 10

let minn = a.reduce((acc, current) => {
  return Math.min(acc, current);
}, a[0]);

// Find the maximum value using reduce
let maxx = a.reduce((acc, current) => {
  return Math.max(acc, current);
}, a[0]);

console.log(minn); // 0
console.log(maxx); // 10
```

### In short, when summing all elements, the rest parameter is more useful in the methods below.

## Math methods

`Math.abs(x)`: Returns the absolute value of a given number. It returns a positive value for a negative number.

```javascript
Math.abs(-5); // 5
```

`Math.ceil(x)`: Rounds a given number up to the nearest integer.

```javascript
Math.ceil(4.2); // 5
```

`Math.floor(x)`: Rounds a given number down to the nearest integer.

```javascript
Math.floor(4.9); // 4
```

`Math.round(x)`: Rounds a given number to the nearest integer. Halfway points are rounded to the nearest even number.

```javascript
Math.round(4.5); // 5
Math.round(4.4); // 4
```

`Math.max(x1, x2, ..., xn)`: Returns the largest number among the given numbers.

```javascript
Math.max(2, 8, 5, 12, 3); // 12
```

`Math.min(x1, x2, ..., xn)`: Returns the smallest number among the given numbers.

```javascript
Math.min(2, 8, 5, 12, 3); // 2
```

`Math.pow(x, y)`: Raises x to the power of y.

```javascript
Math.pow(2, 3); // 8
```

`Math.sqrt(x)`: Returns the square root of a given number.

```javascript
Math.sqrt(16); // 4
```

`Math.sin(x)`: Returns the sine value of a given angle.

```javascript
Math.sin(Math.PI / 2); // 1 (the sine of π/2 is 1)
```

`Math.cos(x)`: Returns the cosine value of a given angle.

```javascript
Math.cos(Math.PI); // -1 (the cosine of π is -1)
```

`Math.tan(x)`: Returns the tangent value of a given angle.

```javascript
Math.tan(Math.PI / 4); // 1 (the tangent of π/4 is 1)
```

`Math.random()`: Generates a random decimal number between 0 and 1.

```javascript
Math.random(); // Example: 0.7428147525078078
```

`Math.log(x)`: Calculates the natural logarithm of a given number using 'e'.

```javascript
Math.log(Math.E); // 1 (the natural logarithm of 'e' is 1)
```
