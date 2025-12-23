// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`exp:${this.id}:${param}`) || 0;
}

class EraExp {
  /**
   * ｖ经验
   * @returns {number}
   */
  get "virgin"() {
    return era.get(`exp:${this.id}:0`);
  }
  /**
   * ｖ经验
   * @param {number} v
   */
  set "virgin"(v) {
    era.set(`exp:${this.id}:0`, v);
  }
  /**
   * ａ经验
   * @returns {number}
   */
  get "anal"() {
    return era.get(`exp:${this.id}:1`);
  }
  /**
   * ａ经验
   * @param {number} v
   */
  set "anal"(v) {
    era.set(`exp:${this.id}:1`, v);
  }
  /**
   * 高潮经验
   * @returns {number}
   */
  get "ex"() {
    return era.get(`exp:${this.id}:2`);
  }
  /**
   * 高潮经验
   * @param {number} v
   */
  set "ex"(v) {
    era.set(`exp:${this.id}:2`, v);
  }
  /**
   * 射精经验
   * @returns {number}
   */
  get "ejaculate"() {
    return era.get(`exp:${this.id}:3`);
  }
  /**
   * 射精经验
   * @param {number} v
   */
  set "ejaculate"(v) {
    era.set(`exp:${this.id}:3`, v);
  }
  /**
   * 自慰经验
   * @returns {number}
   */
  get "masturbate"() {
    return era.get(`exp:${this.id}:10`);
  }
  /**
   * 自慰经验
   * @param {number} v
   */
  set "masturbate"(v) {
    era.set(`exp:${this.id}:10`, v);
  }
  /**
   * 调教自慰经验
   * @returns {number}
   */
  get "t_masturbate"() {
    return era.get(`exp:${this.id}:11`);
  }
  /**
   * 调教自慰经验
   * @param {number} v
   */
  set "t_masturbate"(v) {
    era.set(`exp:${this.id}:11`, v);
  }
  /**
   * 精液经验
   * @returns {number}
   */
  get "semen"() {
    return era.get(`exp:${this.id}:20`);
  }
  /**
   * 精液经验
   * @param {number} v
   */
  set "semen"(v) {
    era.set(`exp:${this.id}:20`, v);
  }
  /**
   * 侍奉快乐经验
   * @returns {number}
   */
  get "serve"() {
    return era.get(`exp:${this.id}:21`);
  }
  /**
   * 侍奉快乐经验
   * @param {number} v
   */
  set "serve"(v) {
    era.set(`exp:${this.id}:21`, v);
  }
  /**
   * 口交经验
   * @returns {number}
   */
  get "blow_job"() {
    return era.get(`exp:${this.id}:22`);
  }
  /**
   * 口交经验
   * @param {number} v
   */
  set "blow_job"(v) {
    era.set(`exp:${this.id}:22`, v);
  }
  /**
   * 苦痛快乐经验
   * @returns {number}
   */
  get "pain"() {
    return era.get(`exp:${this.id}:30`);
  }
  /**
   * 苦痛快乐经验
   * @param {number} v
   */
  set "pain"(v) {
    era.set(`exp:${this.id}:30`, v);
  }
  /**
   * 女同经验
   * @returns {number}
   */
  get "gl"() {
    return era.get(`exp:${this.id}:40`);
  }
  /**
   * 女同经验
   * @param {number} v
   */
  set "gl"(v) {
    era.set(`exp:${this.id}:40`, v);
  }
  /**
   * 男同经验
   * @returns {number}
   */
  get "bl"() {
    return era.get(`exp:${this.id}:41`);
  }
  /**
   * 男同经验
   * @param {number} v
   */
  set "bl"(v) {
    era.set(`exp:${this.id}:41`, v);
  }
  /**
   * 异常经验
   * @returns {number}
   */
  get "except"() {
    return era.get(`exp:${this.id}:50`);
  }
  /**
   * 异常经验
   * @param {number} v
   */
  set "except"(v) {
    era.set(`exp:${this.id}:50`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`exp:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`exp:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraExp;
// GENERATED END