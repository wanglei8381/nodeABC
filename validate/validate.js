require('./axe.object.js');
//错误返回值
var errMsg = {
  "001" : "The # field does not exist",
  "002" : "The # field is required",
  "003" : "The # field value is not allowed",
  "004" : "The minimum value of the # field is ",
  "005" : "The maximum value of the # field is ",
  "006" : "The minimum length of the # field is ",
  "007" : "The maximum length of the # field is ",
  "008" : "The # field check failed",
  "009" : "The # field must be a number"
};

/**
 * 验证实体是否满足规则
 * @param entity 需要验证的实体
 * @param callback
 * @returns {*}
 */
exports = module.exports = function (entity) {

  for (var key in entity) {

    var val = entity[key];
    var rule = this[key];
    if (!this.hasOwnProperty(key)) {
      return errMsg['001'].replace('#', key);
    }
    if (Object.isEmpty(val)) {
      val = rule.default;
    }
    if (rule.required && Object.isEmpty(val)) {
      return errMsg['002'].replace('#', key);
    }
    if (rule.type === 'number') {
      val = Number(val);
      if (rule.min > val) {
        return errMsg['004'].replace('#', key) + rule.min;
      }
      if (rule.max < val) {
        return errMsg['005'].replace('#', key) + rule.max;
      }
    } else if (rule.type === 'string') {
      if (rule.minlength > val.length) {
        return errMsg['006'].replace('#', key) + rule.minlength;
      }
      if (rule.maxlength < val.length) {
        return errMsg['007'].replace('#', key) + rule.maxlength;
      }
    }
    if (!Object.isEmpty(rule.enum)) {
      var exist = false;
      rule.enum.each(function (item) {
        if (item === val) {
          exist = true;
          return true;
        }
      });
      if (!exist)
        return errMsg['003'].replace('#', key);
    }
    if (Object.isFunction(rule.check)) {
      if (!rule.check(val, entity)) {
        return errMsg['008'].replace('#', key);
      }
    }

    if (Object.isFunction(rule.render)) {
      val = rule.render(val, entity);
    }
    entity[key] = val;
  }
  return "success";
}