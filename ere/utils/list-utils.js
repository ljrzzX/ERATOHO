// #/utils/list-utils.js

const { get_random_value } = require('#/utils/value-utils');

/**
 * 从数组中随机选择一个元素
 *
 * @template T
 * @param {T[]} list 输入的数组
 * @returns {T} 随机选择的元素，如果数组为空则返回 undefined
 */
function get_random_entry(list) {
  if (!list.length) {
    return undefined;
  }
  if (list.length === 1) {
    return list[0];
  }
  return list[Math.floor(list.length * Math.random())];
}

/**
 * 根据指定的排序函数对数组进行排序
 *
 * @template T
 * @param {T[]} list 输入的数组
 * @param {function(T,number):number} order_by 排序函数，接受元素和索引作为参数，返回排序值
 * @param {boolean} [is_asc] 是否升序排序，默认为 true
 * @returns {T[]} 排序后的数组
 */
function sort_list(list, order_by, is_asc) {
  if (typeof order_by !== 'function') {
    return list;
  }
  return list
    .map((v, i) => {
      return {
        val: v,
        orderBy: order_by(v, i),
      };
    })
    .sort((a, b) => (is_asc ? a.orderBy - b.orderBy : b.orderBy - a.orderBy))
    .map((v) => v.val);
}

module.exports = {
  /**
   * 根据指定的键函数对数组进行去重
   *
   * @template T
   * @param {T[]} list 输入的数组
   * @param {function(T):string} key_cb 键函数，接受元素作为参数，返回键值
   * @returns {T[]} 去重后的数组
   */
  distinct_list(list, key_cb) {
    /** @type {Record<string,{entry:*,index:number}>} */
    const dict = {};
    list.forEach((e, i) => (dict[key_cb(e)] = { entry: e, index: i }));
    return Object.values(dict)
      .sort((a, b) => a.index - b.index)
      .map((e) => e.entry);
  },
  /**
   * 从数组中随机选择指定数量的元素
   *
   * @template T
   * @param {T[]} list 输入的数组
   * @param {number} max 要选择的元素数量
   * @returns {T[]} 随机选择的元素数组
   */
  gacha(list, max) {
    if (max <= 0) {
      return [];
    }
    if (list.length <= max) {
      return list;
    }
    if (max === 1) {
      return [get_random_entry(list)];
    }
    const ret = [];
    for (let i = 0; i < list.length; ++i) {
      if (i < max) {
        ret.push(i);
      } else {
        const rand = get_random_value(0, i);
        if (rand < max) {
          ret[rand] = i;
        }
      }
    }
    return sort_list(ret, (x) => x, true).map((i) => list[i]);
  },
  /**
   * 获取数组中的极值元素
   *
   * @template T
   * @param {T[]} list 输入的数组
   * @param {(T)=>number} order_by 排序函数，接受元素作为参数，返回排序值
   * @returns {{max:T,min:T}} 包含最大值和最小值的对象
   */
  get_extremum_entry(list, order_by) {
    if (list.length <= 1) {
      return list[0];
    }
    const _list = list.map((v) => {
      return {
        val: v,
        orderBy: order_by(v),
      };
    });
    let max_entry = _list[0],
      min_entry = _list[0],
      max_val = max_entry.orderBy,
      min_val = min_entry.orderBy;
    _list.forEach((e) => {
      if (e.orderBy > max_val) {
        max_entry = e;
        max_val = max_entry.orderBy;
      } else if (e.orderBy < min_val) {
        min_entry = e;
        min_val = min_entry.orderBy;
      }
    });
    return { max: max_entry.val, min: min_entry.val };
  },
  get_random_entry,
  /**
   * 将数组中的元素连接成一个字符串
   *
   * @param {*[]} list 输入的数组
   * @param {string} separator 分隔符
   * @returns {string} 连接后的字符串
   */
  join_list(list, separator) {
    return list.filter((e) => e).join(separator);
  },
  /**
   * 计算数组的中位数
   *
   * @param {number[]} list 输入的数组
   * @returns {number} 中位数
   */
  median(list) {
    if (list.length === 0) {
      return undefined;
    }
    const sorted = sort_list(list, (e) => e);
    if (sorted.length % 2) {
      return sorted[Math.floor(sorted.length / 2)];
    } else {
      return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    }
  },
  sort_list,
};
