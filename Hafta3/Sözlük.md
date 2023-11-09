## 0. Node js :

> Node.js, Google Chrome’un JavaScript V8 motoru üzerine yapılmış çok güçlü bir JavaScript tabanlı bir platformdur. Video akışı siteleri, tek sayfalık uygulamalar ve diğer web uygulamaları gibi I/O yoğun web uygulamalarını geliştirmek için kullanılır. Node.js açık kaynaktır ve tamamen ücretsizdir.

## 1. Node Js tarihi :

> Node.js, Ryan Dahl tarafından 2009 yılında ilk versiyonu geliştirilmiştir. Node.js’in ilk amacı hızlı ve ölçeklenebilir ağ uygulamaları oluşturmak için geliştirilmiş bir platformdur. Node.js, olay tabanlı (event-driven), hafif (lightweight) ve verimli, dağıtılmış cihazlarda çalışan veri yoğun gerçek zamanlı uygulamalar için çok iyi bir ortam sunar. Node.js, her ne kadar Javascript (istemci tarafında da kullanılır, tüm tarayıcıların ortak dili) kodları ile de olsa sunucu tarafında çalışır. Node.js’in en büyük avantajlarından biri JavaScript modüllerinden oluşan zengin bir kütüphane sunmasıdır.

## 3. Node.js en temel özellikleri :

> Eşzamansız (Asynchronous) ve Olay Tabanlı – Öncelikle eşzamanlı programlama hakkında bilgi verelim. Eşzamanlı programlamada, bir işlem başlattığınızda tüm işlem bitinceye kadar diğer istekler gönderilemez. Örneğin, kullanıcı bir dosya yüklemeye başladığında bu dosyanın sonuna kadar yüklenmesini beklemek zorundadır. Eşzamansız programlamada ise birden fazla işlem başlatılabilir. Buna eşzamansız veya engellenmemiş (non-blocking) programlama denir. İstemci sunucudan istekte bulunduğunda bir olay (event) bildirim mekanizması önceki istekten bir yanıt almasına yardımcı olur.

Web sunucusu üzerinden problemi karşılaştırmalı olarak biraz daha açalım. Bir web sunucusunun en temel görevi sunucuda bir dosyayı açmak ve içeriği istemciye göndermektir. Örneğin bir ASP veya PHP’ye yapılan bir dosya istemi nasıl yönetimine bakalım:

- Öncelikle bilgisayarın dosya sistemi bir görev yaratır.
- Dosya açılıp okununcaya kadar dosya sistemi bekler.
- Dosya okunduktan sonra bir metin dosyası üretilir.
- İçerik istemciye gönderilir.
- Diğer istemi yönetmek için dosya sistemi hazırdır.
- Şimdi aynı olaya bir de Node.js tarafından bakalım.

Şimdi aynı olaya bir de Node.js tarafından bakalım.

- Bilgisayarın dosya sistemi bir görev yaratır.
- Diğer istemler için dosya sistemi hazırdır.
- Dosya sistemi dosyayı açıp okumaya başladığında, sunucu istemciye cevap gönderir.
- Node.js beklemeyi elimine eder, ve diğer isteklere devam eder.

Çok hızlı – Google Chrome Javascript V8 motoru sayesinde çok hızlı kod çalıştırmayı sağlar.

Tek Kanallı (Single Threaded) ancak Yüksek Ölçeklenebilir – Node.js, olay (event) döngüsüyle tek kanalı bir model kullanır. Etkinlik mekanizması sunucunun eşzamansız yanıt vermesine yardımcı olur ve sunucu istekleri işlemek için sınırlı iş parçacıkları oluşturan geleneksel sunuculara kıyasla çok ölçeklenebilir hale getirir. Node.js, tek bir iş parçacıklı program kullanır ve aynı program genelsel Apache HTTP Sunucusu gibi sunuculara göre çok daha fazla sayıda istekte bulunabilir.

