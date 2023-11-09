# Post :

> "POST," programlamada HTTP (Hypertext Transfer Protocol) protokolü üzerinde kullanılan bir metot veya HTTP request türüdür. "GET" request'ine benzer şekilde, web uygulamalarında veri iletmek ve kaydetmek için kullanılır. Ancak "POST" request'i, veriyi gövde (body) kısmında taşır, bu nedenle daha fazla veri iletmek için kullanılır ve URL'de veriyi ifşa etmez.

```javascript
const express = require("express");
const app = express();

app.use(express.json()); // Middleware for parsing JSON data

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Kullanıcı adı ve şifreyi kontrol et ve oturum aç
  // İşlemler burada yapılır
  res.send("Giriş başarılı");
});

app.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor.");
});
```

Bu örnek, "/login" yoluna gelen "POST" request'ini ele alır ve içindeki JSON verileri işler. Kullanıcı adı ve şifre burada alınır ve giriş işlemi yapılır.
