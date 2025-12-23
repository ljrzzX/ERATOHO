// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`source:${this.id}:${param}`) || 0;
}

class EraSource {
  /**
   * 快ｃ
   * @returns {number}
   */
  get "clitoris"() {
    return era.get(`source:${this.id}:0`);
  }
  /**
   * 快ｃ
   * @param {number} v
   */
  set "clitoris"(v) {
    era.set(`source:${this.id}:0`, v);
  }
  /**
   * 快ｖ
   * @returns {number}
   */
  get "virgin"() {
    return era.get(`source:${this.id}:1`);
  }
  /**
   * 快ｖ
   * @param {number} v
   */
  set "virgin"(v) {
    era.set(`source:${this.id}:1`, v);
  }
  /**
   * 快ａ
   * @returns {number}
   */
  get "anal"() {
    return era.get(`source:${this.id}:2`);
  }
  /**
   * 快ａ
   * @param {number} v
   */
  set "anal"(v) {
    era.set(`source:${this.id}:2`, v);
  }
  /**
   * 情爱
   * @returns {number}
   */
  get "love"() {
    return era.get(`source:${this.id}:3`);
  }
  /**
   * 情爱
   * @param {number} v
   */
  set "love"(v) {
    era.set(`source:${this.id}:3`, v);
  }
  /**
   * 性交
   * @returns {number}
   */
  get "sex"() {
    return era.get(`source:${this.id}:4`);
  }
  /**
   * 性交
   * @param {number} v
   */
  set "sex"(v) {
    era.set(`source:${this.id}:4`, v);
  }
  /**
   * 达成
   * @returns {number}
   */
  get "achieve"() {
    return era.get(`source:${this.id}:5`);
  }
  /**
   * 达成
   * @param {number} v
   */
  set "achieve"(v) {
    era.set(`source:${this.id}:5`, v);
  }
  /**
   * 痛觉
   * @returns {number}
   */
  get "pain"() {
    return era.get(`source:${this.id}:6`);
  }
  /**
   * 痛觉
   * @param {number} v
   */
  set "pain"(v) {
    era.set(`source:${this.id}:6`, v);
  }
  /**
   * 中毒
   * @returns {number}
   */
  get "poison"() {
    return era.get(`source:${this.id}:7`);
  }
  /**
   * 中毒
   * @param {number} v
   */
  set "poison"(v) {
    era.set(`source:${this.id}:7`, v);
  }
  /**
   * 不洁
   * @returns {number}
   */
  get "dirt"() {
    return era.get(`source:${this.id}:8`);
  }
  /**
   * 不洁
   * @param {number} v
   */
  set "dirt"(v) {
    era.set(`source:${this.id}:8`, v);
  }
  /**
   * 液体
   * @returns {number}
   */
  get "liquid"() {
    return era.get(`source:${this.id}:10`);
  }
  /**
   * 液体
   * @param {number} v
   */
  set "liquid"(v) {
    era.set(`source:${this.id}:10`, v);
  }
  /**
   * 欲望
   * @returns {number}
   */
  get "lust"() {
    return era.get(`source:${this.id}:11`);
  }
  /**
   * 欲望
   * @param {number} v
   */
  set "lust"(v) {
    era.set(`source:${this.id}:11`, v);
  }
  /**
   * 露出
   * @returns {number}
   */
  get "exhibit"() {
    return era.get(`source:${this.id}:12`);
  }
  /**
   * 露出
   * @param {number} v
   */
  set "exhibit"(v) {
    era.set(`source:${this.id}:12`, v);
  }
  /**
   * 屈服
   * @returns {number}
   */
  get "submission"() {
    return era.get(`source:${this.id}:13`);
  }
  /**
   * 屈服
   * @param {number} v
   */
  set "submission"(v) {
    era.set(`source:${this.id}:13`, v);
  }
  /**
   * 逃脱
   * @returns {number}
   */
  get "escape"() {
    return era.get(`source:${this.id}:14`);
  }
  /**
   * 逃脱
   * @param {number} v
   */
  set "escape"(v) {
    era.set(`source:${this.id}:14`, v);
  }
  /**
   * 反感
   * @returns {number}
   */
  get "hate"() {
    return era.get(`source:${this.id}:15`);
  }
  /**
   * 反感
   * @param {number} v
   */
  set "hate"(v) {
    era.set(`source:${this.id}:15`, v);
  }
  /**
   * 顺从
   * @returns {number}
   */
  get "meek"() {
    return era.get(`source:${this.id}:16`);
  }
  /**
   * 顺从
   * @param {number} v
   */
  set "meek"(v) {
    era.set(`source:${this.id}:16`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`source:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`source:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraSource;
// GENERATED END