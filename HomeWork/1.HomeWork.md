# Odev

1. Javascritp Nedir ve tarihsel gelişiminden bahsedin

> javascript 1995 yılında Netscape Communications Corporation'da çalışan Brendan Eich tarafından geliştirilmeye başlandı sadece web üzerinde metin ve statik görüntülerle çalışıyordu. web üzerinde 10 günde geliştilen betik bir dildi. 2015 es6 ortaya çıkmasıyla belli bir standarta kavuşan bu betik dil web mobile ai ve nicelerini geliştirmemizde yardımcı oluyor.

2. java ile javascript arasındaki fark nedir ?
   isim benzerliği.
   java jvm üzerinde çalışan javascript browser üzerinde çalışan bir betik olarak tasarlandı.

   java oop kavramı üzerine yogunlaşan bir programlama diliyken
   javascript fonksiyonel programlamaya tasarlanmıştır.

   tür bakımında java çok sıkı bir yönetimlen giderken javascript daha dinamaktir en çok benzettiğim python tür bakımından js benzer.

   3. javascript veri tipleri nelerdir açıklanıyınız.

   aslında burada 2 tür 2 tür içindeki tipler bulunmakta

   ## ilkel veri türü

   - string
   - number
   - boolean
   - undefined
   - symbol

   ## referans veri türü

   - diziler
   - nesneler
   - fonsiyonlar
   - null

3. null ile undefined arasındaki fark nedir açıklayınız .

null içeri boş olan manasına gelir

```javascript
let content = null;
```

undefined ise içeriği atanmamış manasına gelir

```javascript
let content;
```

5. NaN nedir açıklayınız ?

Nan not a number yani numeric olmayan veri demek

6. javascript'de yorum satırı eklemenin kaç farklı yolu vardır.
   2

```javascript
// tek yorum satırı
/*
   çoklu satırlı yorum satırı
   */
```

7. Global değişken ne demektir açıklayınız ?

herhangi bir scope (parantez) yada fonsiyon içinde bulunmayan windows neslesinde yazılan değişken

```javascript
let global;
{
  let notGlobal;
}
```

8. javascript te this anahtar kelimesini açıklayınız

mevcut bağlamı veya kapsamı ifade eder. kapsam içinde kullanımları farklıdır. kısacası işaretleme denebilir
aşağıda kullanımları mevcutdur

- global kapsamda kullanımı

```javascript
console.log(this);
```

window nesnesini işaret eder. Bu, tarayıcı ortamında window nesnesini, Node.js ortamında ise global nesnesini ifade eder.

- Fonksiyonlar İçinde:

```javascript
const obj = {
  ad: "John",
  selamla: function () {
    console.log("Merhaba, " + this.ad);
  },
};

obj.selamla(); // "Merhaba, John" çıktısını verir, this objeyi işaret eder.

const selamla = obj.selamla;
selamla(); // Tarayıcıda: "Merhaba, undefined", Node.js'te: "Merhaba, John", this global bağlamı işaret eder.
```

- Eğer bir fonksiyon, bir objenin metodu olarak çağrılırsa, this, o objeyi işaret eder.
- Eğer bir fonksiyon, bağımsız bir şekilde çağrılırsa, this, global bağlama işaret eder.

- Sınıflar (Classes):

```javascript
class Araba {
  constructor(marka, model) {
    this.marka = marka; // Sınıf örneği içindeki "marka" özelliği
    this.model = model; // Sınıf örneği içindeki "model" özelliği
    this.calis = false; // Sınıf örneği içindeki "calis" özelliği, başlangıçta false olarak ayarlandı
  }
```

sınıflarındaki this anahtar kelimesi, o sınıfın bir örneğini temsil eder.

9. == ve === farkını örneklerle ile açıklayınız

== eşit
=== eşit ve türü aynıysa

tür derken hem veri yapısı hemde bellekteki referans ettiği yer anlamında kullanılır.

10. let ve const farkını tablo yapınız
    JavaScript programlamada `let` ve `const` anahtar kelimeleri, değişkenlerin tanımlanmasında kullanılır. Ancak bu iki anahtar kelime arasında önemli farklar bulunur. İşte bu farkları açıklayan bir tablo:

