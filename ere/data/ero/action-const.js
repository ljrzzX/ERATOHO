// #/data/ero/action-const.js

/**
 * 调教指令枚举
 */
const actions = {
  // 爱抚
  pet: 0,
  // 自慰
  masturbate: 1,
  // 正常位
  missionary: 2,
  // 刺激 G 点
  stimulate_g_point: 3,
  // 媚药
  aphrodisiac: 4,
  // 润滑
  lubricant: 5,
};

Object.keys(actions).forEach((k, i) => {
  actions[k] = i;
});
actions.keys = Object.keys(actions);

/**
 * 调教指令的名称
 */
const action_names = [];
action_names[actions.pet] = '爱抚';
action_names[actions.masturbate] = '自慰';
action_names[actions.missionary] = '正常位';
action_names[actions.stimulate_g_point] = '刺激 G 点';
action_names[actions.aphrodisiac] = '媚药';
action_names[actions.lubricant] = '润滑';

module.exports = {
  action_enum: actions,
  action_names
};
