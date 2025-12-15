const era = require('#/era-electron');
const homepage = require('./page/home-page');
const load_game_page = require('./page/load-game-page');

async function startGame() {
  era.resetData();
  era.print('\n游戏开始！\n');
  era.drawLine({ isSolid: true });
  era.print('欢迎来到Eratrain的世界！');
  era.drawLine({ isSolid: true });
  await homepage();
};

async function loadGame() {
  return await load_game_page();
}

module.exports = { startGame , loadGame };