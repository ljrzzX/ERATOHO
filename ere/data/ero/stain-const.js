// #/data/ero/stain-const.js

/**
 * 污垢类型的枚举
 * 因为同一个部位可以有多种污垢类型共存，所以这里用位掩码的方式来表示污垢类型
 * 例如: 0x03 表示同时有爱液又有先走液
 */
const stains = {
  // 爱液
  virgin: 0,
  // 先走液
  penis: 1,
  // 精液
  semen: 2,
};
Object.keys(stains).forEach((k, i) => {
  stains[k] = 1 << i;
});

/**
 * 污垢类型的名称
 */
const stain_names = [];
stain_names[stains.virgin] = '<Ｖ>';
stain_names[stains.penis] = '<Ｐ>';
stain_names[stains.semen] = '<精>';

module.exports = {
  stain_enum: stains,
  stain_names
};