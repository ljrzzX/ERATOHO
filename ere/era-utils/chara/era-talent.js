// GENERATED START
const era = require('#/era-electron');

/**
 * @param {number|string} param
 * @returns {number}
 */
function get(param) {
  return era.get(`talent:${this.id}:${param}`) || 0;
}

class EraTalent {
  /**
   * 处女
   * @returns {number}
   */
  get "virgin"() {
    return era.get(`talent:${this.id}:0`);
  }
  /**
   * 处女
   * @param {number} v
   */
  set "virgin"(v) {
    era.set(`talent:${this.id}:0`, v);
  }
  /**
   * 胆小
   * @returns {number}
   */
  get "coward"() {
    return era.get(`talent:${this.id}:10`);
  }
  /**
   * 胆小
   * @param {number} v
   */
  set "coward"(v) {
    era.set(`talent:${this.id}:10`, v);
  }
  /**
   * 抗逆
   * @returns {number}
   */
  get "resist"() {
    return era.get(`talent:${this.id}:11`);
  }
  /**
   * 抗逆
   * @param {number} v
   */
  set "resist"(v) {
    era.set(`talent:${this.id}:11`, v);
  }
  /**
   * 刚强
   * @returns {number}
   */
  get "tough"() {
    return era.get(`talent:${this.id}:12`);
  }
  /**
   * 刚强
   * @param {number} v
   */
  set "tough"(v) {
    era.set(`talent:${this.id}:12`, v);
  }
  /**
   * 坦率
   * @returns {number}
   */
  get "frankness"() {
    return era.get(`talent:${this.id}:13`);
  }
  /**
   * 坦率
   * @param {number} v
   */
  set "frankness"(v) {
    era.set(`talent:${this.id}:13`, v);
  }
  /**
   * 温顺
   * @returns {number}
   */
  get "meek"() {
    return era.get(`talent:${this.id}:14`);
  }
  /**
   * 温顺
   * @param {number} v
   */
  set "meek"(v) {
    era.set(`talent:${this.id}:14`, v);
  }
  /**
   * 自尊
   * @returns {number}
   */
  get "self_esteem"() {
    return era.get(`talent:${this.id}:15`);
  }
  /**
   * 自尊
   * @param {number} v
   */
  set "self_esteem"(v) {
    era.set(`talent:${this.id}:15`, v);
  }
  /**
   * 自傲
   * @returns {number}
   */
  get "arrogance"() {
    return era.get(`talent:${this.id}:16`);
  }
  /**
   * 自傲
   * @param {number} v
   */
  set "arrogance"(v) {
    era.set(`talent:${this.id}:16`, v);
  }
  /**
   * 自卑
   * @returns {number}
   */
  get "inferiority"() {
    return era.get(`talent:${this.id}:17`);
  }
  /**
   * 自卑
   * @param {number} v
   */
  set "inferiority"(v) {
    era.set(`talent:${this.id}:17`, v);
  }
  /**
   * 自制
   * @returns {number}
   */
  get "self_control"() {
    return era.get(`talent:${this.id}:20`);
  }
  /**
   * 自制
   * @param {number} v
   */
  set "self_control"(v) {
    era.set(`talent:${this.id}:20`, v);
  }
  /**
   * 冷漠
   * @returns {number}
   */
  get "indifference"() {
    return era.get(`talent:${this.id}:21`);
  }
  /**
   * 冷漠
   * @param {number} v
   */
  set "indifference"(v) {
    era.set(`talent:${this.id}:21`, v);
  }
  /**
   * 无感情
   * @returns {number}
   */
  get "emotionless"() {
    return era.get(`talent:${this.id}:22`);
  }
  /**
   * 无感情
   * @param {number} v
   */
  set "emotionless"(v) {
    era.set(`talent:${this.id}:22`, v);
  }
  /**
   * 好奇
   * @returns {number}
   */
  get "curiosity"() {
    return era.get(`talent:${this.id}:23`);
  }
  /**
   * 好奇
   * @param {number} v
   */
  set "curiosity"(v) {
    era.set(`talent:${this.id}:23`, v);
  }
  /**
   * 保守
   * @returns {number}
   */
  get "conservativeness"() {
    return era.get(`talent:${this.id}:24`);
  }
  /**
   * 保守
   * @param {number} v
   */
  set "conservativeness"(v) {
    era.set(`talent:${this.id}:24`, v);
  }
  /**
   * 乐观
   * @returns {number}
   */
  get "optimism"() {
    return era.get(`talent:${this.id}:25`);
  }
  /**
   * 乐观
   * @param {number} v
   */
  set "optimism"(v) {
    era.set(`talent:${this.id}:25`, v);
  }
  /**
   * 悲观
   * @returns {number}
   */
  get "pessimism"() {
    return era.get(`talent:${this.id}:26`);
  }
  /**
   * 悲观
   * @param {number} v
   */
  set "pessimism"(v) {
    era.set(`talent:${this.id}:26`, v);
  }
  /**
   * 难以逾越的界限
   * @returns {number}
   */
  get "limit"() {
    return era.get(`talent:${this.id}:27`);
  }
  /**
   * 难以逾越的界限
   * @param {number} v
   */
  set "limit"(v) {
    era.set(`talent:${this.id}:27`, v);
  }
  /**
   * 引人注目
   * @returns {number}
   */
  get "attractive"() {
    return era.get(`talent:${this.id}:28`);
  }
  /**
   * 引人注目
   * @param {number} v
   */
  set "attractive"(v) {
    era.set(`talent:${this.id}:28`, v);
  }
  /**
   * 贞洁
   * @returns {number}
   */
  get "chastity"() {
    return era.get(`talent:${this.id}:30`);
  }
  /**
   * 贞洁
   * @param {number} v
   */
  set "chastity"(v) {
    era.set(`talent:${this.id}:30`, v);
  }
  /**
   * 贞操无定
   * @returns {number}
   */
  get "debauchery"() {
    return era.get(`talent:${this.id}:31`);
  }
  /**
   * 贞操无定
   * @param {number} v
   */
  set "debauchery"(v) {
    era.set(`talent:${this.id}:31`, v);
  }
  /**
   * 性压抑
   * @returns {number}
   */
  get "repression"() {
    return era.get(`talent:${this.id}:32`);
  }
  /**
   * 性压抑
   * @param {number} v
   */
  set "repression"(v) {
    era.set(`talent:${this.id}:32`, v);
  }
  /**
   * 解放
   * @returns {number}
   */
  get "liberation"() {
    return era.get(`talent:${this.id}:33`);
  }
  /**
   * 解放
   * @param {number} v
   */
  set "liberation"(v) {
    era.set(`talent:${this.id}:33`, v);
  }
  /**
   * 抵抗
   * @returns {number}
   */
  get "resistance"() {
    return era.get(`talent:${this.id}:34`);
  }
  /**
   * 抵抗
   * @param {number} v
   */
  set "resistance"(v) {
    era.set(`talent:${this.id}:34`, v);
  }
  /**
   * 脸皮薄
   * @returns {number}
   */
  get "shy"() {
    return era.get(`talent:${this.id}:35`);
  }
  /**
   * 脸皮薄
   * @param {number} v
   */
  set "shy"(v) {
    era.set(`talent:${this.id}:35`, v);
  }
  /**
   * 厚脸皮
   * @returns {number}
   */
  get "bold"() {
    return era.get(`talent:${this.id}:36`);
  }
  /**
   * 厚脸皮
   * @param {number} v
   */
  set "bold"(v) {
    era.set(`talent:${this.id}:36`, v);
  }
  /**
   * 有把柄
   * @returns {number}
   */
  get "handle"() {
    return era.get(`talent:${this.id}:37`);
  }
  /**
   * 有把柄
   * @param {number} v
   */
  set "handle"(v) {
    era.set(`talent:${this.id}:37`, v);
  }
  /**
   * 怕痛
   * @returns {number}
   */
  get "painful"() {
    return era.get(`talent:${this.id}:40`);
  }
  /**
   * 怕痛
   * @param {number} v
   */
  set "painful"(v) {
    era.set(`talent:${this.id}:40`, v);
  }
  /**
   * 无惧疼痛
   * @returns {number}
   */
  get "painless"() {
    return era.get(`talent:${this.id}:41`);
  }
  /**
   * 无惧疼痛
   * @param {number} v
   */
  set "painless"(v) {
    era.set(`talent:${this.id}:41`, v);
  }
  /**
   * 易湿
   * @returns {number}
   */
  get "wet"() {
    return era.get(`talent:${this.id}:42`);
  }
  /**
   * 易湿
   * @param {number} v
   */
  set "wet"(v) {
    era.set(`talent:${this.id}:42`, v);
  }
  /**
   * 不易湿
   * @returns {number}
   */
  get "dry"() {
    return era.get(`talent:${this.id}:43`);
  }
  /**
   * 不易湿
   * @param {number} v
   */
  set "dry"(v) {
    era.set(`talent:${this.id}:43`, v);
  }
  /**
   * 擅长学习
   * @returns {number}
   */
  get "smart"() {
    return era.get(`talent:${this.id}:50`);
  }
  /**
   * 擅长学习
   * @param {number} v
   */
  set "smart"(v) {
    era.set(`talent:${this.id}:50`, v);
  }
  /**
   * 不擅长学习
   * @returns {number}
   */
  get "stupid"() {
    return era.get(`talent:${this.id}:51`);
  }
  /**
   * 不擅长学习
   * @param {number} v
   */
  set "stupid"(v) {
    era.set(`talent:${this.id}:51`, v);
  }
  /**
   * 擅长用舌头
   * @returns {number}
   */
  get "tongue"() {
    return era.get(`talent:${this.id}:52`);
  }
  /**
   * 擅长用舌头
   * @param {number} v
   */
  set "tongue"(v) {
    era.set(`talent:${this.id}:52`, v);
  }
  /**
   * 容易自慰
   * @returns {number}
   */
  get "masturbate"() {
    return era.get(`talent:${this.id}:60`);
  }
  /**
   * 容易自慰
   * @param {number} v
   */
  set "masturbate"(v) {
    era.set(`talent:${this.id}:60`, v);
  }
  /**
   * 污臭钝感
   * @returns {number}
   */
  get "dirt_ok"() {
    return era.get(`talent:${this.id}:61`);
  }
  /**
   * 污臭钝感
   * @param {number} v
   */
  set "dirt_ok"(v) {
    era.set(`talent:${this.id}:61`, v);
  }
  /**
   * 污臭敏感
   * @returns {number}
   */
  get "dirt_no"() {
    return era.get(`talent:${this.id}:62`);
  }
  /**
   * 污臭敏感
   * @param {number} v
   */
  set "dirt_no"(v) {
    era.set(`talent:${this.id}:62`, v);
  }
  /**
   * 献身
   * @returns {number}
   */
  get "devoted"() {
    return era.get(`talent:${this.id}:63`);
  }
  /**
   * 献身
   * @param {number} v
   */
  set "devoted"(v) {
    era.set(`talent:${this.id}:63`, v);
  }
  /**
   * 接受快感
   * @returns {number}
   */
  get "pleasure_ok"() {
    return era.get(`talent:${this.id}:70`);
  }
  /**
   * 接受快感
   * @param {number} v
   */
  set "pleasure_ok"(v) {
    era.set(`talent:${this.id}:70`, v);
  }
  /**
   * 否定快感
   * @returns {number}
   */
  get "pleasure_no"() {
    return era.get(`talent:${this.id}:71`);
  }
  /**
   * 否定快感
   * @param {number} v
   */
  set "pleasure_no"(v) {
    era.set(`talent:${this.id}:71`, v);
  }
  /**
   * 容易中毒
   * @returns {number}
   */
  get "poison"() {
    return era.get(`talent:${this.id}:72`);
  }
  /**
   * 容易中毒
   * @param {number} v
   */
  set "poison"(v) {
    era.set(`talent:${this.id}:72`, v);
  }
  /**
   * 即堕
   * @returns {number}
   */
  get "degradation"() {
    return era.get(`talent:${this.id}:73`);
  }
  /**
   * 即堕
   * @param {number} v
   */
  set "degradation"(v) {
    era.set(`talent:${this.id}:73`, v);
  }
  /**
   * 倒错
   * @returns {number}
   */
  get "perversion"() {
    return era.get(`talent:${this.id}:80`);
  }
  /**
   * 倒错
   * @param {number} v
   */
  set "perversion"(v) {
    era.set(`talent:${this.id}:80`, v);
  }
  /**
   * 双性恋
   * @returns {number}
   */
  get "bisexual"() {
    return era.get(`talent:${this.id}:81`);
  }
  /**
   * 双性恋
   * @param {number} v
   */
  set "bisexual"(v) {
    era.set(`talent:${this.id}:81`, v);
  }
  /**
   * 讨厌男性
   * @returns {number}
   */
  get "hate_man"() {
    return era.get(`talent:${this.id}:82`);
  }
  /**
   * 讨厌男性
   * @param {number} v
   */
  set "hate_man"(v) {
    era.set(`talent:${this.id}:82`, v);
  }
  /**
   * 虐待狂
   * @returns {number}
   */
  get "sadism"() {
    return era.get(`talent:${this.id}:83`);
  }
  /**
   * 虐待狂
   * @param {number} v
   */
  set "sadism"(v) {
    era.set(`talent:${this.id}:83`, v);
  }
  /**
   * 嫉妒
   * @returns {number}
   */
  get "jealousy"() {
    return era.get(`talent:${this.id}:84`);
  }
  /**
   * 嫉妒
   * @param {number} v
   */
  set "jealousy"(v) {
    era.set(`talent:${this.id}:84`, v);
  }
  /**
   * 恋慕
   * @returns {number}
   */
  get "admiration"() {
    return era.get(`talent:${this.id}:85`);
  }
  /**
   * 恋慕
   * @param {number} v
   */
  set "admiration"(v) {
    era.set(`talent:${this.id}:85`, v);
  }
  /**
   * 盲信
   * @returns {number}
   */
  get "faith"() {
    return era.get(`talent:${this.id}:86`);
  }
  /**
   * 盲信
   * @param {number} v
   */
  set "faith"(v) {
    era.set(`talent:${this.id}:86`, v);
  }
  /**
   * 小恶魔
   * @returns {number}
   */
  get "imp"() {
    return era.get(`talent:${this.id}:87`);
  }
  /**
   * 小恶魔
   * @param {number} v
   */
  set "imp"(v) {
    era.set(`talent:${this.id}:87`, v);
  }
  /**
   * 妖狐
   * @returns {number}
   */
  get "yao_fox"() {
    return era.get(`talent:${this.id}:90`);
  }
  /**
   * 妖狐
   * @param {number} v
   */
  set "yao_fox"(v) {
    era.set(`talent:${this.id}:90`, v);
  }
  /**
   * 魅惑
   * @returns {number}
   */
  get "love_charm"() {
    return era.get(`talent:${this.id}:91`);
  }
  /**
   * 魅惑
   * @param {number} v
   */
  set "love_charm"(v) {
    era.set(`talent:${this.id}:91`, v);
  }
  /**
   * 迷之魅力
   * @returns {number}
   */
  get "mysterious"() {
    return era.get(`talent:${this.id}:92`);
  }
  /**
   * 迷之魅力
   * @param {number} v
   */
  set "mysterious"(v) {
    era.set(`talent:${this.id}:92`, v);
  }
  /**
   * 狐
   * @returns {number}
   */
  get "fox"() {
    return era.get(`talent:${this.id}:93`);
  }
  /**
   * 狐
   * @param {number} v
   */
  set "fox"(v) {
    era.set(`talent:${this.id}:93`, v);
  }
  /**
   * 小体型
   * @returns {number}
   */
  get "small_size"() {
    return era.get(`talent:${this.id}:100`);
  }
  /**
   * 小体型
   * @param {number} v
   */
  set "small_size"(v) {
    era.set(`talent:${this.id}:100`, v);
  }
  /**
   * ｃ钝感
   * @returns {number}
   */
  get "clitoris_ok"() {
    return era.get(`talent:${this.id}:101`);
  }
  /**
   * ｃ钝感
   * @param {number} v
   */
  set "clitoris_ok"(v) {
    era.set(`talent:${this.id}:101`, v);
  }
  /**
   * ｃ敏感
   * @returns {number}
   */
  get "clitoris_sens"() {
    return era.get(`talent:${this.id}:102`);
  }
  /**
   * ｃ敏感
   * @param {number} v
   */
  set "clitoris_sens"(v) {
    era.set(`talent:${this.id}:102`, v);
  }
  /**
   * ｖ钝感
   * @returns {number}
   */
  get "virgin_ok"() {
    return era.get(`talent:${this.id}:103`);
  }
  /**
   * ｖ钝感
   * @param {number} v
   */
  set "virgin_ok"(v) {
    era.set(`talent:${this.id}:103`, v);
  }
  /**
   * ｖ敏感
   * @returns {number}
   */
  get "virgin_sens"() {
    return era.get(`talent:${this.id}:104`);
  }
  /**
   * ｖ敏感
   * @param {number} v
   */
  set "virgin_sens"(v) {
    era.set(`talent:${this.id}:104`, v);
  }
  /**
   * ａ钝感
   * @returns {number}
   */
  get "anal_ok"() {
    return era.get(`talent:${this.id}:105`);
  }
  /**
   * ａ钝感
   * @param {number} v
   */
  set "anal_ok"(v) {
    era.set(`talent:${this.id}:105`, v);
  }
  /**
   * ａ敏感
   * @returns {number}
   */
  get "anal_sens"() {
    return era.get(`talent:${this.id}:106`);
  }
  /**
   * ａ敏感
   * @param {number} v
   */
  set "anal_sens"(v) {
    era.set(`talent:${this.id}:106`, v);
  }
  /**
   * 巨乳
   * @returns {number}
   */
  get "big_tit"() {
    return era.get(`talent:${this.id}:110`);
  }
  /**
   * 巨乳
   * @param {number} v
   */
  set "big_tit"(v) {
    era.set(`talent:${this.id}:110`, v);
  }
  /**
   * 恢复快
   * @returns {number}
   */
  get "healthy"() {
    return era.get(`talent:${this.id}:111`);
  }
  /**
   * 恢复快
   * @param {number} v
   */
  set "healthy"(v) {
    era.set(`talent:${this.id}:111`, v);
  }
  /**
   * 恢复慢
   * @returns {number}
   */
  get "peaky"() {
    return era.get(`talent:${this.id}:112`);
  }
  /**
   * 恢复慢
   * @param {number} v
   */
  set "peaky"(v) {
    era.set(`talent:${this.id}:112`, v);
  }
  /**
   * 魅力
   * @returns {number}
   */
  get "charm"() {
    return era.get(`talent:${this.id}:113`);
  }
  /**
   * 魅力
   * @param {number} v
   */
  set "charm"(v) {
    era.set(`talent:${this.id}:113`, v);
  }
  /**
   * 不思议之根
   * @returns {number}
   */
  get "penis"() {
    return era.get(`talent:${this.id}:120`);
  }
  /**
   * 不思议之根
   * @param {number} v
   */
  set "penis"(v) {
    era.set(`talent:${this.id}:120`, v);
  }
  /**
   * futa
   * @returns {number}
   */
  get "futa"() {
    return era.get(`talent:${this.id}:121`);
  }
  /**
   * futa
   * @param {number} v
   */
  set "futa"(v) {
    era.set(`talent:${this.id}:121`, v);
  }
  /**
   * 男人
   * @returns {number}
   */
  get "boy"() {
    return era.get(`talent:${this.id}:122`);
  }
  /**
   * 男人
   * @param {number} v
   */
  set "boy"(v) {
    era.set(`talent:${this.id}:122`, v);
  }
  get = get;
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  set(param, val) {
    return era.set(`talent:${this.id}:${param}`, val);
  }
  /**
   * @param {number|string} param
   * @param {number} val
   * @returns {number}
   */
  add(param, val) {
    return era.add(`talent:${this.id}:${param}`, get(param) + val);
  }

  /** @type {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }
}

module.exports = EraTalent;
// GENERATED END