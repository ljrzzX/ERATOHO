// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`base:${this.id}:${param}`) || 0;
}

class EraBase {
  /**
   * 体力
   * @returns {number}
   */
  get "hp"() {
    return era.get(`base:${this.id}:0`);
  }
  /**
   * 体力
   * @param {number} v
   */
  set "hp"(v) {
    era.set(`base:${this.id}:0`, v);
  }
  /**
   * 气力
   * @returns {number}
   */
  get "sp"() {
    return era.get(`base:${this.id}:1`);
  }
  /**
   * 气力
   * @param {number} v
   */
  set "sp"(v) {
    era.set(`base:${this.id}:1`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`base:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`base:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraBase;
// GENERATED END