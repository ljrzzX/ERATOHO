// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`stain:${this.id}:${param}`) || 0;
}

class EraStain {
  /**
   * 口
   * @returns {number}
   */
  get "mouth"() {
    return era.get(`stain:${this.id}:0`);
  }
  /**
   * 口
   * @param {number} v
   */
  set "mouth"(v) {
    era.set(`stain:${this.id}:0`, v);
  }
  /**
   * 手
   * @returns {number}
   */
  get "hand"() {
    return era.get(`stain:${this.id}:1`);
  }
  /**
   * 手
   * @param {number} v
   */
  set "hand"(v) {
    era.set(`stain:${this.id}:1`, v);
  }
  /**
   * 棒
   * @returns {number}
   */
  get "penis"() {
    return era.get(`stain:${this.id}:2`);
  }
  /**
   * 棒
   * @param {number} v
   */
  set "penis"(v) {
    era.set(`stain:${this.id}:2`, v);
  }
  /**
   * 穴
   * @returns {number}
   */
  get "virgin"() {
    return era.get(`stain:${this.id}:3`);
  }
  /**
   * 穴
   * @param {number} v
   */
  set "virgin"(v) {
    era.set(`stain:${this.id}:3`, v);
  }
  /**
   * 菊
   * @returns {number}
   */
  get "anal"() {
    return era.get(`stain:${this.id}:4`);
  }
  /**
   * 菊
   * @param {number} v
   */
  set "anal"(v) {
    era.set(`stain:${this.id}:4`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`stain:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`stain:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraStain;
// GENERATED END