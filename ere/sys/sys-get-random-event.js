// #/sys/sys-get-random-event
const { get_random_event } = require('#/sys/sys-event-queue');

const { run_custom_lines } = require('#/event/lines-factory');

/**
 * 从指令的队列里获取一个随机事件，然后转换成可执行的异步函数对象并返回<br>
 * 这里用异步函数对象的返回值表示是否跳过后续正常的口上输出
 *
 * @param hook 指令的枚举值
 * @returns {function:Promise<boolean|void>} 随机事件的可执行版本，是一个函数对象，注意返回值是 Promise<boolean|void>
 */
function sys_get_random_event(hook) {
  const event = get_random_event(hook);
  // 如果没有随机事件可以触发，返回一个空的异步函数对象，不然在执行的地方会报错
  if (event === undefined) {
    return async () => false;
  }
  return () => run_custom_lines(event.chara_id, hook, event);
}

module.exports = sys_get_random_event;
