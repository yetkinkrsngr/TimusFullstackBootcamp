# JavaScript'de reduce()

## Math metodu kullanacak her işlem için rest parametresi daha okunabilir bir kod yapısıyla yardımcı olmaktadır.

> fonksiyonu, bir dizi (array) üzerinde döngü yaparak tüm elemanları birleştirme veya bir değeri hesaplama amacıyla kullanılan bir dizi fonksiyondur. Bu fonksiyon, dizi elemanlarını tek bir değere (örneğin, toplam, ortalama, en büyük değer, vb.) indirgeyerek sonuç elde etmek için kullanışlıdır.

## İşte bir reduce() örneği:

```javascript
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total); // Çıktı: 15
```

# Rest parametresi

> JavaScript'te bir fonksiyonun son parametresi olarak kullanılan bir özelliktir. Rest parametresi, bir fonksiyona geçilen tüm ek parametreleri bir dizi (array) olarak toplar. Bu, özellikle fonksiyonun kaç tane argüman alacağını önceden belirlemediğiniz durumlarda kullanışlıdır. Rest parametresi, fonksiyonun içinde bu ek parametreleri kolayca işleyebilmenizi sağlar.

Rest parametresi üç nokta üst üste (...) ile başlar ve bir isim (genellikle ...rest veya başka bir isim) gelir. İşte bir rest parametresi örneği:

```javascript
function toplam(a, b, ...digerSayilar) {
  let toplamDeger = a + b;
  for (let sayi of digerSayilar) {
    toplamDeger += sayi;
  }
  return toplamDeger;
}

console.log(toplam(1, 2)); // Çıktı: 3
console.log(toplam(1, 2, 3, 4, 5)); // Çıktı: 15
```

Peki neden rest parametsini kullanmak daha rahat aşağıdaki kod satırını okuyarak başlayalım.

```javascript
let a = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10];
let min = Math.min(...a);
let max = Math.max(...a);
console.log(min); //0
console.log(max); //10

let minn = a.reduce((acc, current) => {
  return Math.min(acc, current);
}, a[0]);

// Find the maximum value using reduce
let maxx = a.reduce((acc, current) => {
  return Math.max(acc, current);
}, a[0]);

console.log(minn); //0
console.log(maxx); //10
```

> kısacası bütün elemanların toplanması harici aşağıdaki bütün metotlarda rest parametesi daha kullanışlıdır.

# Math metotları

`Math.abs(x)`: Verilen bir sayının mutlak değerini döndürür. Negatif bir sayı verildiğinde pozitif bir değer olarak döner.

```javascript
Math.abs(-5); // 5
```

`Math.ceil(x)`: Verilen bir sayıyı yukarıya yuvarlar, yani bir üst tam sayıya yuvarlar.

```javascript
Math.ceil(4.2); // 5
```

`Math.floor(x)`: Verilen bir sayıyı aşağıya yuvarlar, yani bir alt tam sayıya yuvarlar.

```javascript
Math.floor(4.9); // 4
```

`Math.round(x)`: Verilen bir sayıyı en yakın tam sayıya yuvarlar. Yarım noktalar 0.5 ve üstüne yuvarlanır.

```javascript
Math.round(4.5); // 5
Math.round(4.4); // 4
```

`Math.max(x1, x2, ..., xn)`: Verilen sayılar arasındaki en büyük sayıyı döndürür.

```javascript
Math.max(2, 8, 5, 12, 3); // 12
```

`Math.min(x1, x2, ..., xn)`: Verilen sayılar arasındaki en küçük sayıyı döndürür.

```javascript
Math.min(2, 8, 5, 12, 3); // 2
```

`Math.pow(x, y)`: x sayısını y üssüne yükseltir.

```javascript
Math.pow(2, 3); // 8
```

`Math.sqrt(x)`: Verilen sayının karekökünü döndürür.

```javascript
Math.sqrt(16); // 4
```

`Math.sin(x)`: Verilen açının sinüs değerini döndürür.

```javascript
Math.sin(Math.PI / 2); // 1 (π/2'nin sinüsü 1'dir)
```

`Math.cos(x)`: Verilen açının kosinüs değerini döndürür.

```javascript
Math.cos(Math.PI); // -1 (π'nin kosinüsü -1'dir)
```

`Math.tan(x)`: Verilen açının tanjant değerini döndürür.

```javascript
Math.tan(Math.PI / 4); // 1 (π/4'ün tanjantı 1'dir)
```

`Math.random()`: 0 ile 1 arasında rastgele bir ondalık sayı üretir.

```javascript
Math.random(); // Örnek: 0.7428147525078078
```

`Math.log(x)`: Verilen sayının doğal logaritmasını (e) kullanarak hesaplar.

```javascript
Math.log(Math.E); // 1 (e'nin doğal logaritması 1'dir)
```
