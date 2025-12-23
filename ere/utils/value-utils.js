// #/utils/value-utils.js

module.exports = {
  /**
   * 生成指定范围内的随机数
   *
   * @param {number} min - 随机数的最小值。
   * @param {number} max - 随机数的最大值。
   * @param {boolean} [is_float] - 是否生成浮点数，默认为 false。
   * @returns {number} - 生成的随机数。
   */
  get_random_value(min, max, is_float) {
    if (min >= max) {
      return min;
    }
    const dice = Math.random();
    if (is_float) {
      return min + (max - min) * dice;
    }
    return Math.floor(min + (max - min + 1) * dice);
  },
};
