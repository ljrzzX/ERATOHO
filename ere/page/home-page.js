// 游戏主界面
const era = require('#/era-electron');
const save_game_page = require('./save-game-page');
const load_game_page = require('./load-game-page');
const shop_page = require('./shop-page');

async function homepage() {
  let homePageFlag = true;
  while (homePageFlag) {
    await era.clear();
    era.drawLine({ content: '游戏主界面' });
    // 第一行：基本功能（100/101/102/103/104）
    era.printMultiColumns([
      { accelerator: 100, config: { align: 'center', width: 4 }, content: '起床', type: 'button' },
      { accelerator: 101, config: { align: 'center', width: 4 }, content: '能力表示', type: 'button' },
      { accelerator: 102, config: { align: 'center', width: 4 }, content: '查看收藏', type: 'button' },
      { accelerator: 103, config: { align: 'center', width: 4 }, content: '道具商店', type: 'button' },
      { accelerator: 104, config: { align: 'center', width: 4 }, content: '設定', type: 'button' },
    ]);

    // 第二行：系统功能（200/300/400/500）
    era.printMultiColumns([
      { accelerator: 200, config: { align: 'center', width: 5 }, content: '保存进度', type: 'button' },
      { accelerator: 300, config: { align: 'center', width: 5 }, content: '加载存档', type: 'button' },
      { accelerator: 400, config: { align: 'center', width: 5 }, content: '游戏选项', type: 'button' },
      { accelerator: 500, config: { align: 'center', width: 5 }, content: '返回标题', type: 'button' }
    ]);

    const choice = await era.input({ hideInput: true });
    switch (choice) {
      case 103:
        const items = [
          ...new Array(8).fill(0).map((_, i) => i),
          {id: 8, limit: true},
        ]
        await shop_page(items);
        break;
      case 200:
        await save_game_page();
        break;
      case 300:
        await load_game_page();
        break;
      case 500:
        homePageFlag = false;
        break;
    }
  }
}

module.exports = homepage;
