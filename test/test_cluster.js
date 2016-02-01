/**

 cluster对象
 cluster的各种属性和函数
 cluster.setttings:配置集群参数对象
 cluster.isMaster:判断是不是master节点
 cluster.isWorker:判断是不是worker节点
 Event: 'fork': 监听创建worker进程事件
 Event: 'online': 监听worker创建成功事件
 Event: 'listening': 监听worker向master状态事件
 Event: 'disconnect': 监听worker断线事件
 Event: 'exit': 监听worker退出事件
 Event: 'setup': 监听setupMaster事件
 cluster.setupMaster([settings]): 设置集群参数
 cluster.fork([env]): 创建worker进程
 cluster.disconnect([callback]): 关闭worket进程
 cluster.worker: 获得当前的worker对象
 cluster.workers: 获得集群中所有存活的worker对象


 worker对象
 worker的各种属性和函数：可以通过cluster.workers, cluster.worket获得。
 worker.id: 进程ID号
 worker.process: ChildProcess对象
 worker.suicide: 在disconnect()后，判断worker是否自杀
 worker.send(message, [sendHandle]): master给worker发送消息。注：worker给发master发送消息要用process.send(message)
 worker.kill([signal='SIGTERM']): 杀死指定的worker，别名destory()
 worker.disconnect(): 断开worker连接，让worker自杀
 Event: 'message': 监听master和worker的message事件
 Event: 'online': 监听指定的worker创建成功事件
 Event: 'listening': 监听master向worker状态事件
 Event: 'disconnect': 监听worker断线事件
 Event: 'exit': 监听worker退出事件

 */

var cluster = require('cluster');
var http = require('http');
var CPU_NUM = require('os').cpus().length;

if (cluster.isMaster) {
  console.log('[master] ' + "start master...");

  for (var i = 0; i < CPU_NUM; i++) {
    var wk = cluster.fork({"APPCAN":"appcan"+(i+1)});
    wk.send('[master] ' + 'hi worker' + wk.id);
  }

  //监听创建worker进程事件
  cluster.on('fork', function (worker) {
    console.log('[master] ' + 'fork: worker' + worker.id);
  });

  //监听worker创建成功事件
  cluster.on('online', function (worker) {
    console.log('[master] ' + 'online: worker' + worker.id);
  });

  //监听master向worker状态事件
  cluster.on('listening', function (worker, address) {
    console.log('[master] ' + 'listening: worker' + worker.id + ',pid:' + worker.process.pid + ', Address:' + address.address + ":" + address.port);
  });

  //发生于工作进程结束时，通常是调用 .kill() 之后
  cluster.on('disconnect', function (worker) {
    console.log('[master] ' + 'disconnect: worker' + worker.id);
  });

  cluster.on('exit', function (worker, code, signal) {
    console.log('[master] ' + 'exit worker' + worker.id + ' died');
  });

  function eachWorker(callback) {
    for (var id in cluster.workers) {
      callback(cluster.workers[id]);
    }
  }

  setTimeout(function () {
    eachWorker(function (worker) {
      worker.send('[master] ' + 'send message to worker' + worker.id);
    });
  }, 3000);

  Object.keys(cluster.workers).forEach(function (id) {
    cluster.workers[id].on('message', function (msg) {
      console.log('[master] ' + 'message ' + msg);
    });
  });

} else if (cluster.isWorker) {
  console.log('[worker] ' + "start worker ..." + cluster.worker.id);
  console.log(process.env.APPCAN);
  process.on('message', function (msg) {
    console.log('[worker] ' + msg);
    process.send('[worker] worker' + cluster.worker.id + ' received!');
  });

  http.createServer(function (req, res) {
    res.writeHead(200, {"content-type": "text/html"});
    res.end('worker' + cluster.worker.id + ',PID:' + process.pid);
  }).listen(3000);

}



