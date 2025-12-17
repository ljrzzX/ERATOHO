// 游戏加载页面
const era = require('#/era-electron');
const { init_queue } = require('#/sys/sys-event-queue');


async function load_game_page() {
  let load_game_page_flag = true;
  while (load_game_page_flag) {
    await era.clear();
    const buffer = [];
    buffer.push({ config: { content: '读取游戏' }, type: 'divider' });
    for (let i = 0; i <= 10; ++i) {
      const comment = era.get(`global:saves:${i}`);
      buffer.push(
        {
          accelerator: i,
          config: {
            disabled: comment === undefined || comment.startsWith('(FILE LOST) '),
            width: 20,
          },
          content: comment || '空栏位',
          type: 'button',
        },
        {
          accelerator: i + 100,
          config: {
            align: 'right',
            disabled: comment === undefined,
            width: 4,
          },
          content: '删除',
          type: 'button',
        },
      );
    }
    buffer.push(
      { type: 'divider' },
      {
        accelerator: 999,
        content: '返回',
        type: 'button',
      },
    );
    era.printMultiColumns(buffer);
    const ret = await era.input();
    if (ret === 999) {
      load_game_page_flag = false;
    } else if (ret >= 100) {
      const savIndex = ret - 100;
      era.print(`是否删除栏位 ${savIndex} 的存档？`);
      era.printButton('是', 1);
      era.printButton('否', 2);
      if ((await era.input()) === 1) {
        await era.rmData(savIndex);
      }
    } else if (await era.loadData(ret)) {
      // 这里可以插入对旧版本存档的修复
      // 随机事件系统改动：初始化事件队列，让队列跟随存档
      init_queue();
      // 只有在读档成功的情况下才返回
      return true;

    }
  }
  // 通过返回值告诉入口的交互逻辑是否读档成功
  return false;

}

module.exports = load_game_page;