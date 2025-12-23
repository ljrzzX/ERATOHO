// #/event/lines-common.js

const era = require('#/era-electron');

// 口上基类，主要实现地文
class CustomizedLines {
  /**
   * 角色编号
   * @type {number}
   */
  id;

  /**
   * 角色真名
   * @type {string}
   */
  name;

  /**
   * 角色的默认称呼
   * @type {string}
   */
  callname;

  /** @param {number} id */
  constructor(id) {
    this.id = id;
    this.name = era.get(`callname:${this.id}:-1`);
    this.callname = era.get(`callname:${this.id}:-2`);
  }

  /**
  *【聊天】对应的口上方法，声明一下接收 LineArg 类型的参数 arg，
  * 不然重载方法也接受不到参数
  *
  * @param {LineArg} arg
  */
  // eslint-disable-next-line no-unused-vars
  async talk(arg) {
    await era.printAndWait(['和 ', this.callname, ' 寒暄了一会……']);
  }

  // 【切换口上】对应的口上方法
  async switch() {
    await era.printAndWait('并无多口上……');
  }

}

module.exports = CustomizedLines;