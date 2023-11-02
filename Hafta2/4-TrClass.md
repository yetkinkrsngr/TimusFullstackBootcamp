# Class:

> bir nesne yönelimli programlama (OOP) konsepti olup, bir şablondur veya bir nesnenin taslağını tanımlar. Bir sınıf, nesnenin özelliklerini (alanlar) ve davranışlarını (metotlar) içerir. JavaScript gibi bazı programlama dillerinde "class" anahtar kelimesi doğrudan kullanılabilir, ancak diğer dillerde sınıf benzeri yapılar farklı terimlerle adlandırılabilir (örneğin, Python'da "class," Java'da "class," vb.).

# Alt sınıf (subclass),

> bir sınıfın diğer bir sınıftan türetilmiş veya miras almış bir sürümüdür. Alt sınıf, üst sınıfın özelliklerini ve davranışlarını miras alırken, kendi ek özelliklerini veya davranışlarını da ekleyebilir.

İşte JavaScript'te sınıf ve alt sınıf oluşturmanın temel örneği:

```javascript
// Üst sınıf (base class) tanımı
class Insan {
  constructor(ad, yas) {
    this.ad = ad;
    this.yas = yas;
  }

  selamVer() {
    console.log(`Merhaba, benim adım ${this.ad}.`);
  }
}

// Alt sınıf (sub class) tanımı
class Ogrenci extends Insan {
  constructor(ad, yas, okul) {
    super(ad, yas); // Üst sınıfın yapıcı metodunu çağır
    this.okul = okul;
  }

  okuluTanit() {
    console.log(
      `Ben ${this.ad} ve ${this.yas} yaşındayım. Okulum: ${this.okul}.`
    );
  }
}

// Alt sınıfı kullanma
const ogrenci1 = new Ogrenci("Ali", 15, "Lise");
ogrenci1.selamVer(); // Üst sınıf metotunu çağırabilir
ogrenci1.okuluTanit(); // Kendi metotlarını çağırabilir
```

> Yukarıdaki örnekte, Insan sınıfı üst sınıfı temsil ederken, Ogrenci sınıfı Insan sınıfından türetilmiş bir alt sınıftır. extends anahtar kelimesi, Ogrenci sınıfının Insan sınıfından miras aldığını belirtir. super anahtar kelimesi, alt sınıfın yapıcı metodunda üst sınıfın yapıcı metodunu çağırmamızı sağlar.

> Alt sınıf, hem üst sınıfın hem de kendi özel metotlarını kullanabilir. Bu şekilde, üst sınıfın davranışını genişletebilir veya değiştirebilir. Bu, nesne yönelimli programlamanın birincil ilkesi olan "kalıtım"ı uygulamak için kullanılır.
