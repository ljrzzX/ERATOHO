// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`cflag:${this.id}:${param}`) || 0;
}

class EraCflag {
  /**
   * 卖出
   * @returns {number}
   */
  get "sold"() {
    return era.get(`cflag:${this.id}:0`);
  }
  /**
   * 卖出
   * @param {number} v
   */
  set "sold"(v) {
    era.set(`cflag:${this.id}:0`, v);
  }
  /**
   * 贞操
   * @returns {number}
   */
  get "virgin"() {
    return era.get(`cflag:${this.id}:100`);
  }
  /**
   * 贞操
   * @param {number} v
   */
  set "virgin"(v) {
    era.set(`cflag:${this.id}:100`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`cflag:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`cflag:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraCflag;
// GENERATED END