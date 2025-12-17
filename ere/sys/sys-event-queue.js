// #/sys/sys-event-queue.js
const EventObject = require('#/data/event/event-object');
const era_flag = require('#/era-utils/era-flag')

/**
 * 用来放事件队列的变量，通过 init 函数初始化<br>
 * Record 是一类 Object，Record 后面跟着的尖括号会带两个用半角逗号（,）分割的类型<br>
 * 第一个类型恒为 string，第二个类型指定了这个 Object 的属性值类型<br>
 * Record<string,EventObject[]> 表明这个 Object 的所有属性值都是 EventObject[] 类型
 *
 * @type {Record<string,EventObject[]>}
 */
let queue;

module.exports = {
  /**
   * 向相应的指令的队列添加一个事件对象<br>
   * 注意没添加过事件对象的队列还未设置，需要用 ||= [] 保证它一定是一个数组
   *
   * @param {number} hook 指令的枚举值，从 #/data/event/hooks 导出的枚举中取
   * @param {EventObject} event 要添加的事件对象
   */
  add_event(hook, event) {
    queue[hook] ||= [];
    queue[hook].push(event);
  },
  /**
   * 获取一个指令的队列里的第一个事件对象<br>
   * 一样要用 ||= [] 容错
   *
   * @param {number} hook 指令的枚举值，从 #/data/event/hooks 导出的枚举中取
   * @returns {EventObject}
   */
  get_random_event(hook) {
    queue[hook] ||= [];
    // Array.shift：将数组的第一个元素弹出返回，会改变原数组
    return queue[hook].shift();
  },
  // 初始化事件队列的函数，进入新游戏或者读档时需要调用一次，确保事件队列变量跟随存档
  init_queue() {
    // 新游戏状态下，flag:事件队列 是0，此时会执行 era.set('flag:事件队列', {})，将其中保存的值变成空对象再返回
    queue = era_flag.event_queue || (era_flag.event_queue = {});
    // 拿到 flag:事件队列 保存的对象后，其中的属性值应该都是数组，将所有数组中的事件对象用 EventObject.from_obj 转换成 EventObject
    for (const k in queue) {
      queue[k] = queue[k].map((e) => EventObject.from_obj(e));
    }
  },
};
