# "get" ve "set" :

> özellikleri, bir programlama dilinde nesne yönelimli programlamada kullanılan, özelliklerin (property) değerlerini okuma ve atama işlemlerini kontrol etmek için kullanılan özel fonksiyonlardır.

1. get: "get" bir özelliğin değerini okumak için kullanılır. Bu özellik, bir nesne üzerinde tanımlandığında, bu özelliğe erişildiğinde belirli bir işlemi gerçekleştirebilir ve bir değeri döndürebilir.

2. set: "set" bir özelliğe değer atamak için kullanılır. Bu özellik, bir nesne üzerinde tanımlandığında, bu özelliğe bir değer atandığında belirli bir işlemi gerçekleştirebilir ve özelliğin değerini değiştirebilir.

Bu özellikler, özellikle bir özelliğin değerini kontrol etmek, doğrulamak veya özel işlemler gerçekleştirmek istediğinizde kullanışlıdır. İşte JavaScript'te "get" ve "set" özelliklerinin kullanımına örnek:

```javascript
class Kisi {
  constructor(ad, soyad) {
    this.ad = ad;
    this.soyad = soyad;
  }

  // "get" kullanarak tam adı al
  get tamAd() {
    return this.ad + " " + this.soyad;
  }

  // "set" kullanarak adı ve soyadı ayrı ayrı güncelle
  set tamAd(yeniTamAd) {
    const parcalar = yeniTamAd.split(" ");
    this.ad = parcalar[0];
    this.soyad = parcalar[1];
  }
}

const kisi1 = new Kisi("John", "Doe");

// "get" kullanarak tam adı al
console.log(kisi1.tamAd); // "John Doe"

// "set" kullanarak tam adı güncelle
kisi1.tamAd = "Alice Johnson";

console.log(kisi1.ad); // "Alice"
console.log(kisi1.soyad); // "Johnson"
```

> Yukarıdaki örnekte, Kisi sınıfında "get" ve "set" kullanılarak "tamAd" adında bir özellik tanımlanmıştır. "get" ile bu özelliğin değeri okunurken, "set" ile değeri atanırken özel işlemler gerçekleştirilmiştir.

# Private property :

JavaScript'te özel (private) özellikler, genellikle bu özelliklerin dışındaki sınıflardan erişilmesine veya doğrudan değiştirilmesine izin verilmeyen özelliklerdir. Bu tür özellikler, içsel durumu korumak ve dış kodlardan gizlemek amacıyla kullanılır. JavaScript, bazı diğer diller gibi yerleşik olarak özel özellikleri desteklemese de, bu tür gizliliği sağlamak için bazı yöntemler bulunmaktadır.
Özel Alanlar (ES6 ve Sonrası): JavaScript artık # sembolünü kullanarak özel alanları tanımlamak için resmi bir yol sunar. Bu alanlar gerçekten özeldir ve sınıfın dışından erişilemezler.

```javascript
class Kisi {
  #ad; // Özel alan

  constructor(ad) {
    this.#ad = ad;
  }

  getAd() {
    return this.#ad;
  }
}
```

> `#` sembolü kullanılarak tanımlanan özellikler, sınıf içinde özeldir ve dışarıdan erişilemezler. Bu, modern JavaScript'te gerçekten özel özellikler oluşturmanın güvenli bir yoludur.

> Özel özellikler, daha önceki JavaScript ortamlarında desteklenmeyebilir veya kodunuzda kullanmak için transpiler'lara ihtiyaç duyabilir. Ancak, modern JavaScript'te gerçekten özel özellikler oluşturmanın sağlam bir yolunu sunar.

# Örnek:

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
