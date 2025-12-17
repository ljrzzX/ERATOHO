
/**
 * @file 小红 - 日常
 * @author KaoyuC777
 */
const era = require('#/era-electron');

const CustomizedLines = require('#/event/lines-common');

// 小红对应的口上继承类
// 因为其他地方暂时用不到这个类，所以直接以匿名类导出
module.exports = class extends CustomizedLines {
  async talk() {
    await era.printAndWait([this.callname, ' 分享了一些好玩的事情。']);
  }
};
