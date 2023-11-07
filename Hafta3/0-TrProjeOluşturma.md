# node :

> js javascript v8 motoru üzerinde çalışan bir programlama dilidir.
> kurulumu yapıldıktan sonra node --version ile version kontrol edilir.
> npm: node paket yönetici.
> node -- help node yardım komutudur.

### Sırayla aşağıdaki komutlar çalıştırılır

1. npm init
   package name: (node) patika
   version: (1.0.0) description:  
    entry point: (try.js)  
    test command:  
    git repository:  
    keywords:
   author:  
    license: (ISC)  
    gibi komutlar gelicektir bunlar package json içeriği olup bir Node js projesinin kök dizininde bulunan bağımlılıklarını , betiklerini ve diğer önemli bilgileri tanımlayan bir konfigürasyon dosyasıdır. işte bu örnekte anahtarların açıklamaları

   - `name` (paket adı):
     version (Sürüm): Bu, paketinizin sürüm numarasını belirtir. Tipik olarak "Ana.Sanayi.Minör" formatında bir sürüm numarasıdır.

   - `description` (Açıklama): Bu, paketinizin kısa bir açıklamasını içerir. Paketin ne yaptığını veya amaçlandığını özetler.

   - `entry point` (Başlangıç Noktası): Bu, paketinizin ana uygulama dosyasının yolunu belirtir. Genellikle index.js veya projenin ana dosyasıdır.

   - `test command` (Test Komutu): Bu, testlerinizi çalıştırmak için kullanılan komutu belirtir. Boş bırakıldığında, varsayılan test komutu kullanılır.

   - `git repository` (Git Deposu): Paketinizin kaynak kodunun barındırıldığı Git deposunun URL'sini belirtir.

   - `keywords` (Anahtar Kelimeler): Paketinizi tanımlamak için kullanabileceğiniz anahtar kelimelerin bir listesini içerir.

   - `author` (Yazar): Paketin yazarının adını ve iletişim bilgilerini içerebilir.

   - `license` (Lisans): Paketinizin hangi lisans altında yayımlandığını belirtir. ISC, genellikle kullanılan bir açık kaynak lisansıdır, ancak farklı lisanslar da seçilebilir.

> Bu anahtarlar, Node.js projenizin konfigürasyonunu tanımlayan ve projenin nasıl çalıştığını, test edildiğini ve kullanıldığını açıklayan önemli bilgileri içerir. Paketinizin gereksinimlerini ve kullanımını yönetmek için package.json dosyasını kullanabilirsiniz.

2.  npm install express --save : express paketini yükler.

> Express.js, Node.js tabanlı bir web uygulama çerçevesidir. Node.js, sunucu tarafı uygulamaları geliştirmek için kullanılan hızlı ve olaya dayalı bir çalışma zamanıdır. Express.js ise Node.js'yi daha verimli ve kullanıcı dostu hale getirmek için tasarlanmış bir web uygulama çerçevesidir.

> Express.js'in başlıca özellikleri şunlardır:

- Hızlı ve Minimal: Express, temel web uygulama işlevlerini kolayca sağlayan basit ve hafif bir çerçevedir. Karmaşıklık eklemek istediğinizde kolayca özelleştirilebilir.
- Yönlendirme: Express, URL'leri belirli işlevlere yönlendirmenizi sağlar. Bu, farklı sayfaları ve işlemleri işlemek için çok sayıda işlev eklemeye gerek kalmadan web uygulamasını organize etmenizi sağlar.

- Orta Katman (Middleware): Express, isteği işlemek ve yanıtı oluşturmak için kullanılan bir dizi ara yazılım (middleware) işlevine sahiptir. Bu, isteği işlerken çeşitli işlemleri eklemenizi veya değiştirmenizi sağlar.

- Şablon Motorları: Express, HTML görünümlerini oluşturmak için kullanabileceğiniz çeşitli şablon motorlarına (örneğin, EJS, Pug, Handlebars) destek sağlar.

- Statik Dosya Sunumu: Express, statik dosyaları (örneğin, CSS, JavaScript, resimler) sunmak için basit bir yol sağlar.

