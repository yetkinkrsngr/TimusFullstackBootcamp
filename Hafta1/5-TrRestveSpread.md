# Rest ParaMetresi :

> Rest parametreleri, JavaScript’te fonksiyonların tanımlanırken kullanılan özel bir parametre türüdür.
> Rest parametreleri, bir fonksiyona geçilen birden fazla argümanı tek bir dizi olarak toplar. Bu, özellikle
> belirsiz sayıda argümanın işlenmesi gerektiği durumlarda kullanışlıdır.
> Rest parametresi, üç nokta üst üste (...) ile başlar ve ardından bir isim gelir. Bu isim, rest parametresinin
> dizi içinde nasıl erişileceğini belirtir. İşte bir örnek:

```javascript
function toplam(...sayilar) {
  let sonuc = 0;
  for (let sayi of sayilar) {
    sonuc += sayi;
  }
  return sonuc;
}
console.log(toplam(1, 2, 3, 4, 5)); // Çıktı: 15
```

Yukarıdaki örnekte, toplam fonksiyonu rest parametresi olan ...sayilar kullanarak birden fazla sayıyı toplar. Fonksiyona ne kadar çok sayı geçilirse, bu sayılar sayilar dizisinde toplanır ve döngü kullanılarak toplamları hesaplanır.

Rest parametreleri, belirsiz sayıda argümanla çalışmanız gerektiğinde veya daha önceki argümanları işlerken geri kalanları almanız gerektiğinde çok kullanışlıdır.

# Spread Operatörü:

> spread operatörü, bir nesnenin veya bir dizinin elemanlarını başka bir nesneye veya diziye kopyalamak veya birleştirmek için kullanılan bir operatördür. Spread operatörü üç nokta üst üste (...) şeklinde kullanılır. İşte JavaScript'te spread operatörünün kullanımına dair birkaç örnek:

```javascript
Dizi Elemanlarını Kopyalama:
const orijinalDizi = [1, 2, 3];
const kopyaDizi = [...orijinalDizi];
console.log(kopyaDizi); // [1, 2, 3]
Dizi Elemanlarını Birleştirme:
const dizi1 = [1, 2, 3];
const dizi2 = [4, 5, 6];
const birlesikDizi = [...dizi1, ...dizi2];
console.log(birlesikDizi); // [1, 2, 3, 4, 5, 6]
Nesne Özelliklerini Kopyalama:
const orijinalNesne = { ad: 'John', soyad: 'Doe' };
const kopyaNesne = { ...orijinalNesne };
console.log(kopyaNesne); // { ad: 'John', soyad: 'Doe' }
Nesne Özelliklerini Birleştirme:
const nesne1 = { ad: 'John' };
const nesne2 = { soyad: 'Doe' };
const birlesikNesne = { ...nesne1, ...nesne2 };
console.log(birlesikNesne); // { ad: 'John', soyad: 'Doe' }
```

Spread operatörü, verileri kopyalamak veya birleştirmek için kullanışlı bir araçtır ve kodunuzu daha okunaklı ve düzenli hale getirmenize yardımcı olabilir.

“…” aynı gibi geldi değil mi gelin farklarına bakalım.
Spread operatörü ve rest parametresi (rest operator) benzer görünebilir, ancak farklı amaçlar için kullanılırlar ve çalışma şekilleri farklıdır.

## Spread Operatörü (...):

> Spread operatörü, genellikle bir dizi veya nesnenin elemanlarını ayırarak kullanılır. Bu operatörü kullanarak bir dizi veya nesne içindeki elemanları alabilir ve ayrı ayrı elemanlar olarak kullanabilirsiniz.
> Spread operatörü, genellikle yeni bir dizi veya nesne oluşturmak veya mevcut bir diziye veya nesneye başka bir dizi veya nesne eklemek için kullanılır.

Örnek kullanımı:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Yeni bir dizi oluşturur: [1, 2, 3, 4, 5]
Rest Parametresi (...):
```

Rest parametresi, bir fonksiyonun argümanlarını yakalamak için kullanılır. Fonksiyon tanımında kullanıldığında, bu parametre geriye kalan argümanları bir dizi olarak toplar.
Rest parametresi, bir fonksiyonun tanımında kullanılırken spread operatörü ise bir dizi veya nesne oluştururken kullanılır.
Örnek kullanımı:

```javascript
function topla(...sayilar) {
  let toplam = 0;
  for (const sayi of sayilar) {
    toplam += sayi;
  }
  return toplam;
}
const sonuc = topla(1, 2, 3, 4, 5); // sonuc değeri: 15
```

> Kısacası, spread operatörü verileri ayırmak ve yeni nesneleri/dizileri oluşturmak için kullanılırken, rest parametresi fonksiyon argümanlarını toplamak ve bir dizi içinde kullanmak için kullanılır. İşlevleri farklıdır, ancak her ikisi de ... sembolünü kullanır.
