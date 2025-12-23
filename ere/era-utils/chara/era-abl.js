// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`abl:${this.id}:${param}`) || 0;
}

class EraAbl {
  /**
   * 顺从
   * @returns {number}
   */
  get "meek"() {
    return era.get(`abl:${this.id}:0`);
  }
  /**
   * 顺从
   * @param {number} v
   */
  set "meek"(v) {
    era.set(`abl:${this.id}:0`, v);
  }
  /**
   * 欲望
   * @returns {number}
   */
  get "lust"() {
    return era.get(`abl:${this.id}:1`);
  }
  /**
   * 欲望
   * @param {number} v
   */
  set "lust"(v) {
    era.set(`abl:${this.id}:1`, v);
  }
  /**
   * 技巧
   * @returns {number}
   */
  get "skill"() {
    return era.get(`abl:${this.id}:2`);
  }
  /**
   * 技巧
   * @param {number} v
   */
  set "skill"(v) {
    era.set(`abl:${this.id}:2`, v);
  }
  /**
   * ｃ感觉
   * @returns {number}
   */
  get "clitoris"() {
    return era.get(`abl:${this.id}:3`);
  }
  /**
   * ｃ感觉
   * @param {number} v
   */
  set "clitoris"(v) {
    era.set(`abl:${this.id}:3`, v);
  }
  /**
   * ｖ感觉
   * @returns {number}
   */
  get "virgin"() {
    return era.get(`abl:${this.id}:4`);
  }
  /**
   * ｖ感觉
   * @param {number} v
   */
  set "virgin"(v) {
    era.set(`abl:${this.id}:4`, v);
  }
  /**
   * ａ感觉
   * @returns {number}
   */
  get "anal"() {
    return era.get(`abl:${this.id}:5`);
  }
  /**
   * ａ感觉
   * @param {number} v
   */
  set "anal"(v) {
    era.set(`abl:${this.id}:5`, v);
  }
  /**
   * 侍奉精神
   * @returns {number}
   */
  get "serve"() {
    return era.get(`abl:${this.id}:6`);
  }
  /**
   * 侍奉精神
   * @param {number} v
   */
  set "serve"(v) {
    era.set(`abl:${this.id}:6`, v);
  }
  /**
   * 露出癖
   * @returns {number}
   */
  get "exhibit"() {
    return era.get(`abl:${this.id}:7`);
  }
  /**
   * 露出癖
   * @param {number} v
   */
  set "exhibit"(v) {
    era.set(`abl:${this.id}:7`, v);
  }
  /**
   * 受虐倾向
   * @returns {number}
   */
  get "masochism"() {
    return era.get(`abl:${this.id}:8`);
  }
  /**
   * 受虐倾向
   * @param {number} v
   */
  set "masochism"(v) {
    era.set(`abl:${this.id}:8`, v);
  }
  /**
   * 女同倾向
   * @returns {number}
   */
  get "gl_tend"() {
    return era.get(`abl:${this.id}:9`);
  }
  /**
   * 女同倾向
   * @param {number} v
   */
  set "gl_tend"(v) {
    era.set(`abl:${this.id}:9`, v);
  }
  /**
   * 自慰中毒
   * @returns {number}
   */
  get "masturbate"() {
    return era.get(`abl:${this.id}:10`);
  }
  /**
   * 自慰中毒
   * @param {number} v
   */
  set "masturbate"(v) {
    era.set(`abl:${this.id}:10`, v);
  }
  /**
   * 精液中毒
   * @returns {number}
   */
  get "semen"() {
    return era.get(`abl:${this.id}:11`);
  }
  /**
   * 精液中毒
   * @param {number} v
   */
  set "semen"(v) {
    era.set(`abl:${this.id}:11`, v);
  }
  /**
   * 女同中毒
   * @returns {number}
   */
  get "gl"() {
    return era.get(`abl:${this.id}:12`);
  }
  /**
   * 女同中毒
   * @param {number} v
   */
  set "gl"(v) {
    era.set(`abl:${this.id}:12`, v);
  }
  /**
   * 男同中毒
   * @returns {number}
   */
  get "bl"() {
    return era.get(`abl:${this.id}:13`);
  }
  /**
   * 男同中毒
   * @param {number} v
   */
  set "bl"(v) {
    era.set(`abl:${this.id}:13`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`abl:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`abl:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraAbl;
// GENERATED END