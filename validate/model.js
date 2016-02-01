var db = require('./db');


//数据库表
exports.entityType = {
  "01" : "target",
  "02" : "task",
  "03" : "weeklyreport",
  "04" : "monthlyreport",
  "05" : "culture",
  "06" : "cultivate",
  "07" : "active",
  "08" : "members",
  "09" : "notice",
  "10" : "rule",
  "11" : "staffTurnover",
  "12" : "duty",
  "16" : "attbaseaddress",
  "17" : "attrule"
};
//标题
var titlemin = 1;
var titlemax = 50;
//文本
var contentmin = 5;
var contentmax = 1000;
//备注类说明内容
var remarkmin = 1;
var remarkmax = 300;
var titleCheck = function(title){
  var reg = /^[-_—.a-zA-Z0-9\u4e00-\u9fa5]+$/;
  return reg.test(title);
}

var titleRule = {required:true,type:'string',minlength:titlemin,maxlength:titlemax,check:titleCheck};
var contentRule = {required:true,type:'string',minlength:contentmin,maxlength:contentmax};
var remarkRule = {required:true,type:'string',minlength:remarkmin,maxlength:remarkmax};
//表字段
db.add({
  "target" : {
    "trgtTtl" : titleRule,
    "trgtType" : {required:true,type:'number',enum:[0,1,2,3,4]},
    "trgtCnt" : null,
    "fromTime" : {required:true},
    "toTime" : {required:true},
    "trgtSchedule" : {required:true, type:'number',default:0,enum:[0,1,2,3,4,5,6,7,8,9,10]},
    "trgtStat" : {required:true, type:'number',default:0,enum:[0,1]},
    "liable" : {
      render:function(val,item){
        if(!Object.isEmpty(val)){
          return val;
        }
        return item.userId;
      }
    },
    "partake" : null,
    "trgtIcon" : null
  },
  "task" : {
    "taskTtl" : titleRule,
    "situation" : {required:true,type:'number',enum:[0,1,2]},
    "toTime" : {required:true},
    "target" : null,
    "taskCtt" : null,
    "taskStat" : {type:'number', default:0,enum:[0,1]},
    "liable" : {
      render:function(val,item){
        if(!Object.isEmpty(val)){
          return val;
        }
        return item.userId;
      }
    }
  },
  "weeklyreport" : {
    "rptTtl" : {required:true},
    "fromDate" : {required:true},
    "toDate" : {required:true},
    "trgt" : null,
    "task" : null,
    "cstm" : null,
    "summary" : contentRule,
    "attachment" : null,
    "plan" : contentRule,
    "receive" : {required:true},
    "rptStat" : {default:1,type:'number',enum:[0,1]}
  },
  "monthlyreport" : {
    "rptTtl" : {required:true},
    "fromDate" : {required:true},
    "toDate" : {required:true},
    "trgt" : null,
    "task" : null,
    "cstm" : null,
    "summary" : contentRule,
    "attachment" : null,
    "plan" : null,
    "receive" : {required:true},
    "rptStat" : {default:1,type:'number',enum:[0,1]}
  },
  "culture" : {
    "cltrTtl" : titleRule,
    "cltrType" : {required:true,type:'number',enum:[0,1,2,3]},
    "cltrStat" : {required:true,type:'number',enum:[0,1,2]},
    "applyType" : {required:true,type:'number',enum:[0,1]},
    "applyBranchs" : null,
    "content" : {required:true},
    "remark" : remarkRule
  },
  "cultivate" : {
    "cultTtl" : titleRule,
    "cultSpdptName" : {required:true},
    "endLineTime" : {required:true},
    "cultTime" : {required:true},
    "classHour" : {required:true},
    "cultLecturer" : {required:true},
    "cultObj" : {required:true},
    "cultAddress" : {required:true,type:'number',enum:[0,1,2]},
    "cultNumber" : {required:true},
    "applyType" : {required:true,type:'number',enum:[0,1]},
    "applyBranchs" : null,
    "cultCtt" : {required:true},
    "remark" : null,
    "cultStat" : {default:0,type:'number',enum:[0,1,2,3,4]}
  },
  "active" : {
    "actvTtl" : titleRule,
    "actvType" : {type:'number',enum:[0,1,2,3,4]},//0羽毛球、1篮球、2足球、3户外、4其他
    "endLineTime" : {required:true},
    "actvTime" : {required:true},
    "actvAddress" : {required:true},
    "prtkMax" : {required:true,type:'number'},
    "prtkMin" : {required:true,type:'number'},
    "applyType" : {required:true,type:'number',enum:[0,1]},
    "applyBranchs" : null,
    "actvCtt" : {required:true},
    "remark" : null,
    "actvStat": {default:0,type:'number',enum:[0,1,2,3,4]} //0未发布、1报名中、2报名截止、3已结束、4已取消
  },
  "members" : {
      "objObjectId" : {required:true},
      "objEntityTypeId" : {required:true,enum:[0,1],render:function(val,item){
        if(val == 0){
          return "cultivate";
        } else {
          return "active";
        }
        return item.userId;
      }},
      "memberUserId" : {required:true},
      "memberUserName" : {required:true},
      "dptId" : null,
      "dptName" : null,
      "posId" : null,
      "posName" : null,
      "signupType" : {type:'number',enum:[0,1]} //0自己报名、1代报名
  },
  "notice" : {
      "noticeTtl" : titleRule,
      "noticeType" : {type:'number',enum:[0,1,2,3,4,5]},//0假期、1福利、2活动、3积分获取、4温馨提示、5其他
      "noticeStat" : {default:0,type:'number',enum:[0,1,2]},//0未发布、1已发布、2关闭
      "applyType" : {required:true,type:'number',enum:[0,1]},
      "applyBranchs" : null,
      "remark" : null,
      "noticeCtt" : {required:true}
  },
  "rule" : {
      "ruleTtl" : titleRule,
      "keyWord" : {required:true},
      "ruleStat" : {default:0,type:'number',enum:[0,1,2]},//0未发布、1已发布、2关闭
      "applyType" : {required:true,type:'number',enum:[0,1]},
      "applyBranchs" : null,
      "remark" : null,
      "ruleCtt" : {required:true}
  },
  "staffTurnover" : {
      "entryTtl" : titleRule,
      "entryType" : {required:true,type:'number',enum:[0,1]},
      "remark" : {required:true},
      "staffs" : {required:true}
  },
  "duty" : {
      "center" : {required:true},
      "jobTitle" : {required:true},
      "jobDuty" : {required:true},
      "keyKpl" : {required:true}
  },
  "attbaseaddress" : {
      "attAddress" : {required:true},
      "longitude" : {required:true},
      "latitude" : {required:true}
  },
  "attrule" : {
      "year" : {required:true},
      "workPeriod" : {required:true},
      "notWorkDay" : null,
      "otherWorkDay" : null,
      "inTime" : {required:true},
      "outTime" : {required:true},
      "restTime" : null
  }
});
