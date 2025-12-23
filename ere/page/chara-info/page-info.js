// #/page/chara-info/page-info.js

const era = require('#/era-electron');

const EraChara = require('#/era-utils/era-chara');
const { eraAblEnum,
  eraAblNames } = require('#/era-utils/names/era-abl-names');
const { eraExpNames } = require('#/era-utils/names/era-exp-names');
const { eraMarkNames } = require('#/era-utils/names/era-mark-names');
const { eraParamEnum,
  eraParamNames,
} = require('#/era-utils/names/era-param-names');
const { eraTalentNames } = require('#/era-utils/names/era-talent-names');

/**
 * 角色情报界面
 *
 * @param id 角色ID
 */
async function page_info(id) {
  const buffer = [];
  const chara = EraChara.get(id);
  buffer.push(
    {
      config: { content: `${chara.callname} 的情报`, position: 'left' },
      type: 'divider',
    },
    {
      content: '体力：', config: { width: 2 }, type: 'text',
    },
    {
      config: {
        color: '#009300',
        height: 20,
        width: 9,
      },
      inContent: `${Math.floor(chara.base.hp).toLocaleString()}/${Math.floor(chara.maxbase.hp).toLocaleString()}`,
      percentage: (chara.base.hp * 100) / chara.maxbase.hp,
      type: 'progress',
    },
    {
      content: '气力', config: { offset: 1, width: 2 }, type: 'text'
    },
    {
      config: {
        color: '#6b6bff',
        height: 20,
        width: 9,
      },
      inContent: `${Math.floor(chara.base.sp).toLocaleString()}/${Math.floor(chara.maxbase.sp).toLocaleString()}`,
      percentage: (chara.base.sp * 100) / chara.maxbase.sp,
      type: 'progress',
    }
  );
  // 遍历所有素质并输出
  Object.keys(eraParamEnum)
    .filter(
      (e) => (eraParamEnum[e] !== 3
        && eraParamEnum[e] < 11)
        || eraParamEnum[e] === 100
    )
    .forEach((k) => {
      buffer.push({
        config: { width: 6 },
        content: [
          eraParamNames[k].toUpperCase(),
          ":",
          chara.jewel[k].toLocaleString(),
        ],
        type: 'text',
      })
    });
  buffer.push({
    config: { content: '能力', position: 'left' },
    type: 'divider',
  });
  Object.keys(eraAblNames)
    .filter(
      (e, i) =>
        eraAblEnum[e] < 14 &&
        (i !== 13 || chara.talent.boy === 1) &&
        ((i !== 9 && i !== 12) || chara.talent.boy === 0),
    )
    .forEach((e) =>
      buffer.push({
        config: { width: 4 },
        content: [eraAblNames[e].toUpperCase(), '：', chara.abl[e]],
        type: 'text',
      }),
    );
  buffer.push({
    config: { content: '素质', position: 'left' },
    type: 'divider',
  });
  buffer.push({
    content: Object.keys(eraTalentNames)
      .filter((e) => chara.talent[e] > 0)
      .map((e) => ({
        content: `[${eraTalentNames[e].toUpperCase()}]`,
        display: 'inline-block',
      })),
    type: 'text',
  });
  buffer.push({
    config: { content: '刻印', position: 'left' },
    type: 'divider',
  });
  Object.keys(eraMarkNames).forEach((e) =>
    buffer.push({
      config: { width: 6 },
      content: [eraMarkNames[e].toUpperCase(), '刻印：', chara.mark[e]],
      type: 'text',
    }),
  );
  buffer.push({
    config: { content: '经验', position: 'left' },
    type: 'divider',
  });
  Object.keys(eraExpNames).forEach((e) =>
    buffer.push({
      config: { width: 6 },
      content: [eraExpNames[e].toUpperCase(), '：', chara.exp[e]],
      type: 'text',
    }),
  );
  const all_relations = chara.get_all_relations();
  if (Object.keys(all_relations).length > 0) {
    buffer.push({
      config: { content: '相性', position: 'left' },
      type: 'divider',
    });
    Object.entries(chara.get_all_relations()).forEach(([c, relation]) =>
      buffer.push({
        config: { width: 6 },
        content: [EraChara.get(Number(c)).name, '：', relation],
        type: 'text',
      }),
    );
  }
  era.printMultiColumns(buffer, { width: 18 });
  await era.waitAnyKey();
}

module.exports = page_info;