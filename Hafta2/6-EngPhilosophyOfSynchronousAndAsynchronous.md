Once upon a time, there were two friends named Uğur and Ahmet. Both of them had an interest in computer programming. One day, Uğur and Ahmet decided to create a game. However, they both wanted their game to run fast.

> Uğur, while writing the code for the game, did each task sequentially. In other words, he didn't move on to the next one until he finished the current task. This type of programming is called "synchronous programming." Because he completed each step before moving on to the next, some parts of the game ran slower than others.

> Ahmet, on the other hand, took a different approach. He executed certain parts of the game simultaneously. In other words, he started working on other tasks while one was still in progress. This allowed some parts of the game to run faster. This type of programming is known as "asynchronous programming."

> When Uğur and Ahmet completed their game, they noticed that thanks to Ahmet's use of asynchronous programming, their game ran faster and smoother. Uğur also wanted to learn asynchronous programming.

> Ahmet explained to Uğur how asynchronous programming worked. In asynchronous programming, different tasks can run together, and one task doesn't have to wait for the other to finish. This is particularly useful in situations where multiple tasks need to be performed simultaneously, such as in games.

> In the end, Uğur and Ahmet discovered the power of asynchronous programming and worked together to create faster and more impressive games.

If you want to make the above processes asynchronous, you can use the following code:

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

```javascript
// Game object inspired by the story
const game = {
  isRunning: false, // A flag to control if the game is running
  players: [], // An array to store players

  // Function to add a player
  addPlayer(playerName) {
    const player = { name: playerName, score: 0 };
    this.players.push(player);
  },

  // Function to update player scores asynchronously
  async updateScores() {
    this.isRunning = true;

    // Increase player scores asynchronously
    const promises = this.players.map(async (player) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          player.score += Math.floor(Math.random() * 10);
          resolve(player);
        }, 2000);
      });
    });

    // Wait for all asynchronous operations
    const updatedPlayers = await Promise.all(promises);

    this.isRunning = false;

    return updatedPlayers;
  },
};

// Add players
game.addPlayer("Uğur");
game.addPlayer("Ahmet");

// Update player scores
game.updateScores().then((updatedPlayers) => {
  updatedPlayers.forEach((player) => {
    console.log(`New score for player ${player.name}: ${player.score}`);
  });
});
```

In this code, the await keyword is used with a Promise to make the code asynchronous. The code within the await block will execute after the 3-second delay, making it an asynchronous operation. This allows "process3" to be logged after "process2" completes, without blocking the main execution thread.
