// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`tequip:${this.id}:${param}`) || 0;
}

class EraTequip {
  /**
   * 媚药
   * @returns {number}
   */
  get "aphrodisiac"() {
    return era.get(`tequip:${this.id}:0`);
  }
  /**
   * 媚药
   * @param {number} v
   */
  set "aphrodisiac"(v) {
    era.set(`tequip:${this.id}:0`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`tequip:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`tequip:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraTequip;
// GENERATED END