| Anahtar Kelime | Değişken Türü | Yeniden Atanabilir |  Blok Kapsamı |
| :------------- | :------------ | -----------------: | ------------: |
| `let`          | Değişken      |               Evet | Blok seviyesi |
| `const`        | Sabit         |              Hayır | Blok seviyesi |

- `let`: `let` ile tanımlanan değişkenler, yeniden atanabilir. Yani, aynı değişken adıyla farklı değerlere sahip olabilirler. `let` ile tanımlanan değişkenler yalnızca tanımlandığı blokta veya kapsamda erişilebilirler. Bu da demek oluyor ki, `let` ile tanımlanan bir değişken sadece tanımlandığı blok içinde kullanılabilir.

- `const`: `const` ile tanımlanan değişkenler ise sabittir. Yani, bir kez değer atandıktan sonra tekrar değeri değiştirilemez. Bu, değişkenin değerinin değiştirilemez olduğu anlamına gelir. Yine, `const` ile tanımlanan değişkenler de yalnızca tanımlandığı blok veya kapsam içinde kullanılabilir.

11. arrow fonksiyonun normal fonksiyondan farkı nedir ?

Arrow fonksiyonlar, kısa ve öz bir sözdizisine sahiptir ve dışarıdaki kapsamdaki this bağlamını kullanır. Normal fonksiyonlar ise daha uzun bir sözdizisine sahiptir ve kendi this bağlamını oluştururlar.

12. swich blogunun içinde hatasız nasıl değişken tanımlanır

```javascript
switch (expression) {
  case value1:
    // Değişken tanımlama ve işlemler
    let variable1 = "Değer 1";
    // Diğer işlemler
    break;
  case value2:
    // Değişken tanımlama ve işlemler
    let variable2 = "Değer 2";
    // Diğer işlemler
    break;
  // Diğer case'ler
  default:
  // Varsayılan işlemler
}
```

13. Pure fonksiyonlar ne demektir açıklayınız
    aynı girdiye herzaman aynı çıktı üretmelidir.
    dışsal bir etkileşim olmamalıdır.

```javascript
// pure fonksiyon
function toplama(a, b) {
  return a + b;
}
```

```javascript
let toplam = 0;
// pure olmayan bir fonskiyon toplam dışsal bir etken mevcut
function impureToplama(a) {
  toplam += a; // Dışsal etkileşim: toplam değişkenini değiştirir.
  return toplam;
}
```

14. rest operatörü nedir örnekle açıklayınız
    bir çok değişkeni tek bir yerde toparlamak için kullanılır (...) ifade edilir

```javascript
function topla(...sayilar) {
  let toplam = 0;
  for (let sayi of sayilar) {
    toplam += sayi;
  }
  return toplam;
}

console.log(topla(1, 2, 3, 4, 5)); // 15
```

15. Object desructuring nedir örnekle açıklayınız

JavaScript'te bir nesne içindeki özellikleri çıkararak değişkenlere atama yapma işlemidir.

```javascript
// Bir nesne tanımlayalım
const kisi = {
  ad: "John",
  soyad: "Doe",
  yas: 30,
};

// Object destructuring kullanarak nesne içindeki özellikleri çözelim
const { ad, soyad, yas } = kisi;

// Artık değişkenler üzerinden özelliklere erişebiliriz
console.log(ad); // "John"
console.log(soyad); // "Doe"
console.log(yas); // 30
```

16. 2 elemanlı bir objeyi 6 farklı şekilde oluşturunuz

1. Nesne Literali ile Oluşturma:
   Bu en yaygın kullanılan yöntemdir.

```javascript
const obj1 = { prop1: "Değer 1", prop2: "Değer 2" };
```

2. Nesne Oluşturucu ile Oluşturma:
   Object sınıfının nesne oluşturucu yöntemi kullanılarak oluşturabilirsiniz.

```javascript
const obj2 = new Object();
obj2.prop1 = "Değer 1";
obj2.prop2 = "Değer 2";
```

3. Object.create() ile Oluşturma:
   Bir prototip nesnesi üzerinden yeni bir nesne oluşturmak için Object.create() kullanabilirsiniz.

