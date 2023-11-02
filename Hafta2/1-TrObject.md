# Nesne:

> programlama dünyasında önemli bir kavramdır. Nesneler, birçok programlama dilinde kullanılır ve verileri ve işlevleri bir araya getiren bir yapıdır. İşte bir gerçek hayat örneği:

> Örnek Hikaye:
> Ahmet, bir araba üreticisi olarak düşünelim. Her yeni araba modelini üretirken, farklı özelliklere ve işlevlere sahip arabalar oluşturmalıdır. Arabaların özellikleri, rengi, motor gücü, hızı, model yılı ve daha birçok detay içerir. Ahmet, her arabanın bu özelliklerini takip etmek ve işlemek için programlamaya ihtiyaç duyar. İşte burada "nesneler" devreye girer.

> Ahmet, her bir araba modelini temsil etmek için nesneler oluşturur. Her araba bir nesne olarak kabul edilir ve bu nesne, arabayla ilgili tüm bilgileri ve işlevleri içerir. Örneğin, bir "Audi A3" arabası için ayrı bir nesne oluşturabilir ve bu nesne içinde rengi, motor gücünü, hızı gibi özellikleri saklar.

> Ayrıca, her araba modeli için benzer işlemleri yapmak istediğinde, bu nesneler üzerinden işlemlerini gerçekleştirebilir. Örneğin, tüm arabaların hızını artırmak istediğinde, bu nesnelerin içindeki hız verisini güncelleyebilir.

Şimdi, bu kavramı bir programlama dilinde nasıl kullanabileceğinizi göstermek için JavaScript örneği verelim:

## Kod Örneği:

```javascript
// Araba nesnesini tanımlayalım
class Araba {
  constructor(model, renk, motorGucu, hiz) {
    this.model = model;
    this.renk = renk;
    this.motorGucu = motorGucu;
    this.hiz = hiz;
  }

  hiziArtir(yeniHiz) {
    this.hiz += yeniHiz;
  }
}

// Audi A3 arabası için bir nesne oluşturalım
const audiA3 = new Araba("Audi A3", "Siyah", 200, 180);

// Arabanın hızını artıralım
audiA3.hiziArtir(10);

console.log("Araba Modeli: " + audiA3.model);
console.log("Araba Rengi: " + audiA3.renk);
console.log("Arabanın Gücü: " + audiA3.motorGucu + " HP");
console.log("Arabanın Hızı: " + audiA3.hiz + " km/saat");
```

Bu JavaScript örneği, Araba adında bir sınıf oluşturur ve her araba modeli için ayrı nesneler oluşturur. Bu nesneler, araba özelliklerini içerir ve arabaların hızını artırmak gibi işlemleri gerçekleştirmek için kullanılabilir. Bu, nesnelerin gerçek dünyadaki nesneleri temsil etmek için nasıl kullanılabileceğini gösterir.
