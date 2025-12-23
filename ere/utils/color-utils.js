// #/utils/color-utils.js

module.exports = {
  /**
   * 用于计算两个颜色之间的渐变色
   *
   * @param {string} _start 起始颜色，十六进制格式的颜色值 (#aabbcc)，默认值为#ffffff (white)
   * @param {string} _end 结束颜色，十六进制格式的颜色值 (#aabbcc)，默认值为#ffffff (white)
   * @param {number} ratio 起始颜色和结束颜色之间的比例，0-1之间的小数
   * @returns {string} 渐变颜色，十六进制格式的颜色值 (#aabbcc)
   */
  get_gradient_color(_start, _end, ratio) {
    const start = _start || '#ffffff';
    const end = _end || '#ffffff';
    if (ratio <= 0) {
      return start;
    }
    if (ratio >= 1) {
      return end;
    }
    // 将起始颜色和结束颜色转换为RGB数组
    const start_arr = [
        start.substring(1, 3),
        start.substring(3, 5),
        start.substring(5, 7),
      ].map((v) => Number(`0x${v}`)),
      end_arr = [
        end.substring(1, 3),
        end.substring(3, 5),
        end.substring(5, 7),
      ].map((v) => Number(`0x${v}`));
    // 计算渐变颜色的RGB值
    return `rgb(${start_arr
      .map((v, i) => v + Math.floor((end_arr[i] - v) * ratio))
      .join(',')})`;
  },
};
