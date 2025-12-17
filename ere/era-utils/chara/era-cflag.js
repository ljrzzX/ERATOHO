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