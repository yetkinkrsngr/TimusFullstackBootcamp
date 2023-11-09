# Put:

> "PUT" işlemi, HTTP (Hypertext Transfer Protocol) üzerinde kullanılan bir HTTP request türüdür. Bu request türü, belirtilen kaynağı (örneğin bir web sayfası veya veritabanı girdisi) güncellemek için kullanılır. "PUT" request'i, belirli bir URL'ye gönderilen veri ile çalışır ve bu veri, hedef kaynağı güncellemek için kullanılır.

```javascript
const express = require("express");
const app = express();

app.use(express.json()); // JSON veri işleme middleware'i

// Bir ürünün güncellenmesi için "PUT" request'i
app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  // productId kullanarak ürünü güncelleme işlemi yapılır
  res.send(`Ürün ${productId} güncellendi.`);
});

app.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor.");
});
```

Bu örnekte, Express.js kullanılarak "/products/:id" yoluna gelen "PUT" request'i, belirli bir ürünü güncellemek için kullanılır. Kaynak URL'de belirtilen ürün güncellenir ve güncelleme sonucu yanıt olarak gönderilir.
