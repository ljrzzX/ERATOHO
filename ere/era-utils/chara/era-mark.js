// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`mark:${this.id}:${param}`) || 0;
}

class EraMark {
  /**
   * 苦痛
   * @returns {number}
   */
  get "pain"() {
    return era.get(`mark:${this.id}:0`);
  }
  /**
   * 苦痛
   * @param {number} v
   */
  set "pain"(v) {
    era.set(`mark:${this.id}:0`, v);
  }
  /**
   * 反抗
   * @returns {number}
   */
  get "hate"() {
    return era.get(`mark:${this.id}:1`);
  }
  /**
   * 反抗
   * @param {number} v
   */
  set "hate"(v) {
    era.set(`mark:${this.id}:1`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`mark:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`mark:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraMark;
// GENERATED END