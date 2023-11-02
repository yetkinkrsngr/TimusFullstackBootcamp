Bir zamanlar Uğur ve Ahmet adında iki arkadaş varmış. İkisi de bilgisayar programlamaya ilgi duyuyorlarmış. Bir gün, Uğur ve Ahmet, bir oyun yapmaya karar vermişler. Ancak, her ikisi de oyunlarının hızlı çalışmasını istiyorlarmış.

Uğur, oyunun kodunu yazarken, her işlemi sırayla yapmış. Yani, bir şeyi bitirmeden diğerine geçmemiş. Bu tür programlama, "sekron programlama" olarak adlandırılırmış. Her adımı bitirmeden diğerine geçtiği için, oyunun bazı kısımları diğerlerine göre daha yavaş çalışmış.

Ahmet ise farklı bir yaklaşım benimsemiş. Oyunun bazı bölümlerini eşzamanlı olarak çalıştırmış. Yani, bir işlem devam ederken diğer işlemlere de başlamış. Bu sayede, oyunun bazı kısımları daha hızlı çalışmış. Bu tür programlamaya "asekron programlama" denirmiş.

Uğur ve Ahmet, oyunlarını bitirdiklerinde fark etmişler ki, Ahmet'in kullandığı aseknron programlama sayesinde oyunları daha hızlı ve akıcı çalışıyor. Uğur da aseknron programlamayı öğrenmek istemiş.

Ahmet, Uğur'a aseknron programlamanın nasıl çalıştığını anlatmış. Aseknron programlamada, farklı işlemler bir arada çalışabilir ve bir işlem diğerinin tamamlanmasını beklemez. Bu, oyunlar gibi çoklu görevlerin aynı anda yürütülmesi gereken durumlarda çok faydalı olur.

Sonuç olarak, Uğur ve Ahmet, aseknron programlamanın gücünü keşfetmişler ve birlikte daha hızlı ve etkileyici oyunlar yapmışlar.

```javascript
function process1() {
  console.log("process1");
  setTimeout(() => {
    console.log("process2");
  }, 3000);
  console.log("process3");
}
process1();
```

```javascript
// Hikayeden esinlenerek oluşturulan oyun nesnesi
const game = {
  isRunning: false, // Oyunun çalışıp çalışmadığını kontrol etmek için bir bayrak
  players: [], // Oyuncuları saklamak için bir dizi

  // Oyuncu eklemek için bir işlev
  addPlayer(playerName) {
    const player = { name: playerName, score: 0 };
    this.players.push(player);
  },

  // Oyuncuların skorlarını eşzamanlı olarak artırmak için bir işlev
  async updateScores() {
    this.isRunning = true;

    // Oyuncu skorlarını eşzamanlı olarak artırma
    const promises = this.players.map(async (player) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          player.score += Math.floor(Math.random() * 10);
          resolve(player);
        }, 2000);
      });
    });

    // Tüm asenkron işlemleri beklemek
    const updatedPlayers = await Promise.all(promises);

    this.isRunning = false;

    return updatedPlayers;
  },
};

// Oyuncuları ekliyoruz
game.addPlayer("Uğur");
game.addPlayer("Ahmet");

// Oyuncu skorlarını güncelliyoruz
game.updateScores().then((updatedPlayers) => {
  updatedPlayers.forEach((player) => {
    console.log(`${player.name} adlı oyuncunun yeni skoru: ${player.score}`);
  });
});
```

> yukarıdaki örneği çalıştırdığımızda ise 1-3-2 diye işlemler tamamlanıcaktır. Diyelimki oyunumuzda process 1 diye giriş kısmı process2 diye oyuncu davranışlarını kaydetdiğimiz bir alan process3 ile diğer oyuncuları oyuncumuzla bir araya getirdiğimiz bir interface mevcut oyuncumuz kendi karakteristik özelliğini oyun süresinde sıkılacağı için bu durumda asekron yaklaşım daha uygundur.

Ama yukarıdaki işlemleri Asektron bir hale getirmek istersek :

```javascript
async function process2() {
  console.log("process1");
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("process2");
      resolve();
    }, 3000);
  });
  console.log("process3");
}

process2();
```
