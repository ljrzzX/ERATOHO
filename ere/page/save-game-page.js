// 游戏保存页面
const era = require('#/era-electron');

async function save_game_page() {
  let save_game_page_flag = true;
  while (save_game_page_flag) {
    await era.clear();
    const buffer = [];
    buffer.push({ config: { content: '保存游戏' }, type: 'divider' });
    // 绘制存档栏位
    for (let i = 1; i <= 10; ++i) {
      const comment = era.get(`global:saves:${i}`);
      buffer.push(
        {
          accelerator: i,
          config: { width: 20 },
          content: comment || '空栏位',
          type: 'button',
        },
        {
          accelerator: i + 100,
          config: {
            align: 'right',
            disabled:
              comment === undefined || comment.startsWith('(FILE LOST) '),
            width: 4,
          },
          content: '改名',
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
      save_game_page_flag = false;
    } else if (ret > 100) {
      const savIndex = ret - 100;
      let comment;
      const cur_line = era.getLineCount();
      do {
        await era.clear(era.getLineCount() - cur_line);
        era.print('请输入新存档名（不超过10个字符）');
        comment = (await era.input()).toString();
        // 检查comment的长度是否超出10个字符
      } while (comment.length > 10);
      era.set(`global:saves:${savIndex}`, comment);
      // 保存通用公共存档到global.sav
      await era.saveGlobal();
    }
    else {
      const comment = era.get(`global:saves:${ret}`);
      if (comment !== undefined && !comment.startsWith('(FILE LOST) ')) {
        era.print('该栏位已存在存档！是否覆盖？');
        era.printButton('是', 1);
        era.printButton('否', 2);
        if ((await era.input()) === 2) {
          continue;
        }
      }
      await era.saveData(ret, '存档 ' + ret);

    }
  }
}

module.exports = save_game_page;
