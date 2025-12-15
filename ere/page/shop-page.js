const era = require('#/era-electron');
const shop_desc = require('#/data/desc/items.json');

// 每页道具数
const page_size = 5;

/** @param {({id:number,[limit]:boolean}|number)[]} item_list */
async function shop_page(item_list) {
  // normalize incoming list to objects: { id: number, limit: boolean }
  item_list = item_list.map((e) => {
    if (typeof e === 'number') return { id: e, limit: false };
    return { id: e.id, limit: !!e.limit };
  });
  let my_items = era.get('itemkeys').map((e) => {
    return { has: era.get(`item:${e}`), id: e };
  });
  const max_page = Math.ceil(item_list.length / page_size);
  let shop_list;
  let cur_page = 1;
  const to_buy = {};
  const price_dict = {};
  const limit = {};
  item_list.forEach(({ id, limit: l }) => {
    to_buy[id] = 1;
    price_dict[id] = era.get(`itemprice:${id}`);
    limit[id] = l;
  });
  let shopPageFlag = true;
  while (shopPageFlag) {
    await era.clear();
    shop_list = item_list.slice(
      (cur_page - 1) * page_size,
      cur_page * page_size,
    );
    console.log(shop_list);
    const buffer = [];
    const money = era.get('flag:萌币');
    buffer.push({ config: { content: '购买道具' }, type: 'divider' });
    for (const item of shop_list) {
      const item_id = item.id;
      buffer.push(
        {
          accelerator: item_id,
          // 如果道具价格大于当前萌币数量，禁用按钮
          config: {
            width: 10
          },
          // 用 itemname 获取道具名称
          // content 显示物品名称(若有limit则在名称后添加"[限购]") —— 物品价格 —— 当前持有数量
          content: `${era.get(`itemname:${item_id}`)}${limit[item_id] ? ' [限购]' : ''} —— ${price_dict[item_id] || 1} 萌币 —— 当前持有 ${my_items.find((e) => e.id === item_id)?.has || 0} 个`,
          type: 'button',
        },
        // 购买按钮，超过持有货币不允许购买
        {
          accelerator: item_id + 300,
          config: {
            align: 'right',
            disabled: (money < (price_dict[item_id] || Infinity) * (to_buy[item_id] || 1)) || (limit[item_id] && my_items.find((e) => e.id === item_id)?.has >= 1),
            width: 14,
          },
          content: `购买`,
          type: 'button',
        },
      );
    }
    buffer.push(
      { type: 'divider' },
      {
        config: { width: 30 },
        content: `当前萌币: ${money.toString()}`,
        type: 'text',
      },
    );
    if (max_page > 1) {
      buffer.push(
        {
          accelerator: 900,
          config: { 
            align: 'left', 
            disabled: cur_page === 1, 
            width: 10 
          },
          content: '上一页',
          type: 'button',
        },
        {
          config: {
            align: 'center',
            width: 4,
          },
          content: `${cur_page} / ${max_page}`,
          type: 'text',
        },
        {
          accelerator: 901,
          config: {
            align: 'right',
            disabled: cur_page === max_page,
            width: 10,
          },
          content: '下一页',
          type: 'button',
        },
      );
    }
    buffer.push(
      { type: 'divider' },
      {
        accelerator: 999,
        config: { width: 4 },
        content: '返回',
        type: 'button',
      }
    );
    
    era.printMultiColumns(buffer);
    const choice = await era.input();
    if (choice === 999) {
      shopPageFlag = false;
    } else if (choice >= 300) {
      const item_id = choice - 300;
      const unitPrice = price_dict[item_id];
      const maxAffordable = Math.min(99, Math.floor(money / unitPrice));
      if (maxAffordable <= 0) {
        await era.printAndWait('萌币不足，无法购买。');
        continue;
      }

      let qty = null;
      if (limit[item_id]) {
        // 限购物品只允许买 1 件
        await era.print('该道具为限购物品，仅允许购买 1 件');
        await era.printButton('购买', 1);
        await era.printButton('取消', 0);
        const ret = await era.input();
        if (ret === 1) {
          qty = 1;
        } else {
          qty = 0;
        }
      } else if (choice === 900) {
        cur_page--;
      } else if (choice === 901) {
        cur_page++;
      } else {
        while (true) {
          await era.print(`请输入购买数量（1-${maxAffordable}，输入0取消）：`);
          const input = await era.input({ rule: '^\\d+$', useRule: true });
          qty = parseInt(input, 10) || 0;
          if (qty === 0) break; // 取消
          if (qty < 1 || qty > 99) {
            await era.printAndWait('输入无效，请输入 1-99 的整数。');
            continue;
          }
          if (qty > maxAffordable) {
            await era.printAndWait('萌币不足，请输入更小的数量。');
            continue;
          }
          break;
        }
      }

      if (qty > 0) {
        const newMoney = era.add('flag:萌币', -unitPrice * qty);
        era.add(`itemcount:${item_id}`, qty);
        await era.printAndWait(`成功购买了 ${qty} 件 ${era.get(`itemname:${item_id}`)}！当前萌币剩余 ${era.get('flag:萌币')} 萌币。`);

        my_items = era.get('itemkeys').map((e) => {
          return { has: era.get(`item:${e}`), id: e };
        })

        item_list.forEach(({ id }) => {
          const p = price_dict[id] || 1;
          to_buy[id] = Math.min(
            Math.max(Math.floor(newMoney / p), 1),
            to_buy[id],
          );
        });
      }
    } else {
      // 显示道具描述
      const item_id = choice;
      const item_name = era.get(`itemname:${item_id}`);
      const desc = shop_desc[item_name] || '该道具暂无描述。';
      await era.printAndWait(`${item_name}：${desc}`);
    }
  }
}

module.exports = shop_page;