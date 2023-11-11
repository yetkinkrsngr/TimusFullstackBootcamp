# JWT :

> JWT (JSON Web Token), bilgileri güvenli bir şekilde taşımak için kullanılan bir standarttır. JWT, başlık (header), yük (payload), ve imza (signature) olmak üzere üç ana bölümden oluşur.

## Header :

> Algoritma ve token Türü içeren kısım

```json
{
  "alg": "HS256", // Kullanılan algoritma (örneğin HMAC SHA-256)
  "typ": "JWT" // Token türü (JSON Web Token)
}
```

## Payload :

> Payload, gerçek veri taşıyan kısımdır. Kullanıcıya ait bilgiler, haklar (claims), ve diğer isteğe bağlı verileri içerir. Payload da JSON formatında ifade edilir:

```json
{
  "sub": "1234567890", // Alt konu (subject): Kimliği doğrulanacak kullanıcının benzersiz kimliği
  "name": "John Doe",
  "iat": 1516239022 // Oluşturulma tarihi (issued at)
}
```

## Signature :

> İmza, başlık ve yük kısmının belirli bir algoritma kullanılarak şifrelenip güvence altına alındığı kısımdır. İmza, paylaşılan bir sır (secret) veya genel/özel anahtar çifti kullanılarak oluşturulur. İmza oluşturulurken başlık, yük, ve sır kullanılır. İmzanın doğrulanması, JWT'nin bütünlüğünü sağlar.

```json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

npm i express jsonwebtoken body-parser paketlerimizi yükledik.

Sorular :

1. Token ??
