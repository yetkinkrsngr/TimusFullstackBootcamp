# JavaScript Swich-Case

> bir ifadenin değerini birden fazla durum değeri ile karşılaştırmanıza ve eşleşen duruma göre kod bloklarını çalıştırmanıza olanak tanıyan bir "switch" ifadesi sunar. İşte "switch" ifadesinin temel sözdizimi:

```javascript
switch (ifade) {
  case deger1:
    // Eğer ifade === deger1 ise çalıştırılacak kod
    break;
  case deger2:
    // Eğer ifade === deger2 ise çalıştırılacak kod
    break;
  // İhtiyaç duyulan kadar daha fazla durum ekleyebilirsiniz
  default:
  // Hiçbir durum ifade ile eşleşmiyorsa çalıştırılacak kod
}
```

```javascript
let gun = 3;
let gunAdi;

switch (gun) {
  case 1:
    gunAdi = "Pazartesi";
    break;
  case 2:
    gunAdi = "Salı";
    break;
  case 3:
    gunAdi = "Çarşamba";
    break;
  case 4:
    gunAdi = "Perşembe";
    break;
  case 5:
    gunAdi = "Cuma";
    break;
  default:
    gunAdi = "Hafta Sonu";
}

console.log(`Bugün ${gunAdi}`);
```

> Bu örnekte, "switch" ifadesi, "gun" değişkeninin değerine dayalı olarak haftanın hangi gününü belirlemek için kullanılmıştır. Eğer "gun" değeri 3 ise, "gunAdi" değişkeni "Çarşamba" olarak ayarlanır. Eğer "gun" hiçbir durumla eşleşmiyorsa, varsayılan durum olan "Hafta Sonu" olarak ayarlanır.

> Eşleşen bir durumun kodunu çalıştırdıktan sonra "break" ifadesini kullanmayı unutmamız önemlidir. Eğer "break" ifadesini eklemeyi unutursanız, kod eşleşen durumdan sonraki durumlar için devam eder ve "break" veya "switch" bloğunun sonuna ulaşana kadar çalışmaya devam eder.
