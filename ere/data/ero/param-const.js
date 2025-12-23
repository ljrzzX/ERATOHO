// #/data/ero/param-const.js

const borders = [100, 500, 3000, 10000, 30000, 60000, 100000, 150000, 250000];

module.exports = {
  /**
   * 根据参数数值获取相应的宝珠
   *
   * @param {number} param 参数数值
   * @returns {number} 获取的宝珠数量
   */
  convert_to_jewel(param) {
    if (param < borders[0]) {
      return 0;
    } else if (param < 3 * borders[0]) {
      return 1;
    } else if (param < borders[1]) {
      return 2;
    } else if (param < 3 * borders[1]) {
      return 10;
    } else if (param < borders[2]) {
      return 20;
    } else if (param < 2 * borders[2]) {
      return 100;
    } else if (param < borders[3]) {
      return 200;
    } else if (param < borders[4]) {
      return 1000;
    } else if (param < borders[5]) {
      return 2000;
    } else if (param < borders[6]) {
      return 3000;
    } else if (param < borders[7]) {
      return 5000;
    } else if (param < borders[8]) {
      return 8000;
    }
    return 12000;
  },
  /**
 * 根据参数数值获取参数等级
 *
 * @param {number} param 参数数值
 * @returns {number} 参数等级
 */
  get_param_level(param) {
    let level = 0;
    while (param >= borders[level]) {
      level++;
    }
    return level;
  },
  // 参数等级对应的上限参数数值
  param_level_borders: borders,
  // 参数进度条的颜色
  progress_colors: ['#b05a76', '#cf00cf'],
};