- Veritabanı Erişimi: Express, farklı veritabanlarına erişmek için kullanabileceğiniz çeşitli modüllere ve bağlantılara olanak tanır. Bu, verileri veritabanından çekmek veya veritabanına kaydetmek için kullanılır.

- Güvenlik: Express, web uygulamalarını güvenli hale getirmek için çeşitli güvenlik önlemlerini uygulamanıza yardımcı olacak araçlar sunar. Örneğin, CSRF saldırılarına karşı koruma veya oturum yönetimi gibi güvenlik önlemlerini kolayca entegre edebilirsiniz.

> Express.js, web uygulamaları geliştirmek için oldukça popüler bir seçenektir. Node.js'nin hızı ve olay tabanlı doğasıyla birleştiğinde, hızlı ve verimli web uygulamaları geliştirmenize olanak tanır. Express.js ayrıca geniş bir topluluğa ve belgelerin yanı sıra bir dizi üçüncü taraf eklentiye de sahiptir, bu da geliştirme sürecinizi kolaylaştırır.

3. npm install nodemon --save-dev : nodemon paketini yükler.

Nodemon, Node.js uygulamalarını geliştirirken geliştirme sürecinizi daha verimli hale getirmek için kullanılan bir araçtır. Nodemon, Node.js uygulamanızın kaynak kodunda yapılan değişiklikleri izler ve otomatik olarak sunucuyu yeniden başlatır, böylece her değişiklik sonrasında manuel olarak sunucuyu yeniden başlatmanıza gerek kalmaz.

Nodemon'in bazı özellikleri şunlardır:

1. Otomatik Yeniden Başlatma: Nodemon, proje dosyalarını izler ve herhangi bir değişiklik algılandığında uygulamayı yeniden başlatır. Bu, kodunuzu düzenlerken sürekli olarak sunucuyu manuel olarak yeniden başlatmanız gerekmediği anlamına gelir.

2. Esneklik: Nodemon, izlenecek dosya türlerini ve hangi dosyaların değişikliklere yanıt vereceğini yapılandırmanıza olanak tanır. Bu, istediğiniz dosyaları izleyip yeniden başlatmayı kontrol etmenize yardımcı olur.

3. Özelleştirilebilirlik: Nodemon, çalıştırılacak komutu ve uygulama başlatma seçeneklerini yapılandırmanıza izin verir. Bu, uygulamanızın özel gereksinimlerine uyarlanabilir.

4. Uygulama Bağımsızlığı: Nodemon, herhangi bir Node.js uygulamasıyla kullanılabilir. Express.js, Koa, Hapi, veya herhangi bir Node.js tabanlı uygulama ile birlikte kullanılabilir.

> Nodemon, geliştirme sürecini hızlandırmak ve daha verimli hale getirmek için oldukça popüler bir araçtır. Değişikliklerin hızlı bir şekilde test edilmesini ve geliştirilmiş bir deneyim sunar. Geliştiriciler, kodlarını düzenlerken ve uygulamalarını geliştirirken Nodemon'i kullanarak sürekli sunucuyu manuel olarak yeniden başlatma ihtiyacını azaltabilirler.

ama dikkat edilmesi bir nokta mevcut oda express sürümünü npm install express --save derken nodemon npm install nodemon --save-dev olarak kaydettik bu ise

```json
   "dependencies": {
   "express": "^4.18.2"
   },
   "devDependencies": {
   "nodemon": "^3.0.1"
   }
```

sebeb oldu çünkü nodemon her değişilik ve kayıtta servere baştan başlatır. biz ise developer dependicty ile sadece developer yapıttığı değişiklikte buna izin vermesini istiyoruz

```javascript
// 'express' modülünü projeye ekleyin ve onu 'express' değişkenine atayın.
const express = require("express");

// Express uygulamasını başlatın ve 'app' değişkenine atayın.
const app = express();

// HTTP GET isteğini işleyin. İlk argüman, URL yolunu belirtir ("/" anasayfa yolu) ve ikinci argüman bir işlevdir.
app.get("/", function (req, res) {
  // Tarayıcıya "Merhaba Dünya" yanıtını gönderin.
  res.send("Merhaba Dünya");
});

// Uygulamayı belirtilen port numarasında dinlemeye başlayın (örneğin, 3000).
app.listen(3000);
```

