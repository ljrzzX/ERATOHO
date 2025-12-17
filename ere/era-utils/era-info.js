// GENERATED START
const era = require('#/era-electron');

/**
 * @typedef GameBase
 * @property {string} title 游戏标题
 * @property {string} author 游戏作者
 * @property {string} info 游戏信息
 * @property {string} year 发布时间
 * @property {number} gameCode 游戏标识
 * @property {number} version 游戏版本号
 * @property {string} [versionName] 自定义游戏版本号
 * @property {number} allowVersion 最低支持版本
 * @property {number} [defaultChara] 默认角色编号
 * @property {string} [site] 发布页网址
 * @property {string} [icon] 游戏图标
 * @property {string} [versionCheck] 版本检查网址
 * @property {string} [baseZip] 程序更新网址
 */

const era_info = {
  /**
   * 游戏的基本数据
   * @returns {GameBase}
   */
  get gamebase() {
    return era.get('gamebase');
  },
  /**
   * 当前游戏存档的版本号
   * @returns {number}
   */
  get version() {
    return era.get('version');
  },
  /**
   * 游戏存档栏位的备注（存档名）<br>
   * 开发套件只支持到游戏设置中的存档数量，栏位号超出存档数量的存档备注请使用 era.get 和 era.set
   * @type {Record<string,string>}
   */
  saves: {
    /**
     * 存档0
     * @returns {string}
     */
    get 0() {
      return era.get('global:saves:0');
    },
    /**
     * 存档0
     * @param {string} v
     */
    set 0(v) {
      era.set('global:saves:0', v);
    },
    /**
     * 存档1
     * @returns {string}
     */
    get 1() {
      return era.get('global:saves:1');
    },
    /**
     * 存档1
     * @param {string} v
     */
    set 1(v) {
      era.set('global:saves:1', v);
    },
    /**
     * 存档2
     * @returns {string}
     */
    get 2() {
      return era.get('global:saves:2');
    },
    /**
     * 存档2
     * @param {string} v
     */
    set 2(v) {
      era.set('global:saves:2', v);
    },
    /**
     * 存档3
     * @returns {string}
     */
    get 3() {
      return era.get('global:saves:3');
    },
    /**
     * 存档3
     * @param {string} v
     */
    set 3(v) {
      era.set('global:saves:3', v);
    },
    /**
     * 存档4
     * @returns {string}
     */
    get 4() {
      return era.get('global:saves:4');
    },
    /**
     * 存档4
     * @param {string} v
     */
    set 4(v) {
      era.set('global:saves:4', v);
    },
    /**
     * 存档5
     * @returns {string}
     */
    get 5() {
      return era.get('global:saves:5');
    },
    /**
     * 存档5
     * @param {string} v
     */
    set 5(v) {
      era.set('global:saves:5', v);
    },
    /**
     * 存档6
     * @returns {string}
     */
    get 6() {
      return era.get('global:saves:6');
    },
    /**
     * 存档6
     * @param {string} v
     */
    set 6(v) {
      era.set('global:saves:6', v);
    },
    /**
     * 存档7
     * @returns {string}
     */
    get 7() {
      return era.get('global:saves:7');
    },
    /**
     * 存档7
     * @param {string} v
     */
    set 7(v) {
      era.set('global:saves:7', v);
    },
    /**
     * 存档8
     * @returns {string}
     */
    get 8() {
      return era.get('global:saves:8');
    },
    /**
     * 存档8
     * @param {string} v
     */
    set 8(v) {
      era.set('global:saves:8', v);
    },
    /**
     * 存档9
     * @returns {string}
     */
    get 9() {
      return era.get('global:saves:9');
    },
    /**
     * 存档9
     * @param {string} v
     */
    set 9(v) {
      era.set('global:saves:9', v);
    },
    /**
     * 存档10
     * @returns {string}
     */
    get 10() {
      return era.get('global:saves:10');
    },
    /**
     * 存档10
     * @param {string} v
     */
    set 10(v) {
      era.set('global:saves:10', v);
    },
  },
};

module.exports = era_info;
// GENERATED END