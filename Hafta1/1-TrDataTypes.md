# Data Types // Veri Tipleri

Veri türü, değişkenler içinde saklanacak verinin türüne göre sınıflandırılması işlemidir. Veri türleri her programlama dili için oldukça önemli bir kavramdır.Bir işlem yaparken değişken içinde saklanan verinin türünü önceden belirtiriz. Böylece bilgisayar, verinin saklanacağı bellek alanını buna göre ayırır ve uygun işlemi gerçekleştirebilir.

1. İlkel (Primitive) Veri Türleri:

- String
- Number
- Boolean
- Undefined
- Null
- Symbol

2. İlkel Olmayan (Reference) Veri Türü:

- Object
- Array
- Function

> JavaScript dinamik bir dildir, yani bir değişken herhangi bir zamanda herhangi bir veri türünü tutabilir. Örneğin:

```javascript
var x = 100;
x = "javascript";
x = false;
x = null;
x = undefined;

alert(x); // undefined
```

`x değişkeni en son atanmış undefined değerini tutacaktır.`

> typeof operatörü ile bir değişkenin veri tipini öğrenebiliriz.
> Eğer ki object içindeki herhangi bir yapısal tipi kontrol etmek istersek,
> bunun için typeof kullanmak anlamsız olur,
> çünkü her zaman “object” çıktısını alırız.
> Bu tarz bir durumda kesin bir sonuç alınamasa da
> instanceof operatörünü kullanmak mantıklı olabilir.

```javascript
var myString = new String();
var myDate = new Date();
var myString2 = "string";
console.log(myString instanceof Object); // true
console.log(myString instanceof Date); // false
console.log(myString instanceof String); // true
console.log(myDate instanceof Date); // true
console.log(myDate instanceof Object); // true
console.log(myDate instanceof String); // false
console.log(myString2 instanceof String); // false !!!!!!
```

> Yukarıda görüldüğü gibi `instanceof` sadece object verileri üzerinde kullanılabilir, primative değerlerde false çıktısını verecektir.

# 1. İlkel (Primitive) Veri Türleri

Nesne dışındaki bütün veri tipleri sonradan değiştirilemez değerler tanımlar. Örnek olarak C dilinin tersine karakter dizileri (String) değiştirilemez. Bu tipteki değerler ilkel değerler (primitive values) olarak tanımlanır.

> İlkel değer bazlı tipte tanımlanan değişkenler adından da anlaşılacağı gibi değerleri tutarlar.
> Referans bazlı tiplerde ise değeri değil, onun referansını ya da adresini tutarlar.

## JavaScript String

String veri tipi içerisinde metinsel ifadeleri saklar. String veriler değişkenlere atanırken (“) tırnak işareti ya da (‘) kesme işareti kullanılır.

```javascript
var bandName1 = "Rammstein"; // çift tırnak
var bandName2 = "Rammstein"; // tek tırnak
```

İç içe tırnak kullanılması gerektiğinde ise aynı çeşit tırnağı kullanmak hata almamıza sebep olacağı için dikkat etmeliyiz.

```javascript
//doğru kullanım, çift tırnak içinde tek tırnak da kullanılabilir
var answer = 'He is called "Johnny"';
```

## JavaScript Number

JavaScript programlama dilinde sadece tek tür sayı vardır. Eğer ki sayı ondalıklı yazılacak ise “,” yerine “.” kullanılmalıdır. Ayrıca bir sayı değeri verilecek ise tırnak “” kullanılmamalıdır. Kullanılır ise sayı bilgisayar tarafından string olarak algılanır.
JavaScript programlama dilinde sadece tek tür sayı vardır. Eğer ki sayı ondalıklı yazılacak ise “,” yerine “.” kullanılmalıdır. Ayrıca bir sayı değeri verilecek ise tırnak “” kullanılmamalıdır. Kullanılır ise sayı bilgisayar tarafından string olarak algılanır.

```javascript
var age = 25;
console.log(typeof age); // number
var money = 73.25;
console.log(typeof money); // number

var year = "1966";
console.log(typeof year); // string
```

> Ayrıca number tipine özel “infinity” “-Infinity” ve NaN (Not a Number) değerleri de bulunmaktadır.

## Javascript Boolean

Boolean veri türü sadece iki değer alır: true (doğru) ve false (yanlış). Mantıksal veri türü genelde koşul ifadelerinde kullanılır.

```javascript
var isChecked = true;
console.log(isChecked); // boolean
alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
```

## Javascript Undefined

JavaScript programlama dilinde, bir değişkene değer atanmazsa, bir değişkenin değeri yoksa undefined olarak ifade edilir.

```javascript
var x;
var y = undefined;
var z = "";
console.log(typeof x); // undefined
console.log(typeof y); // undefined
console.log(typeof z); // string!!!!!
```

Yukarıda görüldüğü gibi boş atanmış (Empty Box) bir değer undefined olarak tanımlanmayıp string olarak tanımlanmaktadır! .Çünkü burada atama vardır, üstte dediğimiz gibi undefined atanmayan değerler için kullanılır.

## Javascript Null

Javascript’ de null primative bir değer olmasına rağmen ,bir object olarak algılanır. Yani tanımladığınız bir veri içine null değer attığınızda bellekte bir alan tahsis edilir ancak içerisinde bir değer olmadığını söylemiş oluruz.

Bu özel durum aslında JavaScript’de hala çözülememiş bir bug olarak devam etmektedir. Null çok özel ve önemli bir veridir.

Null değerini Undefined ile karşılaştırdığımız da value olarak aynı olduklarını fakat tip olarak farklı olduklarını görürüz.

```javascript
typeof undefined; // undefined
typeof null; // object

null === undefined; // false
null == undefined; // true
```

[](../Assets/data.webp)
