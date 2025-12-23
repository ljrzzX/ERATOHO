// #/event/lines-factory.js

const CustomizedLines = require('#/event/lines-common');
const lines_result = require('#/event/lines-result');

const LineArg = require('#/data/event/line-arg');
const hooks = require('#/data/event/hooks');

const cons_dict = {};

cons_dict[1] = require('#/event/lines-1');
cons_dict[2] = require('#/event/lines-2');

const obj_dict = {};

/**
 * 通用入口函数之一，返回角色ID对应的实例化继承类，或者实例化的基类<br>
 * 因为 run_custom_lines 也要用到，所以这里提取出来在前面定义，然后在对象里用名字声明为导出对象的属性
 *
 * @param {number} id
 * @returns {CustomizedLines}
 */
function get_custom_lines(id) {
  if (!obj_dict[id]) {
    obj_dict[id] = new (cons_dict[id] || CustomizedLines)(id);
  }
  return obj_dict[id];
}

module.exports = {
  get_custom_lines,
  /**
   * 通用入口函数之二，会根据 hook 对应的枚举值直接调用口上对象中的相应口上方法，
   * 并且根据 arg.result 决定是否要执行通用处理
   *
   * @param {number} id 角色的ID
   * @param {number} hook 指令的枚举值
   * @param {EventObject} [event] 事件对象，可能是空的
   * @returns {Promise<boolean|void>} 随机事件系统改动：供随机事件系统用的返回值，如果是 true 则表示要跳过正常的口上运行流程
   */
  async run_custom_lines(id, hook, event) {
    const obj = get_custom_lines(id);
    const arg = new LineArg();
    let ret;
    // 随机事件系统改动：如果不是随机事件的可执行版本，或者口上对象没有对应事件名的方法，就按照指令的枚举值调用口上方法
    if (event === undefined || obj[event.event] === undefined) {
      // 这里用 hooks.keys 获取枚举值对应的名字，然后获取口上对象中的对应口上方法
      // Function.call 是 JavaScript 中函数对象的内置方法，这里是为了防错，照抄就好
      const hook_name = hooks.keys[hook];
      await obj[hook_name].call(obj, arg, event);
    } else {
      // 随机事件系统改动：否则，就按照随机事件对象指定的事件名调用口上方法
      ret = await obj[event.event].call(obj, arg, event);
    }
    // 如果在角色口上对象的口上方法里没有设置 arg.result，就执行通用处理函数
    if (arg.result) {
      // 这里直接使用枚举值
      // 口上类里用枚举值的名字是因为用枚举值的话一些 IDE 不会正确提示重载关系
      await lines_result[hook](id);
    }
    return ret;
  },
};


