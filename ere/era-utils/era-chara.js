// GENERATED START
const era = require('#/era-electron');

const EraCflag = require('./chara/era-cflag.js');

class EraChara {
  /**
   * 缓存
   * @type {Record<string,EraChara>}
   */
  static #cache = {};

  /**
   * 获取角色的对象
   * @param {number} id 角色的ID
   * @returns {EraChara}
   */
  static get(id) {
    if (!EraChara.#cache[id]) {
      EraChara.#cache[id] = new EraChara(id);
    }
    return EraChara.#cache[id];
  }

  /**
   * 返回所有角色的 ID 数组
   * @retuns {number}
   */
  static get all() {
    return era.getAllCharacters();
  }

  /**
   * 返回已添加角色的 ID 数组
   * @retuns {number}
   */
  static get added() {
    return era.getAddedCharacters();
  }

  /**
   * 该角色的编号
   * @type {number}
   */
  id;

  /**
   * 该角色的真名
   * @returns {string}
   */
  get name() {
    return era.get(`callname:${this.id}:-1`);
  }

  /**
   * 该角色的真名
   * @param {string} v
   */
  set name(v) {
    era.set(`callname:${this.id}:-1`, v);
  }

  /**
   * 旁白与其他角色对该角色的默认称呼
   * @returns {string}
   */
  get callname() {
    return era.get(`callname:${this.id}:-2`);
  }

  /**
   * 旁白与其他角色对该角色的默认称呼
   * @param {string} v
   */
  set callname(v) {
    era.set(`callname:${this.id}:-2`, v);
  }

  /**
   * 对主角的爱慕
   * @returns {number}
   */
  get love() {
    return era.get(`love:${this.id}`);
  }

  /**
   * 对主角的爱慕
   * @param {number} v
   */
  set love(v) {
    era.set(`love:${this.id}`, v);
  }

  /**
   * 角色的称号，定义在静态数据文件中，只读
   * @returns {string|undefined}
   */
  get title() {
    return era.get(`static:${this.id}:title`);
  }

  /**
   * 获取对其他角色的称呼
   * @param {number|string} chara_id 要获取称呼的目标角色
   * @returns {string}
   */
  callname_to(chara_id) {
    return era.get(`callname:${this.id}:${chara_id}`);
  }

  /**
   * 设置对其他角色的称呼
   * @param {number|string} chara_id 要设置称呼的目标角色
   * @param {string} callname 对目标角色的新称呼
   * @returns {string}
   */
  set_callname_to(chara_id, callname) {
    return era.set(`callname:${this.id}:${chara_id}`, callname);
  }

  /**
   * 获取对其他所有角色的称呼
   * @returns {Record<string, string>} 结果Record，键是其他角色ID，值是对该角色的称呼
   */
  get_all_callnames() {
    return era.get(`callname:${this.id}`);
  }

  /**
   * 获取对其他角色的好感/信赖
   * @param {number|string} chara_id 要获取好感/信赖的目标角色
   * @returns {number}
   */
  relation_to(chara_id) {
    return era.get(`relation:${this.id}:${chara_id}`);
  }

  /**
   * 设置对其他角色的好感/信赖
   * @param {number|string} chara_id 要设置好感/信赖的目标角色
   * @param {number} relation 对目标角色的新好感/信赖
   * @returns {number}
   */
  set_relation_to(chara_id, relation) {
    return era.set(`relation:${this.id}:${chara_id}`, relation);
  }

  /**
   * 获取对其他所有角色的好感/信赖
   * @returns {Record<string, number>} 结果Record，键是其他角色ID，值是对该角色的好感/信赖
   */
  get_all_relations() {
    return era.get(`relation:${this.id}`);
  }

  /** @type {EraCflag} */
  cflag;

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
    this.cflag = new EraCflag(chara_id);
  }
}

module.exports = EraChara;
// GENERATED END