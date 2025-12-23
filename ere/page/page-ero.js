// #/page/page-ero.js

const era = require('#/era-electron');

const { get_gradient_color } = require('#/utils/color-utils');
const page_info = require('#/page/chara-info/page-info');

const { action_enum, action_names } = require('#/data/ero/action-const');
const {
  get_param_level,
  param_level_borders,
  progress_colors,
} = require('#/data/ero/param-const');
const { stain_enum, stain_names } = require('#/data/ero/stain-const');

const { eraParamEnum,
  eraParamNames } = require('#/era-utils/names/era-param-names');
const { eraStainNames } = require('#/era-utils/names/era-stain-names');
const EraChara = require('#/era-utils/era-chara');
const era_flag = require('#/era-utils/era-flag');
const era_tflag = require('#/era-utils/era-tflag');

/**
 * 调教系统的入口
 */
async function page_ero() {
  // 开始调教，不调用这个API不会创建所需的表，后面的所有 era.get 和 era.set 都会出错
  era.beginTrain(0, era_flag.cur_chara);
  let page_ero_flag = true;
  const me = EraChara.get(0);
  const target = EraChara.get(era_flag.cur_chara);
  let trainer = me;
  // 设置所有角色的污垢
  era.getCharactersInTrain().forEach((e) => {
    const chara = EraChara.get(e);
    chara.stain.penis = stain_enum.penis;
    chara.stain.virgin = stain_enum.virgin;
  });
  era_tflag.last_action = -1;
  while (page_ero_flag) {
    await era.clear();
    era.drawLine();
    // 输出正在调教的角色名
    era.print([
      '正在调教 ',
      {
        content: target.name,
        color: target.cstr.chara_color,
      },
    ]);
    const hp = target.base.hp;
    const sp = target.base.sp;
    // 输出体力和气力的进度条
    era.printMultiColumns(
      [
        { content: '体力', config: { width: 2 }, type: 'text' },
        {
          config: {
            color: hp < 1000 ? 'red' : '#009300',
            height: 20,
            width: 9,
          },
          inContent: `${Math.floor(hp).toLocaleString()}/${target.maxbase.hp.toLocaleString()}`,
          percentage: (hp * 100) / target.maxbase.hp,
          type: 'progress',
        },
        { content: '气力', config: { offset: 1, width: 2 }, type: 'text' },
        {
          config: {
            color: '#6b6bff',
            height: 20,
            width: 9,
          },
          inContent: `${Math.floor(sp).toLocaleString()}/${target.maxbase.sp.toLocaleString()}`,
          percentage: (sp * 100) / target.maxbase.sp,
          type: 'progress',
        },
      ],
      { width: 18 },
    );
    let buffer = [];
    // 输出角色的各种参数
    Object.keys(eraParamEnum)
      .filter((e) => eraParamEnum[e] < 100)
      .forEach((k) => {
        const level = get_param_level(target.param[k]);
        buffer.push(
          {
            config: { width: 2 },
            // paramkeys拿到的是参数变量序号的数组，所以需要用paramname来获取参数变量名
            content: eraParamNames[k].toUpperCase(),
            type: 'text',
          },
          {
            config: {
              barWidth: 16,
              // get_gradient_color 是一个颜色渐变函数，它接受三个参数：
              // 第一个参数是起始颜色，第二个参数是结束颜色，第三个参数是比例
              // 比例是一个 0-1 的数字，它表示从起始颜色到结束颜色的渐变比例
              // 这个函数返回一个颜色字符串，它是起始颜色和结束颜色之间的渐变颜色
              color: get_gradient_color(
                progress_colors[0],
                progress_colors[1],
                level / 4,
              ),
              height: 20,
              width: 6,
            },
            // 按照参数等级输出进度条内的文字
            inContent:
              level >= 4
                ? Math.floor(target.param[k]).toLocaleString()
                : `${Math.floor(target.param[k]).toLocaleString()}/${param_level_borders[level].toLocaleString()}`,
            // 进度条外的文字输出参数等级
            outContent: `Lv.${level}`,
            percentage:
              level >= 4 ? 100 : (target.param[k] * 100) / param_level_borders[level],
            type: 'progress',
          },
        );
      });
    era.printMultiColumns(buffer, { offset: 1, width: 23 });
    // 输出射精进度条，注意玩家的阴茎快感记录在参数[快C]里
    era.printMultiColumns(
      [
        { config: { width: 2 }, content: '射精', type: 'text' },
        {
          config: {
            color: get_gradient_color(
              progress_colors[0],
              progress_colors[1],
              trainer.param.clitoris / 100,
            ),
            height: 20,
            width: 21,
          },
          inContent: `${trainer.param.clitoris.toLocaleString()}/10,000`,
          percentage: trainer.param.clitoris / 100,
          type: 'progress',
        },
      ],
      { width: 18 },
    );
    era.drawLine();
    buffer = [];
    // 取所有指令的枚举值数组，然后挨个输出为指令按钮
    Object.keys(action_enum.keys).forEach((a) =>
      buffer.push({
        accelerator: a,
        content: action_names[a],
        config: { width: 8 },
        type: 'button',
      }),
    );
    // 输出一个空行手动换行，将指令和功能按钮分隔开
    buffer.push({ content: [], type: 'text' });
    ['污垢情况'].forEach((e, i) =>
      buffer.push({
        accelerator: 100 + i,
        config: { width: 8 },
        content: e,
        type: 'button',
      }),
    );
    buffer.push({
      accelerator: 200,
      config: { width: 8 },
      content: '结束调教',
      type: 'button',
    });
    era.printMultiColumns(buffer, { offset: 2, width: 22 });
    const ret = await era.input();
    switch (ret) {
      case 100:
        // 显示角色情报
        await page_info(target.id);
        break;
      case 101:
        // 显示污垢情况
        era.drawLine();
        [me, target]
        .filter((e) => e !== undefined)
        .forEach((e) =>
          [
            'hand',
            'penis',
            'virgin',
          ]
            .filter((p) => p !== undefined)
            .forEach((p) => {
              const buffer = [];
              buffer.push(e.name, ' 的 ', eraStainNames[p], '：');
              Object.values(stain_enum).forEach((s) => {
                if ((e.stain[p] & s) > 0) {
                  buffer.push(stain_names[s]);
                }
              });
              era.print(buffer);
            }),
        );
      await era.waitAnyKey();
        break;
      case 200:
        page_ero_flag = false;
        break;
      default:
      // 执行调教指令
    }
  }
  // 结束调教，把 gotjewel 结算到 jewel 里然后删除所有调教相关的表
  era.endTrain();
}

module.exports = page_ero;
