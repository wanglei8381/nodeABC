var DataType = {
  "number" : "number",
  "string" : "string",
  "boolean" : "boolean",
  "array" : "array",
  "buffer" : "buffer",
  "date" : "date",
  "object" : "object"
};

var tableRule = {
  deleted : true,
  updated : true,
  keys : null,
  where : null,
  order : null
};

var fieldRule = {
  type : DataType.object,
  default : null,
  min : Number.NEGATIVE_INFINITY,
  max : Number.POSITIVE_INFINITY,
  minlength : 0,
  maxlength : Number.MAX_VALUE,
  required : false,
  enum : null,
  check : null,
  trim : false,
  render : null,
  updated : true,
  msg : null
};


exports.tableRule = tableRule;
exports.fieldRule = fieldRule;
