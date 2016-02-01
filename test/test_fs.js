/**
 * 文件操作
 */

var fs = require('fs');
var BASE_DIR = 'E:\\test\\';
var log = function () {
  console.log.apply(this, arguments);
}

//判段文件夹是否存在
fs.exists(BASE_DIR + 'tmp', function (exists) {
  if (exists) {
    var stats = fs.statSync(BASE_DIR + 'tmp');
    log('文件的状态1',JSON.stringify(stats));
    //创建文件夹
    fs.stat(BASE_DIR + 'tmp', function(err, stats){
      if(!err){
        log('文件的状态2',JSON.stringify(stats));
      }

    })
  }

})

//异步写入文件，如果文件已经存在则会被替换
fs.writeFile(BASE_DIR + 'test.txt', '王磊', function (err) {
  log(err);
  if (!err) {
    fs.readFile(BASE_DIR + 'test.txt', function (err, data) {
      if (!err) {
        log('读取文件', data.toString());
      }
    })
  }
});

//异步追加写入文件
fs.appendFile(BASE_DIR + 'test.txt', 'lilei', function (err) {
  log(err);
  if (!err) {
    fs.readFile(BASE_DIR + 'test.txt', function (err, data) {
      if (!err) {
        log('读取文件', data.toString());
      }
    })
  }
});

//判段文件是否存在
fs.exists(BASE_DIR + 'test.txt', function (exists) {
  log('文件是否存在', exists);
  if (exists) {
    //文件重命名或移动文件
    fs.rename(BASE_DIR + 'test.txt', BASE_DIR + 'test2.txt', function (err) {
      log('更改文件姓名', err);
    });
  }

})

//判段文件是否存在
fs.exists(BASE_DIR + 'test2.txt', function (exists) {
  log('文件是否存在', exists);
  if (exists) {
    //文件删除
    fs.unlink(BASE_DIR + 'test2.txt', function (err) {
      log('删除文件', err);
    });
  }

})

//判段文件夹是否存在
fs.exists(BASE_DIR + 'tmp', function (exists) {
  if (!exists) {
    //创建文件夹
    fs.mkdir(BASE_DIR + 'tmp', function (err) {
      log('创建文件夹', err);
    })
  } else {
    //删除文件夹
    fs.rmdir(BASE_DIR + 'tmp', function (err) {
      log('删除文件夹', err);
    })
  }
})

//读取文件夹下所有的文件
fs.readdir(BASE_DIR,function(err,files){
  if(!err) {
    log('读取文件夹下所有的文件',files);
  }
});