express modülünü içe aktarıyoruz. Bu modül, HTTP isteklerini işlemek ve web sunucusu oluşturmak için kullanılır.
express() fonksiyonunu çağırarak bir Express uygulaması oluşturuyoruz ve bu app değişkeni web uygulamamızı temsil eder.

Kök yolu ("/") için HTTP GET isteklerini işlemek üzere bir yol tanımlıyoruz. Geri çağrı fonksiyonunda, kullanıcı kök yolu ziyaret ettiğinde ne olacağını belirtiyoruz. Bu durumda, yanıt olarak "Merhaba Dünya" ifadesini istemciye gönderiyoruz.

Son olarak, sunucumuzu başlatıyoruz ve app.listen(3000) kullanarak 3000 portunda dinlemesini sağlıyoruz. Bu, web uygulamanızın tarayıcınızda http://localhost:3000 adresinden erişilebilir olacağı anlamına gelir.

---

    ## http metotları :

    1. GET: Belirtilen kaynağın (URL) verilerini almak için kullanılır. GET isteği, sunucudan veriyi alır, ancak sunucuda herhangi bir değişiklik yapmaz. Web sayfalarının görüntülenmesi genellikle GET istekleri ile gerçekleşir.

    2. POST: Veri sunucuya gönderilir. POST, sunucuda yeni bir kaynak oluşturmak veya mevcut bir kaynağı güncellemek için kullanılır. Kullanıcı adı ve şifre gibi hassas bilgiler, POST ile sunucuya gönderilir.

    3. PUT: Belirtilen URL'de belirli bir kaynağı oluşturur veya günceller. Eğer belirtilen URL zaten varsa, mevcut kaynağı günceller; aksi takdirde yeni bir kaynak oluşturur.

    4. DELETE: Belirtilen kaynağı silmek için kullanılır. Sunucu, belirtilen URL'deki kaynağı kaldırır. DELETE işlemi kalıcıdır, yani silinen veri geri getirilemez.

    ---

    ## http statüsleri:

    1xx: Bilgi
    2xx: Başarılı
    3xx: Yönlendirme
    4xx: İstemci Hatası
    5xx: Sunucu Hatası

    ## Parametreler (Route Parametreleri):

    - Route parametreleri, URL'nin belirli bir bölümüne gömülüdür ve genellikle dinamik URL yollarıyla kullanılır.
    - URL içinde belirli bir yere (`/:id` gibi) yerleştirilirler ve bu değerler URL içinde değişebilir.
    - Route parametreleri, URL yolu içinde belirli bir yapıyı temsil eder. Örneğin, bir kullanıcının profil sayfasını gösteren URL: `/users/:userId`.
    - Route parametreleri, URL yolu içinde bir özelliğin (örneğin, kullanıcı kimliği veya ürün kimliği) değerini temsil etmek için kullanılır.
    - Örnek bir URL: `/users/123`, burada `123` bir route parametresi olur ve kullanıcı kimliğini temsil eder.
    - Express.js gibi web çerçevelerinde, route parametreleri `req.params` nesnesi içinde erişilebilir.

    ## Sorgu Parametreleri (Query Parametreleri):

    - Sorgu parametreleri, URL'nin sonunda `?` işareti ile başlar ve anahtar-değer çiftleri şeklinde gelir.
    - URL içindeki sorgu parametreleri, isteğin belirli bir işlemi veya sayfayı nasıl göstermesi gerektiğini ayarlamak için kullanılır.
    - Sorgu parametreleri, belirli bir sayfanın veya işlemin belirli bir durumunu veya filtresini ayarlamak için kullanılır. Örneğin, sayfa numarası, sıralama seçenekleri, filtreleme kriterleri vb.
    - Örnek bir URL: `/products?category=electronics&sort=price`, burada `category` ve `sort` sorgu parametreleridir.
    - Express.js gibi web çerçevelerinde, sorgu parametreleri `req.query` nesnesi içinde erişilebilir.