```javascript
const objPrototype = { prop1: "Değer 1", prop2: "Değer 2" };
const obj3 = Object.create(objPrototype);
```

4. Nesne Yıkıcı Eşitleme ile Oluşturma:
   Diğer bir nesneyi kullanarak bir nesne oluşturabilirsiniz.

```javascript
const obj4 = {};
obj4.prop1 = "Değer 1";
obj4.prop2 = "Değer 2";
```

5. Kısa Sözdizisi ile Oluşturma:
   Kısa bir sözdizi kullanarak bir nesne oluşturabilirsiniz.

```javascript
const prop1 = "Değer 1";
const prop2 = "Değer 2";
const obj5 = { prop1, prop2 };
```

6. Object.assign() ile Oluşturma:
   Object.assign() yöntemi ile bir veya daha fazla nesneyi birleştirerek yeni bir nesne oluşturabilirsiniz.

```javascript
const obj6 = Object.assign({}, { prop1: "Değer 1", prop2: "Değer 2" });
```

Her biri farklı kullanım senaryolarına uygun olan bu altı yöntemle 2 elemanlı bir nesne oluşturabilirsiniz.

17. 2 elemanlı bir objeni key value değerinin karater sayısını ile 2 farkı dögü metodu kullanarak yapınız

```javascript
let person={
    name:"yetkin";
    surname:"karasungur"
}

for (let key in person) {
  let key1 = key; // Özelliğin adı (name veya age)
  let key2 = person[key].length; // Özelliğin değerinin uzunluğu (sadece stringlerde çalışır)
  console.log(key1, key2);
}
```

```javascript
const person = {
  name: "Hasan",
  age: 30,
};

const keys = Object.keys(person);
let i = 0;

while (i < keys.length) {
  let key = keys[i];
  let key1 = key;
  let key2 = person[key].length;
  console.log(key1, key2);
  i++;
}
```

18. Cookie , Local storage ve session storage farkını tablo ile yapınız
    | Özellik | Çerez (Cookies) | Yerel Depolama (Local Storage) | Oturum Depolama (Session Storage) |
    |------------------------|----------------------|---------------------------------------|---------------------------------------|
    | Veri türleri | Sadece metin | Herhangi bir veri türü | Herhangi bir veri türü |
    | Veri saklama süresi | Belirtilen bir süre | Veri silinene kadar | Oturum sona erdiğinde silinir |
    | Veri boyutu | Genellikle 4 KB | Genellikle 5-10 MB arası | Genellikle 5-10 MB arası |
    | Tarayıcıya gönderme | Her istekte gönderilir | Tarayıcıya gönderilmez | Tarayıcıya gönderilmez |
    | Kullanım Alanları | Oturum izleme, tercihler, analiz | Kullanıcı verileri saklama, oturum yönetimi | Oturum verileri saklama, oturum yönetimi |

19. asenkron ve senkron işlem farkını yazın

senkron : mehmet diye biri kek yapmaya karar verir ve tarif kitabındaki işlem sırasına göre kek yapmaya başlar un eller yumarta koya vanillya ekler kakao ekle şeker ekler çırpar ve fırana koyar bir işlem sırası vardır buda senkron programlamadır.

asenkron : Mehmet, bir restoranın garsonudur. Bir akşam restoran doludur ve birçok masa sipariş vermiştir. Mehmet, her masaya sırayla gitmek ve siparişleri almak zorundadır. Ancak her masa farklı bir sipariş verir ve bazıları diğerlerinden daha uzun sürebilir. Mehmet, sipariş alırken her masaya gitmek yerine, bir masadan siparişi alır, aşçıya verir ve aynı anda diğer masaya geçer. Bu şekilde aynı anda birkaç masaya hizmet edebilir ve siparişleri daha hızlı alabilir. Mehmet, işleri sırayla değil, eşzamanlı olarak halleder, bu da asekron bir işlemi temsil eder.

Senkron işlemler adım adım ilerler ve bir işlem bitmeden diğerine geçmez. Asekron işlemler ise bir işlemi başlatır ve sonuç beklemeden diğer işlemlere devam eder, sonuçlar ilerleyen süreçte elde edilir. Asekron işlemler, özellikle asenkron programlamada ve çoklu görev işleme alanlarında önemlidir.

