# Nesne metotları (Object methods):

> bir nesneye ait işlevleri veya davranışları temsil eder. Bu metotlar, bir nesnenin üzerinde çalışmasını istediğiniz işlemleri gerçekleştirmek için kullanılır. Aşağıda, JavaScript gibi bir programlama dilinde yaygın olarak kullanılan bazı nesne metotlarına örnekler verilmiştir:

## toString():

Bir nesneyi bir metin olarak temsil etmek için kullanılır. Nesnenin string gösterimini döner.

```javascript
let myObj = {
  name: "John",
  age: 30,
};

console.log(myObj.toString()); // "[object Object]"
```

## valueOf():

Bir nesnenin ilkel (primitive) değerini döndürmek için kullanılır. Genellikle sayılarla çalışır.

```javascript
let numObj = new Number(42);
console.log(numObj.valueOf()); // 42
```

## hasOwnProperty():

Bir nesnenin belirli bir özelliğe sahip olup olmadığını kontrol eder.

```javascript
let person = {
  name: "Alice",
  age: 25,
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false
```

## Object.keys():

Bir nesnenin özelliklerini içeren bir dizi döndürür.

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

Bir nesnenin özelliklerinin değerlerini içeren bir dizi döndürür.

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

Bir nesnenin özelliklerini ve değerlerini içeren bir dizi döndürür.

```javascript
let person = {
  name: "Bob",
  age: 35,
  job: "Engineer",
};

let entries = Object.entries(person);
console.log(entries); // [["name", "Bob"], ["age", 35], ["job", "Engineer"]]
```

Bu, JavaScript'te kullanılan bazı yaygın nesne metotlarına örneklerdir. Her programlama dilinin kendi nesne metotları ve işlevleri vardır, ve bunlar nesneleri işlemek ve yönetmek için kullanışlıdır.
