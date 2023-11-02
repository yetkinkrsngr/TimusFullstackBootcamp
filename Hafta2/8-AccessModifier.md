# Erişim belirleyicileri (Access Modifiers):

bir programlama dilinde sınıf üyelerine (örneğin, değişkenler, fonksiyonlar, vb.) dışarıdan nasıl erişilebileceğini ve kullanılabileceğini belirleyen anahtar kelimelerdir. Erişim belirleyicileri, sınıfın verilerinin ve işlevlerinin ne kadar görünür olduğunu ve ne kadarını gizlediğini kontrol eder.

## En yaygın kullanılan erişim belirleyiciler şunlardır:

1. Public (Genel): Bu belirleyici, bir sınıf üyesinin herkes tarafından erişilebilir olduğu anlamına gelir. Yani, bu üye sınıfın dışından erişilebilir ve kullanılabilir.

2. Private (Özel): Bir üye "private" olarak işaretlendiğinde, sadece aynı sınıf içerisinde erişilebilir ve kullanılabilir. Diğer sınıflardan veya dışarıdan erişmek mümkün değildir.

3. Protected (Korumalı): Bu belirleyici, bir üyenin sadece aynı sınıf veya alt sınıflardan erişilebilir olduğu anlamına gelir. Yani, miras alınan sınıflar bu üyeye erişebilir, ancak dışarıdan erişilemez.

4. Internal (İç): Bu erişim belirleyici, bir üyenin tanımlandığı aynı derleme (assembly) içerisinden erişilebilir olduğunu gösterir. Diğer derlemelerden erişim engellenir.

5. Protected Internal (Korumalı İç): Bu, "protected" ve "internal" belirleyicilerin birleşimidir. Sadece aynı derleme içinden veya miras alınan alt sınıflardan erişilebilir.

> Erişim belirleyicileri, sınıfların ve nesnelerin gizliliğini korumak ve sınıf üyelerini kontrollü bir şekilde dışarıya açmak için kullanılır. Bu sayede verilerin gizliliği ve güvenliği sağlanabilir, aynı zamanda sınıfın dışındaki kodun sınıf üyelerine nasıl erişebileceği düzenlenir.

# Access modifiers :

> are keywords in a programming language that determine how class members (such as variables, functions, etc.) can be accessed and used from outside. Access modifiers control the visibility and encapsulation of a class's data and functions.

## The most commonly used access modifiers include:

1. Public: This modifier signifies that a class member is accessible by everyone. It means that the member can be accessed and used from outside the class.

2. Private: When a member is marked as "private," it can only be accessed and used within the same class. It is not accessible from other classes or externally.

3. Protected: This modifier indicates that a member is accessible only within the same class or its subclasses. In other words, it can be accessed by inherited classes but not from external sources.

4. Internal: The "internal" access modifier denotes that a member is accessible within the same assembly (or module) where it is defined. Access from other assemblies is restricted.

5. Protected Internal: This is a combination of "protected" and "internal." It means that the member can be accessed from within the same assembly or from derived (inherited) classes.

> Access modifiers are used to maintain the privacy and security of data, control how class members are accessed from outside, and provide controlled access to class members.

```javascript
// Define a class with various access modifiers
class MyClass {
  constructor() {
    this.publicVar = 10; // Public variable
    this._privateVar = 20; // Private variable (convention, not enforced)
    this.protectedVar = 30; // Protected variable (not natively supported in JavaScript)
    this.internalVar = 40; // Internal variable (convention, not enforced)
    this.protectedInternalVar = 50; // Protected Internal variable (not natively supported in JavaScript)
  }

  // Public method
  publicMethod() {
    console.log("Public method");
  }

  // Private method (convention, not enforced)
  _privateMethod() {
    console.log("Private method");
  }

  // Protected method (not natively supported in JavaScript)
  protectedMethod() {
    console.log("Protected method");
  }

  // Internal method (convention, not enforced)
  internalMethod() {
    console.log("Internal method");
  }

  // Protected Internal method (not natively supported in JavaScript)
  protectedInternalMethod() {
    console.log("Protected Internal method");
  }
}

// Create an instance of MyClass
const myObject = new MyClass();

console.log("Accessing publicVar:", myObject.publicVar);
// console.log("Accessing privateVar:", myObject._privateVar); // Convention, not enforced
// console.log("Accessing protectedVar:", myObject.protectedVar); // Not natively supported
console.log("Accessing internalVar:", myObject.internalVar);
console.log("Accessing protectedInternalVar:", myObject.protectedInternalVar);

myObject.publicMethod();
// myObject._privateMethod(); // Convention, not enforced
// myObject.protectedMethod(); // Not natively supported
myObject.internalMethod();
myObject.protectedInternalMethod();
```