20. Promise nedir ve neden ihtiyaç duyarız

> Birçok programlama dili, asenkron işlemleri yönetmek için "Promise" dediğimiz bir yapı sunar. Promise, özellikle JavaScript gibi olay tabanlı veya asenkron programlamada sıkça kullanılır. Şimdi bir gerçek hayat örneğiyle başlayalım:

## Örnek Hikaye:

Ali, bir web geliştiricisidir. Müşterisi, bir web sayfasında veritabanından büyük bir veri kümesini çekerek göstermesini istedi. Ali, bu işlemi tamamlamak için veritabanı sorgularını yapmalı ve sonuçları almalıdır. Ancak veri çekme işlemi biraz zaman alabilir ve bu sırada kullanıcıya boş bir sayfa göstermek istemez. İşte bu noktada Promise'ler devreye girer.

Ali, veri çekme işlemini Promise kullanarak yapmaya karar verir. Bu, aşağı yukarı şu şekilde çalışır:

1. İstek başlatıldığında, bir Promise nesnesi oluşturulur.
2. Veritabanı sorguları asenkron olarak çalıştırılır.
3. Sorgular tamamlandığında, Promise başarılı bir sonuçla (veri) veya hata ile sonuçlanır.

Ali, kullanıcılara boş bir sayfa göstermek yerine bu Promise'i kullanarak sayfayı güncelleyebilir. İşte bu noktada JavaScript ile Promise kullanarak aşağıdaki gibi bir kod parçası yazabilir:

```javascript
function veriCekmeIslemi() {
  return new Promise((resolve, reject) => {
    // Veritabanı sorgularını yap
    // Sonuçları işle
    if (veriEldeEdildi) {
      resolve(veri); // İşlem başarılı
    } else {
      reject(hata); // İşlem hata ile sonuçlandı
    }
  });
}

// Promise'i kullanma
veriCekmeIslemi()
  .then((veri) => {
    // Veri alındığında yapılacak işlemler
    sayfayiGuncelle(veri);
  })
  .catch((hata) => {
    // Hata durumunda yapılacak işlemler
    hataMesajiGoster(hata);
  });
```

Bu kod, veri çekme işleminin sonucuna göre sayfayı güncellemek için Promise kullanmanın bir örneğini gösteriyor. Promise, asenkron işlemleri daha düzenli ve yönetilebilir hale getirir ve hata işleme yeteneği sunar.

---

# Array soruları

```javascript
let dolap = ["Shirt", "pant", "TShirt"];
```

1. dolap arrayindeki son elemanı silip consola yazdırın.

```javascript
let dolap = ["Shirt", "pant", "TShirt"];
let oldClothes = dolap.pop();
console.log(
  `dolapta kalan kıyafetler ${dolap.join()} yer bezi olan kıyafet ${oldClothes}`
);
```

2. dolap arrayindeki ilk elemanı silip yerine "Hat elemanı gönderip consola yazdırın"

```javascript
let dolap = ["Shirt", "pant", "TShirt"];
let oldClothes = dolap.shift();
let newClothes = dolap.unshift("hat");
console.log(
  `dolaptaki kıyafetler ${dolap.join()} çöpe atılan kıyafet ${oldClothes} yeni alınan kıyafet ${
    dolap[0]
  }`
);
```

3. dolap değişkeninin array olup olmadığını kontrol edin ve sonucu bir değişkene eşitleyin

```javascript
let dolap = ["Shirt", "pant", "TShirt"];
let checkArr = Array.isArray(dolap);
checkArr ? console.log(`Dolap bir arraydir`) : console.log("hayır değildir");
```

4. dolap arrayinde "pant" elemanının olup olmadığını kontrol edin

```javascript
let dolap = ["Shirt", "pant", "TShirt"];
let check = dolap.includes("pant");
check
  ? console.log("yes there is pant in the dolap")
  : console.log("no there is no pant in dolap");
```

5. dolap arrayindeki elemanların karakter sayisini toplayip geriye döndürecek bir fonsiyon yazınız

