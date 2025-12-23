// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`delta:${this.id}:${param}`) || 0;
}

class EraDelta {
  /**
   * 快ｃ
   * @returns {number}
   */
  get "clitoris"() {
    return era.get(`delta:${this.id}:0`);
  }
  /**
   * 快ｃ
   * @param {number} v
   */
  set "clitoris"(v) {
    era.set(`delta:${this.id}:0`, v);
  }
  /**
   * 快ｖ
   * @returns {number}
   */
  get "virgin"() {
    return era.get(`delta:${this.id}:1`);
  }
  /**
   * 快ｖ
   * @param {number} v
   */
  set "virgin"(v) {
    era.set(`delta:${this.id}:1`, v);
  }
  /**
   * 快ａ
   * @returns {number}
   */
  get "anal"() {
    return era.get(`delta:${this.id}:2`);
  }
  /**
   * 快ａ
   * @param {number} v
   */
  set "anal"(v) {
    era.set(`delta:${this.id}:2`, v);
  }
  /**
   * 润滑
   * @returns {number}
   */
  get "lubrication"() {
    return era.get(`delta:${this.id}:3`);
  }
  /**
   * 润滑
   * @param {number} v
   */
  set "lubrication"(v) {
    era.set(`delta:${this.id}:3`, v);
  }
  /**
   * 顺从
   * @returns {number}
   */
  get "meek"() {
    return era.get(`delta:${this.id}:4`);
  }
  /**
   * 顺从
   * @param {number} v
   */
  set "meek"(v) {
    era.set(`delta:${this.id}:4`, v);
  }
  /**
   * 欲望
   * @returns {number}
   */
  get "lust"() {
    return era.get(`delta:${this.id}:5`);
  }
  /**
   * 欲望
   * @param {number} v
   */
  set "lust"(v) {
    era.set(`delta:${this.id}:5`, v);
  }
  /**
   * 屈服
   * @returns {number}
   */
  get "submission"() {
    return era.get(`delta:${this.id}:6`);
  }
  /**
   * 屈服
   * @param {number} v
   */
  set "submission"(v) {
    era.set(`delta:${this.id}:6`, v);
  }
  /**
   * 习得
   * @returns {number}
   */
  get "learn"() {
    return era.get(`delta:${this.id}:7`);
  }
  /**
   * 习得
   * @param {number} v
   */
  set "learn"(v) {
    era.set(`delta:${this.id}:7`, v);
  }
  /**
   * 羞耻
   * @returns {number}
   */
  get "shame"() {
    return era.get(`delta:${this.id}:8`);
  }
  /**
   * 羞耻
   * @param {number} v
   */
  set "shame"(v) {
    era.set(`delta:${this.id}:8`, v);
  }
  /**
   * 痛苦
   * @returns {number}
   */
  get "pain"() {
    return era.get(`delta:${this.id}:9`);
  }
  /**
   * 痛苦
   * @param {number} v
   */
  set "pain"(v) {
    era.set(`delta:${this.id}:9`, v);
  }
  /**
   * 恐惧
   * @returns {number}
   */
  get "fear"() {
    return era.get(`delta:${this.id}:10`);
  }
  /**
   * 恐惧
   * @param {number} v
   */
  set "fear"(v) {
    era.set(`delta:${this.id}:10`, v);
  }
  /**
   * 反感
   * @returns {number}
   */
  get "hate"() {
    return era.get(`delta:${this.id}:11`);
  }
  /**
   * 反感
   * @param {number} v
   */
  set "hate"(v) {
    era.set(`delta:${this.id}:11`, v);
  }
  /**
   * 不快
   * @returns {number}
   */
  get "unhappy"() {
    return era.get(`delta:${this.id}:12`);
  }
  /**
   * 不快
   * @param {number} v
   */
  set "unhappy"(v) {
    era.set(`delta:${this.id}:12`, v);
  }
  /**
   * 抑郁
   * @returns {number}
   */
  get "depression"() {
    return era.get(`delta:${this.id}:13`);
  }
  /**
   * 抑郁
   * @param {number} v
   */
  set "depression"(v) {
    era.set(`delta:${this.id}:13`, v);
  }
  /**
   * 否定
   * @returns {number}
   */
  get "deny"() {
    return era.get(`delta:${this.id}:100`);
  }
  /**
   * 否定
   * @param {number} v
   */
  set "deny"(v) {
    era.set(`delta:${this.id}:100`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`delta:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`delta:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraDelta;
// GENERATED END