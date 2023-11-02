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

# Sınıf yapısı(Class):

programlamada önemli bir kavramdır ve neden kullanıldığını anlamak için aşağıdaki konuları göz önünde bulundurabiliriz:

1. Nesne Yönelimli Programlamayı Destekler:
   Sınıflar, nesne yönelimli programlamanın (OOP) temel taşlarından biridir. OOP, programların daha iyi organize edilmesini, kodun daha anlaşılır ve bakımı daha kolay hale getirilmesini sağlar. Sınıflar, verileri ve ilgili işlevleri bir araya getirerek nesne oluşturma ve kullanma işlemini kolaylaştırır.

2. Kodun Daha Organize Edilmesini Sağlar:
   Sınıflar, kodun daha düzenli ve hiyerarşik bir yapıya sahip olmasına yardımcı olur. Özellikle büyük projelerde, farklı sınıflar kullanarak kodu daha iyi parçalayabilir ve yönetebilirsiniz. Her sınıf, belirli bir işlevselliği veya nesneyi temsil eder.

3. Veri Saklama ve Yönetme:
   Sınıflar, verileri daha iyi organize etmek ve saklamak için kullanılır. Bir sınıf içinde veriler (alanlar veya özellikler) depolanabilir ve bu verilere yönelik işlemler (metodlar) tanımlanabilir. Bu, verilerin daha güvenli ve düzenli bir şekilde yönetilmesini sağlar.

4. Kodun Tekrar Kullanılabilir Olmasını Sağlar:
   Sınıf yapısı, kodun yeniden kullanılabilirliğini artırır. Bir sınıfı oluşturduğunuzda, bu sınıfı farklı projelerde veya farklı parçaları arasında kullanabilirsiniz. Bu, kodun tekrar yazılmasını önler ve geliştirme sürecini hızlandırır.

5. Soyutlamayı Destekler:
   Sınıflar, nesnelerin soyutlamasını (abstraction) sağlar. Yani, gerçek dünyadaki nesneleri programda soyut bir şekilde temsil edebilirsiniz. Örneğin, bir "Araba" sınıfı oluşturarak her tür arabayı temsil edebilirsiniz.

6. İşbirliği ve Modülerlik:
   Sınıflar, farklı programcıların aynı projede işbirliği yapmasını kolaylaştırır. Her bir sınıf, belirli bir işlevselliği veya bileşeni temsil eder, bu da farklı programcıların farklı sınıflar üzerinde çalışmasını sağlar.

Bu nedenlerle sınıf yapısı, programlama dilinin temel bir özelliğidir ve kodun daha düzenli, sürdürülebilir ve anlaşılır olmasına yardımcı olur.
