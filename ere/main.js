// #/main.js

const menu = require('./menu');
const game = require('./game');
const home_page = require('./page/homepage');

module.exports = async () => {
  let gameFlag = true;
  while (gameFlag) {
    const choice = await menu.showTitleMenu();
    if (choice === 1) {
      await game.startGame();
    } else if (choice === 2) {
      if (await game.loadGame()) {
        await home_page();
      }
    } else if (choice === 3) {
      await menu.showCreditsMenu();
    }
  }
};
