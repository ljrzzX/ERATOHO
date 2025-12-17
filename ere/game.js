const era = require('#/era-electron');
const homepage = require('./page/home-page');
const load_game_page = require('./page/load-game-page');
const { init_queue } = require('#/sys/sys-event-queue');

async function startGame() {
  // 点击【开始游戏】时，重置当前存档并进入 homepage
  era.resetData();
  era.addCharacter(1, 2);
  // 初始化事件队列，让队列跟随存档
  init_queue();
  era.set('relation:1:0', 0);
  era.set('relation:2:0', 0);
  era.set('flag:当前角色', 1);
  era.print('\n游戏开始！\n');
  era.drawLine({ isSolid: true });
  era.print('欢迎来到Eratrain的世界！');
  era.drawLine({ isSolid: true });
  await homepage();
};

async function loadGame() {
  return await load_game_page();
}

module.exports = { startGame, loadGame };