```javascript
let dolap = ["Shirt", "pant", "TShirt"];

function calcuArr(len) {
  if (Array.isArray(arr)) {
    return arr.length;
  }
  else {
    return -1
  }
}
let len= calcuArr(dolap)
console.log(`dolaptaki eşyanın topla : `${len});
```

6. dolap arrayindeki tüm elemanları büyük harfe çevirip yeni bir değişkene 3 farklı yöntemle atayın ?

## 1 using a foreach

```javascript
let dolap = ["Shirt", "pant", "TShirt"];
let arr2 = new Array();

function calcuArr(arr) {
  // Checking array is array
  if (Array.isArray(arr)) {
    //foreach cheching for elemnets
    arr.forEach(function (element) {
      // string upper case metots
      element = element.toUpperCase();
      //pushing the element
      arr2.push(element);
    });
    return arr2;
  } else {
    return -1;
  }
}
let result = calcuArr(dolap);
console.log(result);
```

# 2. using a map

```javascript
let dolap = ["Shirt", "pant", "TShirt"];

let arr2 = dolap.map(function (element) {
  return element.toUpperCase();
});

console.log(arr2); // ['SHIRT', 'PANT', 'TSHIRT']
```

# 3.using for of loop

```javascript
let dolap = ["Shirt", "pant", "TShirt"];
let arr2 = [];

for (element of dolap) {
  if (Array.isArray(element)) {
    arr2.push(element.toUpperCase());
  } else {
    console.log("There is no Array");
  }
}
```

7. dolap arrayindeki index sayılarını key olacak şekilde objeye çeviriniz.

```javascript
let dolap = ["Shirt", "pant", "TShirt"];
let obj = new Object();

let obj = dolap.reduce(function (result, element, index) {
  result[index] = element;
  return result;
}, {});
console.log(obj);
```

8. slice ve splice farkı nedir ?

## slice() :

> türkçe manasıyla dilimleme demek belli aralıkta ki değerleri alır ve geri döndürür

```javascript
let dolap = ["Shirt", "pant", "TShirt"];

let slice = dolap.slice(1);
// birinci indexten sonrasını kople alır "pant", "TShirt"

let slice2 = dolap.slice(0, 1);

// sıfırdan alıp birinci indexe kadar alır ama 1. indexi almaz  "Shirt"
```

## splice :

> bellirlenen aralığı siler yada value değer var ise aralığı siler ve o aralığa value değeri atar.

```javascript
let dolap = ["Shirt", "pant", "TShirt"];
let splice = dolap.splice(0, 1); //"Shirt"
console.log(dolap); //['pant', 'TShirt']
let splice2 = dolap.splice(0, 1, "boxer"); //pant
console.log(splice2); //['boxer', 'TShirt']
```

### const arr=[1,2,3,4,5,6,7,7,8,6,10]

1. arrayindeki yinelenen sayıları bulun

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
const uniqueSet = new Set();
const duplicateNumber = [];

for (const num of arr) {
  if (uniqueSet.has(num)) {
    duplicateNumber.push(num);
  } else {
    uniqueSet.add(num);
  }
}
console.log(duplicateNumber);
```

2. arayindeki tüm yinelenen sayıları silin ve yeni bir arrayi 2 farklı metot ile oluşturun

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
const uniqueSet = new Set();
const duplicateNumbers = [];

// İlk adımda tekrarlanan sayıları bul
for (const num of arr) {
  if (uniqueSet.has(num)) {
    duplicateNumbers.push(num);
  } else {
    uniqueSet.add(num);
  }
}

// İkinci adımda tekrarlanan sayıları diziden filtrele
const arrWithoutDuplicates = arr.filter(function (num) {
  return !duplicateNumbers.includes(num);
});

console.log(arrWithoutDuplicates); // [1, 2, 3, 4, 5, 8, 10]
```

3. arrayindeki min max sayılarını bul

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
let arrMin = Math.min(...arr);
let arrMax = Math.max(...arr);

console.log(`Maximum number on array is ${arrMax} minimum is ${arrMin}`);
```

---

# Kod çıktıları

```javascript
// Bu kodun çıktısı nedir neden ?
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise

  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  });
