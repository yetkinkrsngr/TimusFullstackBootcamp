# JavaScript Switch-Case

> provides a switch statement that allows you to compare the value of an expression to multiple case values and execute code blocks based on the matched case. Here's the basic syntax of a switch statement:

```javascript
switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  // Add more cases as needed
  default:
  // Code to be executed if none of the cases match expression
}
```

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(`Today is ${dayName}`);
```

> In this example, the switch statement is used to determine the day of the week based on the value of the day variable. If day is equal to 3, it sets the dayName variable to "Wednesday." If day doesn't match any of the cases, it sets dayName to "Weekend" as the default case.

> Remember to use the break statement to exit the switch block after executing the code for a matched case. If you forget to include a break statement, the code will continue to execute for subsequent cases until it encounters a break or reaches the end of the switch block.
