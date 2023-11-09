# Delete :

> "DELETE" metodu, HTTP (Hypertext Transfer Protocol) üzerinde kullanılan bir HTTP request türüdür. Bu request türü, belirli bir kaynağı (örneğin bir web sayfası, veritabanı girdisi veya dosya) silmek veya kaldırmak için kullanılır. Yani "DELETE" request'i, belirli bir kaynağın sunucu tarafından kalıcı olarak kaldırılmasını talep eder.

1. Kaynak Silme: "DELETE" request'i, belirli bir kaynağın silinmesi veya kaldırılması için kullanılır. Örneğin, bir web sayfasını, bir kullanıcının hesabını veya bir dosyayı sunucudan kalıcı olarak silmek için kullanılabilir.

2. Idempotent: Bir "DELETE" request, idempotent bir işlemdir, yani aynı kaynağı tekrar tekrar silmek için kullanıldığında sonuç değişmez. Yani kaynağı silme işlemi tekrarlanabilir ve sonuç aynı kalır.

3. URL'de Belirtme: "DELETE" request'i, silinmesi gereken kaynağın URL'sinde belirtilir. Sunucu, bu URL'de belirtilen kaynağı kalıcı olarak kaldırır.

4. Güvenlik ve Yetkilendirme: "DELETE" işlemi genellikle güvenlik ve yetkilendirme gerektirir. Yalnızca yetkilendirilmiş kullanıcılar veya işlemler, kaynakları silebilir.

Örnek bir "DELETE" request'i, bir RESTful API ile bir kaynağın silinmesi için kullanılabilir. Örneğin, bir dosyanın sunucudan kalıcı olarak silinmesi veya bir kullanıcının hesabının kapatılması için "DELETE" request'i kullanılabilir.

İşte basit bir örnek, Express.js kullanarak "DELETE" request'i ile bir kaynağı silmek için:

```javascript
const express = require("express");
const app = express();

// Bir ürünün silinmesi için "DELETE" request'i
app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  // productId kullanarak ürünün silinmesi işlemi yapılır
  res.send(`Ürün ${productId} silindi.`);
});

app.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor.");
});
```

Bu örnekte, Express.js kullanarak "/products/:id" yoluna gelen "DELETE" request'i, belirli bir ürünün silinmesi için kullanılır. Kaynak URL'de belirtilen ürün kalıcı olarak kaldırılır ve sonuç olarak bir yanıt gönderilir.