```

job() adında bir fonksiyon tanımlanır. Bu fonksiyon, bir Promise döndürür ve resolve ve reject parametreleri alır.

job() fonksiyonu çağrıldığında, bir Promise oluşturulur ve hemen reject() çağrısı yapılır. Yani, bu Promise reddedilir.

Oluşturulan Promise, promise değişkenine atanır.

promise değişkeniyle bir dizi işlem zinciri (then ve catch kullanarak) başlatılır. İşte zincirdeki işlemlerin açıklamaları:

- İlk .then zinciri, bir resolve durumunda çalışacak bir işlevi belirtir, ancak burada job() fonksiyonu reddettiği için bu kısım atlanır.

- İkinci .then, üstteki .then zinciri bir hataya düştüğünde yani reject durumunda çalışacak işlevi belirtir. Bu nedenle reject() tarafından oluşturulan hatayı yakalar ve "Error 1" yazısını konsola yazar.

- Üçüncü .then zinciri, bir önceki .then zinciri hataya düşmediği için atlanır, çünkü önceki işlem başarısız oldu ve hatayı ele alan .catch çalıştı.

- Dördüncü .then zinciri, zincirin en sonunda yer alır ve önceki işlemler hataya düşse de düşmese de çalışacak bir işlevi belirtir. Yani, "Success 4" yazısını konsola yazar.

Bu zincirleme işlemler, Promise zincirleriyle çalışmanın nasıl işlediğini ve ardışık olarak nasıl işlemler gerçekleştirilebileceğini gösterir. Burada temel fikir, her bir .then zincirinin ardışık olarak çalışmasını sağlamak ve bir hata durumunda .catch bloğunu kullanarak hatayı ele almak.

---

```javascript
// Bu kodun çıktısı nedir neden ?
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }

    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);

    return job(false);
  })
  .then(function (data) {
    console.log(data);

    return job(true);
  })
  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })
  .then(function (data) {
    console.log(data);

    return new Error("test");
  })
  .then(function (data) {
    console.log("Success:", data.message);
  })
  .catch(function (data) {
    console.log("Error:", data.message);
  });
```

job adında bir fonksiyon tanımlanır ve bir Promise döndürür. Bu fonksiyon, state adında bir parametre alır. Eğer state doğru (true) ise, bir resolve ile "success" metnini döndürür; aksi takdirde bir reject ile "error" metnini döndürür.

job(true) çağrısı yaparak bir Promise oluşturulur ve promise değişkenine atanır.

promise üzerinde bir dizi .then ve .catch zinciri başlar. İşte zincirdeki işlemlerin açıklamaları:

İlk .then zinciri, promise başarılı bir şekilde tamamlandığında çalışır. "Success" metnini konsola yazar ve bir sonraki job(true) çağrısını döndürür.

İkinci .then zinciri, önceki .then zinciri tarafından döndürülen değeri kontrol eder. Eğer değer "victory" değilse, bir hata (throw "Defeat") oluşturur. Aksi takdirde bir sonraki job(true) çağrısını döndürür.

Üçüncü .then zinciri, önceki .then zinciri tarafından döndürülen değeri konsola yazar.

Birinci .catch zinciri, bir hata oluştuğunda çalışır, hata mesajını konsola yazar ve bir sonraki job(false) çağrısını döndürür.

Beşinci .then zinciri, önceki .catch zinciri tarafından döndürülen değeri konsola yazar.

Altıncı .catch zinciri, bir hata oluştuğunda çalışır, hata mesajını konsola yazar ve "Error caught" metnini döndürür.

Yedinci .then zinciri, "Error caught" metnini konsola yazar ve bir Error nesnesi oluşturur.

Sekizinci .then zinciri, bir önceki .then zinciri tarafından döndürülen Error nesnesinin message özelliğini konsola yazar.

Son .catch zinciri, bir hata oluştuğunda çalışır ve Error nesnesinin message özelliğini konsola yazar.

Bu zincirleme işlemler, Promise'lerin nasıl işlediğini ve farklı senaryolara göre nasıl işlem yapabileceğinizi gösterir.
