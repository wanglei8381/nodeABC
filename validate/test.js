require('./model');
var db = require('./db');

var task = {
  "liable": "ZY0024",
  "taskStat": 'ss',
  "taskCtt": "测试任务内容",
  "target": "5628405a1394c8337fedee74",
  "toTime": "2015-10-26",
  "situation": 0,
  "taskTtl": "测试任务名称4"
}

db.task.save(task,function(msg){
  if(msg == null) {
    console.log('保存验证通过');
  }else{
    console.log(msg);
  }
});