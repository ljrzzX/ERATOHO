// #/page/page-getup.js

const era = require('#/era-electron');
const { run_custom_lines } = require('#/event/lines-factory');
const hooks = require('#/data/event/hooks');
const Erachara = require('#/era-utils/era-chara')
const era_flag = require('#/era-utils/era-flag')
const sys_get_random_event = require('#/sys/sys-get-random-event');
const page_ero = require('#/page/page-ero');

/** 起床页面，包含聊天菜单按钮 */
async function page_getup() {
  let page_getup_flag = true;
  while (page_getup_flag) {
    await era.clear();
    const cur = Erachara.get(era_flag.cur_chara);
    era.printMultiColumns([
      {
        config: { align: 'center', width: 4 },
        content: cur.callname,
        type: 'text',
      },
      {
        config: { width: 20 },
        content: `好感度：${cur.relation_to(0)}`,
        type: 'text',
      },
    ]);
    era.drawLine();

    era.drawLine({ content: '角色' });
    era.printMultiColumns(
      era.getAddedCharacters().filter((id) => id !== 0).map((id) => ({
        accelerator: id,
        config: {
          align: 'center',
          buttonType: id === era_flag.cur_chara ? 'warning' : 'info',
          width: 8,
        },
        content: Erachara.get(id).callname,
        type: 'button',
      })),
    );
    const buffer = [
      { config: { content: '起床菜单' }, type: 'divider' },
      { accelerator: 100, content: '聊天', type: 'button' },
      { accelerator: 102, content: '开始调教', type: 'button' },
      { accelerator: 101, content: '查看背包', type: 'button' },
      { accelerator: 999, content: '返回', type: 'button' },
    ];
    era.printMultiColumns(buffer);
    era.drawLine();

    const choice = await era.input();
    switch (choice) {
      case 999:
        page_getup_flag = false;
        break;
      case 100:
        era.drawLine();
        if (!(await sys_get_random_event(hooks.talk)())) {
          await run_custom_lines(era_flag.cur_chara, hooks.talk);
        }
        break;
      case 101:
        await era.printAndWait('背包暂无实现。');
        break;
      case 102:
        await page_ero();
        break;
      default:
        era_flag.cur_chara = choice;
        await era.printAndWait(`已切换当前角色为 ${Erachara.get(era_flag.cur_chara).callname}`);
        break;
    }
  }
}

module.exports = page_getup;
