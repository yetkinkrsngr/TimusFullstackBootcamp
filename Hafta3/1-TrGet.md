# Get :

> "Get" terimi, programlamada çeşitli bağlamlarda kullanılan bir anahtar kelimedir. İlk olarak, gerçek hayattan bir örnek verelim:

## Gerçek Hayat Örneği:

> Diyelim ki bir web tarayıcısını kullanıyorsunuz ve bir internet sitesine erişmek istiyorsunuz. Tarayıcınız, web sunucusundan veri almak için "GET" isteği gönderir. Bu istek, web sunucusundan istenilen sayfanın verilerini almanıza olanak tanır. Örneğin, bir web sayfasının URL'sini tarayıcınıza girerken, tarayıcınız aslında o sayfayı almak için bir "GET" isteği gönderir.

Şimdi, bu gerçek hayat örneğini programlama dilinde nasıl kullanabileceğinizi açıklayalım:

Açıklama:
"GET" terimi, HTTP (Hypertext Transfer Protocol) protokolünde kullanılan bir metotdur. HTTP, web sayfalarının tarayıcılara nasıl iletilip alındığını belirlemek için kullanılır. "GET" isteği, bir kaynağın (örneğin bir web sayfası) verilerini talep etmek için kullanılır ve genellikle URL üzerinden iletilir.

Örnek olarak, bir JavaScript uygulamasında "GET" isteği kullanarak uzaktan bir API'den veri çekmek istediğinizi düşünelim:

JavaScript Örnek Kod:

```javascript
// Kullanılacak API'nin URL'si
const apiUrl = "https://api.example.com/data";

// GET isteği yapma
fetch(apiUrl)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Veri alınamadı");
    }
  })
  .then((data) => {
    console.log("Alınan veri: ", data);
  })
  .catch((error) => {
    console.error("Hata: ", error);
  });
```

Yukarıdaki örnek, JavaScript kullanarak belirtilen API'den veri almak için "GET" isteği gönderir. Elde edilen veri, daha sonra işlenebilir veya görüntülenebilir.

Bu şekilde, "GET" terimi gerçek dünyadan bir örnek, açıklama ve örnek kod kullanarak açıklanmış oldu. İhtiyacınıza bağlı olarak "GET" isteklerini farklı senaryolarda kullanabilirsiniz.

bir de express js üzerinde örnek verelim

```javascript
// express js modülden çekilir
const express = require("express");
// app değişkenine express fonsiyonu çağırlır
const app = express();
// port numaramız 3000 olarak ayarlanır
const port = 3000;
// app değişkenimize get metotudu çağrılır içinde iki parametre mevcuttur
app.get("/", (req, res) => {
  // respond yani cevap hellor work olarak gönderilir
  res.send("Hello World!");
});
//3000 numaralı portu dinlemeye başladık ve gelen istekleri karşılık console yazdırdık.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```
