// #/menu.js

const era = require('#/era-electron');

async function showTitleMenu() {
  await era.clear();
  era.setAlign('center');
  era.drawLine({ isSolid: true });
  era.print('Eratrain');
  era.print(`v${era.get('gamebase').version / 1000}`);
  era.print('KaoyuC777');
  era.drawLine({ isSolid: true });
  era.printButton('开始游戏', 1);
  era.printButton('加载存档', 2);
  era.printButton('鸣谢列表', 3);
  era.drawLine({ isSolid: true });
  era.setAlign('left');
  return await era.input({ hideInput: true });
}

async function showCreditsMenu() {
  const curr_line = era.getLineCount();
  let copyright_flag = true;
  while (copyright_flag) {
    era.setAlign('center');
    era.drawLine({ isSolid: true });
    era.printButton('开发人员', 1);
    era.printButton('口上作者', 2);
    era.printButton('社区维护', 3);
    era.printButton('回到标题', 4);
    era.drawLine({ isSolid: true });
    era.setAlign('left');
    const ret = await era.input();
    era.setAlign('center');
    switch (ret) {
      case 1:
        await era.printAndWait('这里是开发人员列表');
        break;
      case 2:
        await era.printAndWait('这里是口上作者列表');
        break;
      case 3:
        await era.printAndWait('这里是社区维护列表');
        break;
      case 4:
        copyright_flag = false;
        break;
    }
    if (ret < 4) {
      await era.clear(era.getLineCount() - curr_line);
    }
    era.setAlign('left');
  }
}

module.exports = { showTitleMenu, showCreditsMenu };
