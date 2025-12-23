// GENERATED START
const era = require('#/era-electron');

const item_variable_names = {
  0: "hp_medicine",
  1: "sp_medicine",
  2: "mp_medicine",
  3: "hp_mixture",
  4: "sp_mixture",
  5: "mp_mixture",
  6: "hp_secret_potion",
  7: "sp_secret_potion",
  8: "mp_secret_potion",
  10: "aphrodisiac",
  11: "lubricant",
};

const era_item = {
  /** 体力药 */
  "hp_medicine": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:0');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:0', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:0');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:0', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:0');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:0', v);
    },
  },
  /** 精力药 */
  "sp_medicine": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:1');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:1', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:1');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:1', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:1');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:1', v);
    },
  },
  /** 圣灵药 */
  "mp_medicine": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:2');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:2', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:2');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:2', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:2');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:2', v);
    },
  },
  /** 体力合剂 */
  "hp_mixture": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:3');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:3', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:3');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:3', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:3');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:3', v);
    },
  },
  /** 精力合剂 */
  "sp_mixture": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:4');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:4', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:4');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:4', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:4');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:4', v);
    },
  },
  /** 圣灵合剂 */
  "mp_mixture": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:5');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:5', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:5');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:5', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:5');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:5', v);
    },
  },
  /** 体力秘药 */
  "hp_secret_potion": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:6');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:6', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:6');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:6', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:6');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:6', v);
    },
  },
  /** 精力秘药 */
  "sp_secret_potion": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:7');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:7', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:7');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:7', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:7');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:7', v);
    },
  },
  /** 圣灵秘药 */
  "mp_secret_potion": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:8');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:8', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:8');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:8', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:8');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:8', v);
    },
  },
  /** 媚药 */
  "aphrodisiac": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:10');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:10', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:10');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:10', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:10');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:10', v);
    },
  },
  /** 润滑液 */
  "lubricant": {
    /**
     * 持有数
     * @returns {number}
     */
    get count() {
      return era.get('item:11');
    },
    /**
     * 持有数
     * @param {number} v
     */
    set count(v) {
      era.set('item:11', v);
    },
    /**
     * 售价
     * @returns {number}
     */
    get price() {
      return era.get('itemprice:11');
    },
    /**
     * 售价
     * @param {number} v
     */
    set price(v) {
      era.set('itemprice:11', v);
    },
    /**
     * 在售数
     * @returns {number}
     */
    get sales() {
      return era.get('itemsales:11');
    },
    /**
     * 在售数
     * @param {number} v
     */
    set sales(v) {
      era.set('itemsales:11', v);
    },
  },
  /**
   * 之前购买的道具序号
   * @returns {number}
   */
  get bought() {
    return era.get('item:bought');
  },
  /**
   * 之前购买的道具序号
   * @param {number} v
   */
  set bought(v) {
    era.set('item:bought', v);
  },
  /**
   * 之前购买的道具名
   * @returns {string}
   */
  get bought_name() {
    return era.get('itemname:bought');
  },
  /**
   * 在售卖中的道具对应的变量名数组
   * @returns {string[]}
   */
  get sales() {
    return era
      .get('itemkeys')
      .filter((e) => era.get(`itemsales:${e}`) > 0)
      .map((e) => item_variable_names[e]);
  },
  /**
   * 持有的道具对应的变量名数组
   * @type {string[]}
   */
  get hold() {
    return era
      .get('itemkeys')
      .filter((e) => era.get(`item:${e}`) > 0)
      .map((e) => item_variable_names[e]);
  },
  clear_sales() {
    era.get('itemkeys').forEach((e) => era.set(`itemsales:${e}`, 0));
  },
};

module.exports = era_item;
// GENERATED END