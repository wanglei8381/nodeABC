var glob = require('glob');


var cwd = '/Users/wanglei/platform/workspace/style-m-weixin/';

var patternList = ['pages/**', '!pages/company/src/info.js'];


var pattern = '{' + patternList.join(',') + '}';
// var pattern = "{./*/*,/*}"
console.log(pattern);
glob(pattern, {cwd: cwd}, function (err, files) {
    if (err)
        console.log(err);
    else
        console.log(files);
})