Arabellek Yok – Node.js uygulamaları herhangi bir veriyi hiçbir zaman arabelleğe almıyor. Bu uygulamalar basitçe verileri parçalara ayırır.

License − Node.js, MIT lisansa sahiptir.
![node](/assets/img.png)

## 4.Node.js Kavramları :

![node](/assets/img2.jpg)

## 5. Node Paket Yöneticisi (npm) :

JavaScript programlama dilinde yaygın olarak kullanılan bir paket yönetim sistemidir. npm, JavaScript projeleri için harici kütüphaneleri (paketleri) kolayca yönetmenize, yüklemenize ve güncellemenize olanak tanır. Node.js tarafından desteklenen ve birçok JavaScript geliştiricisi tarafından kullanılan bir araçtır.

İşte npm'in temel işlevleri ve kullanım alanları:

npm kullanmak için aşağıdaki temel komutları kullanabilirsiniz:

- npm install paket_adı: Belirtilen paketi yükler.
- npm install -g paket_adı: Belirtilen paketi global olarak yükler (genellikle komut satırı araçları için kullanılır).
- npm update paket_adı: Belirtilen paketi günceller.
- npm init: Bir yeni proje için package.json dosyası oluşturur ve projenizin temel bilgilerini tanımlamanıza olanak tanır.
- npm start: package.json'da tanımlanan "start" script'ini çalıştırır.
- npm, JavaScript projelerinizi daha verimli bir şekilde yönetmenizi sağlar ve binlerce farklı paket ve kütüphane sunar, bu nedenle JavaScript geliştiricileri için önemli bir araçtır.

## 6. package.json – Npm

bir Node.js projesinin ana konfigürasyon dosyasıdır. Bu dosya, projenin bağımlılıklarını, versiyonlarını, proje adını, açıklamasını ve daha fazlasını içeren JSON (JavaScript Object Notation) biçiminde bir dosyadır. package.json, Node.js projelerinin nasıl çalıştırılacağı ve ne tür işlemler yapılacağı hakkında da bilgi içerebilir.

package.json, Node.js projelerini daha iyi yönetmek ve dağıtmak için çok önemlidir. Ayrıca, projenin başka geliştiriciler tarafından kullanılması veya işbirliği yapılması durumunda, projenin gereksinimlerini ve yapılandırmasını tanımlar. Proje klasörünüzde package.json dosyası yoksa, npm init komutuyla bir tane oluşturabilirsiniz. Oluşturulan bu dosyayı daha sonra paketlerin eklenmesi ve projenin yapılandırılması için kullanabilirsiniz.

```json
{
  "name": "my-node-project",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "mocha": "^8.4.0",
    "chai": "^4.3.4"
  }
}
```

Bu örnek, bir Node.js projesinin package.json dosyasını temsil eder. İşte bu dosyanın ana bölümlerinin açıklamaları:

- "name": Projenin adını tanımlar.
- "version": Proje sürümünü belirtir.
- "description": Proje hakkında kısa bir açıklama ekler.
- "main": Proje için ana giriş noktasını belirtir (genellikle index.js).
- "scripts": Özel komutlar ve görevlerin tanımlandığı bir bölümdür. Bu örnekte "start" ve "test" script'leri vardır.
- "author": Projenin yazarını veya geliştiricisini tanımlar.
- "license": Proje için kullanılan lisansı belirtir.
- "dependencies": Projede kullanılan harici bağımlılıkları listeler. Bu örnekte "express" ve "lodash" paketleri vardır.
- "devDependencies": Geliştirme sürecinde kullanılan harici bağımlılıkları listeler. Bu örnekte "mocha" ve "chai" geliştirme amaçları için kullanılır.

package.json dosyası, projenizin ihtiyaçlarını ve yapılandırmasını tanımlar. Bu örneği kendi projenize uyarlayabilirsiniz.
