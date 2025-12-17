// 定义了所有可能触发口上指令的枚举
// 注意这个枚举中枚举值的名字和 #/event/lines-common.js 中的口上方法应该是有一一对应关系的
const hooks = {
  talk: 0,
};
Object.keys(hooks).forEach((e, i) => {
  hooks[e] = i;
});
// 用 hooks.keys 放所有枚举值的名字
// 注意 hooks.keys 这个数组中每个枚举值名字的下标正好是枚举值
hooks.keys = Object.keys(hooks);

module.exports = hooks;
