// #/page/home-page.js

// 游戏主界面
const era = require('#/era-electron');
const page_save_game = require('#/page/page-save-game');
const page_load_game = require('#/page/page-load-game');
const page_shop = require('#/page/page-shop');
const page_getup = require('#/page/page-getup');

async function homepage() {
  let homepage_flag = true;
  while (homepage_flag) {
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
      case 100:
        await page_getup();
        break;
      case 101:
        await era.printAndWait('能力表示暂无实现。');
        break;
      case 102:
        await era.printAndWait('收藏暂无实现。');
        break;
      case 103:
        const items = [
          ...new Array(8).fill(0).map((_, i) => i),
          {id: 8, limit: true},
        ]
        await page_shop(items);
        break;
      case 200:
        await page_save_game();
        break;
      case 300:
        await page_load_game();
        break;
      case 500:
        homepage_flag = false;
        break;
    }
  }
}

module.exports = homepage;
