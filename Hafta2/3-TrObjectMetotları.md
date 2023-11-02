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

## Object.assign(target, ...sources):

Bir veya daha fazla kaynağı hedef nesneye (target) kopyalar. Birden fazla kaynak nesnesini hedef nesneye eklemek için kullanılır.

```javascript
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { d: 5 };

const result = Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 3, c: 4, d: 5 }
```

## Object.create(proto, propertiesObject):

Belirli bir prototip nesnesi (proto) üzerinden yeni bir nesne oluşturur ve isteğe bağlı olarak yeni özellikler eklemek için bir ikinci argüman olan propertiesObject alır.

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

## Object.freeze(obj):

Bir nesneyi değişmez (immutable) yapar, yani özellikleri artık değiştirilemez.

```javascript
const person = {
  name: "John",
  age: 30,
};

Object.freeze(person);
person.age = 31; // Bu işe yaramaz, age hala 30 olarak kalır`
```

## Object.seal(obj):

Bir nesneyi kilitler, yani yeni özellikler eklenemez, ancak mevcut özellikler değiştirilebilir.

```javascript
const person = {
  name: "John",
  age: 30,
};

Object.seal(person);
person.age = 31; // Bu çalışır, age güncellenebilir
person.job = "Developer"; // Bu işe yaramaz, yeni özellik eklenemez
```

## Object.is(obj1, obj2):

İki nesnenin aynı olup olmadığını karşılaştırır.

```javascript
const obj1 = { name: "John" };
const obj2 = { name: "John" };

console.log(Object.is(obj1, obj2)); // false
```

Bu, JavaScript'te kullanılan bazı yaygın nesne metotlarına örneklerdir. Her programlama dilinin kendi nesne metotları ve işlevleri vardır, ve bunlar nesneleri işlemek ve yönetmek için kullanışlıdır.
