# JavaScript (JS) de fonksiyonlar,

belirli bir işlemi gerçekleştirmek için kullanılan kod bloklarıdır. JavaScript, web tarayıcılarında ve sunucu taraflı uygulamalarda kullanılabilen bir programlama dilidir. Fonksiyonlar, JavaScript'te modülerlik, kod yeniden kullanımı ve karmaşıklığı yönetmek için önemli bir yapı taşıdır. İşte JavaScript'te fonksiyonların temel özellikleri:

Fonksiyon Tanımlama:
JavaScript'de bir fonksiyon, function anahtar kelimesi ile tanımlanır. Örnek:

```javascript
function sayHello() {
  console.log("Merhaba, Dünya!");
}
```

## Parametreler:

Bir fonksiyon, işlem yapmak için girdi değerlerini alabilir. Bu girdilere "parametre" denir. Fonksiyonun içinde bu parametrelerle işlem yapılabilir. Örnek:

```javascript
function toplama(a, b) {
  return a + b;
}
```

## Dönüş Değeri:

Bir fonksiyon, işlem sonucunu return ifadesiyle döndürebilir. Bu, fonksiyonun çağrıldığı yere bir değer iletmek için kullanılır. Örnek:

```javascript
function toplama(a, b) {
  return a + b;
}

let sonuc = toplama(5, 3); // sonuc değişkeni 8'e eşitlenir.
```

## Fonksiyon Çağrısı:

Bir fonksiyonu çağırmak için fonksiyon adını ve parantezleri kullanın. Örnek:

```javascript
sayHello(); // "Merhaba, Dünya!" yazdırır.
```

## Anonim Fonksiyonlar:

JavaScript'te anonim fonksiyonlar, adı olmayan ve genellikle işlevsel bir amaç için kullanılan fonksiyonlardır. Örnek:

```javascript
let toplama = function (a, b) {
  return a + b;
};

let sonuc = toplama(5, 3); // sonuc değişkeni 8'e eşitlenir.
```

## Okunur Fonksiyonlar (Arrow Functions):

ECMAScript 6 (ES6) ile birlikte, okunur fonksiyonlar kullanılarak kısa ve açık şekilde fonksiyonlar tanımlanabilir. Örnek:

```javascript
let toplama = (a, b) => a + b;

let sonuc = toplama(5, 3); // sonuc değişkeni 8'e eşitlenir.
```

JavaScript'teki fonksiyonlar, kodunuzu daha organize etmek, karmaşıklığı yönetmek ve işlevselliği tekrar kullanmak için güçlü bir araçtır. Fonksiyonlar, JavaScript uygulamalarını geliştirmek için önemli bir yapı taşıdır.
