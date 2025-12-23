// GENERATED START
const era = require('#/era-electron');



class EraCstr {
  /**
   * 代表色
   * @returns {string}
   */
  get "chara_color"() {
    return era.get(`cstr:${this.id}:0`);
  }
  /**
   * 代表色
   * @param {string} v
   */
  set "chara_color"(v) {
    era.set(`cstr:${this.id}:0`, v);
  }
  /**
   * @param {number|string} param
   * @returns {string}
   */
  get(param) {
    return era.get(`cstr:${this.id}:${param}`) || '';
  }
  /**
   * @param {number|string} param
   * @param {string} val
   * @returns {string}
   */
  set(param, val) {
    return era.set(`cstr:${this.id}:${param}`, val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraCstr;
// GENERATED END