// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`tflag:${param}`) || 0;
}

const era_tflag = {
  /**
   * 前回行动
   * @returns {number}
   */
  get "last_action"() {
    return era.get('tflag:0');
  },
  /**
   * 前回行动
   * @param {number} v
   */
  set "last_action"(v) {
    era.set('tflag:0', v);
  },
  get,
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`tflag:${param}`, val);
  },
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.set(`tflag:${param}`, get(param) + val);
  },
};

module.exports = era_tflag;
// GENERATED END