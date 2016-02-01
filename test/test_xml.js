var xml2js = require('xml2js');

var biz_content='<?xml version="1.0" encoding="gbk"?><XML><AppId><![CDATA[2014072300007148]]></AppId><FromUserId></FromUserId><CreateTime><![CDATA[1406083506817]]></CreateTime><MsgType><![CDATA[event]]></MsgType><EventType><![CDATA[verifygw]]></EventType><ActionParam></ActionParam><AgreementId></AgreementId><AccountNo></AccountNo></XML>';

var parser = new xml2js.Parser();

parser.parseString(biz_content,function(err,result){
  console.log(err,result);
});

console.log('123643646');