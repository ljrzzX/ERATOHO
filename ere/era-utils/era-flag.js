// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`flag:${param}`) || 0;
}

const era_flag = {
  /**
   * 萌币
   * @returns {number}
   */
  get "coin"() {
    return era.get('flag:0');
  },
  /**
   * 萌币
   * @param {number} v
   */
  set "coin"(v) {
    era.set('flag:0', v);
  },
  /**
   * 当前角色
   * @returns {number}
   */
  get "cur_chara"() {
    return era.get('flag:10');
  },
  /**
   * 当前角色
   * @param {number} v
   */
  set "cur_chara"(v) {
    era.set('flag:10', v);
  },
  /**
   * 事件队列
   * @returns {number}
   */
  get "event_queue"() {
    return era.get('flag:11');
  },
  /**
   * 事件队列
   * @param {number} v
   */
  set "event_queue"(v) {
    era.set('flag:11', v);
  },
  get,
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`flag:${param}`, val);
  },
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.set(`flag:${param}`, get(param) + val);
  },
};

module.exports = era_flag;
// GENERATED END