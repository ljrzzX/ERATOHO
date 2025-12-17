
/**
 * @file 小青 - 日常
 * @author KaoyuC777
 */
const era = require('#/era-electron');

const { add_event } = require('#/sys/sys-event-queue');

const CustomizedLines = require('#/event/lines-common');

const hooks = require('#/data/event/hooks');
const EventObject = require('#/data/event/event-object');

// 小青对应的口上继承类
// 因为其他地方暂时用不到这个类，所以直接以匿名类导出
module.exports = class extends CustomizedLines {
  // 随机事件的口上方法
  async interrupt(arg) {
    await era.printAndWait([this.callname, ' 打断了聊天。']);
    arg.result = false;
    era.println();
    era.add(`relation:${this.id}:0`, 10);
    await era.printAndWait(['和 ', this.callname, ' 的好感度上升了 10 点……']);
    // 通过返回 true 打断后续的口上执行
    return true;
  }

  async talk(arg) {
    await era.printAndWait([this.callname, ' 简单说了下自己的见闻。']);
    arg.result = false;
    era.println();
    const relation = era.add(`relation:${this.id}:0`, 2);
    await era.printAndWait(['和 ', this.callname, ' 的好感度上升了 2 点……']);
    // 检查小青的好感度是否高于10点，如果是则向 hooks.talk 对应的队列中添加一个随机事件，并用随机事件对象的属性指定口上方法 interrupt
    if (relation >= 10) {
      const event = new EventObject(this.id);
      event.event = 'interrupt';
      add_event(hooks.talk, event);
    }
  }
};

