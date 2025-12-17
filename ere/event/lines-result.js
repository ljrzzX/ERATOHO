const era = require('#/era-electron');

const event_hooks = require('#/data/event/hooks');

// 导出一个对象，放置所有指令的通用处理
// [event_hooks.talk] 是取值，例如 event_hooks.talk，则这个函数最后导出的时候名字就会是 '0'
module.exports = {
  /** @param {number} id */
  async [event_hooks.talk](id) {
    era.println();
    era.add(`relation:${id}:0`, 1);
    await era.printAndWait([
      '和 ',
      era.get(`callname:${id}:-2`),
      ' 的好感度上升了 1 点……',
    ]);
  },
};
