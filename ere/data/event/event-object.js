// 事件对象类
class EventObject {
  /**
   * 随机事件对应的角色ID
   *
   * @type {number}
   */
  chara_id;
  /**
   * 随机事件名，用来从口上对象里获取事件对应的口上方法
   *
   * @type {string}
   */
  event;

  /**
   * 事件队列里的对象在存档再读档后会变成单纯的 Object，所以要用 from_obj 静态方法再转换回类的实例<br>
   * 其实不这么做也可以，只是如果要给 EventObject 加方法的话必须这么做，不然会因为没有原型而丢失方法
   *
   * @param {{chara_id:number,[event]:string}} obj
   * @returns {EventObject}
   */
  static from_obj(obj) {
    const ret = new EventObject(obj.chara_id);
    ret.event = obj.event;
    return ret;
  }

  /** @param {number} id */
  constructor(id) {
    this.chara_id = id;
  }
}

module.exports = EventObject;
