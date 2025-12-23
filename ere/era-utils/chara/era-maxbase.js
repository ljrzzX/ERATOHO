// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`maxbase:${this.id}:${param}`) || 0;
}

class EraMaxbase {
  /**
   * 体力
   * @returns {number}
   */
  get "hp"() {
    return era.get(`maxbase:${this.id}:0`);
  }
  /**
   * 体力
   * @param {number} v
   */
  set "hp"(v) {
    era.set(`maxbase:${this.id}:0`, v);
  }
  /**
   * 气力
   * @returns {number}
   */
  get "sp"() {
    return era.get(`maxbase:${this.id}:1`);
  }
  /**
   * 气力
   * @param {number} v
   */
  set "sp"(v) {
    era.set(`maxbase:${this.id}:1`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`maxbase:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`maxbase:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraMaxbase;
// GENERATED END