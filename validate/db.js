var rule = require('./rule');
var validate = require('./validate');
var fieldRule = rule.fieldRule;

var ObjProto = Object.prototype;

exports = module.exports = {};

exports.add = function(models){
  if(isPlainObject(models)) {
    for(var key in models) {
      this[key] = defaultRule(models[key]);
      //保存操作验证
      this[key].save = function(entity,callback){
        var result = validate.call(this, entity);
        if(result === 'success') {
          callback(null);
        } else {
          callback(result);
        }
      }
      //修改操作验证
      this[key].update = function(entity){
        modelHandler(this, entity);
        var result = validate.call(this, entity);
        if(result === 'success') {
          callback(null);
        } else {
          callback(result);
        }
      }
    }
  }
}

var modelHandler = function (model, entity) {
  for (var key in model) {
    if (!entity.hasOwnProperty(key)) {
      entity[key] = null;
    }
  }
};

/**
 * 是否是Object对象
 */
var isObject = function (obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};

/**
 * 是否是纯对象
 */
var isPlainObject = function (obj) {
  return isObject(obj) && Object.getPrototypeOf(obj) == ObjProto;
};

var extend = function(target, source) {
  var key = null;
  if (target == null) {
    target = {};
  }
  for (key in source) {
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
};

/**
 * 给model添加默认的规则
 * @param model
 */
function defaultRule(model) {
  for(var key in model) {
    model[key] = extend(model[key],fieldRule);
  }
  return model;
}
