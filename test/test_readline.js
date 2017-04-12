var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
rl.setPrompt('please>');
rl.prompt();
rl.on('line',(line)=>{
  switch(line.trim()){
    case 'pause':
      rl.pause();
      break;
    case 'copy':
      console.log('复制');
      break;
    case 'hello':
      rl.write("Write");
      console.log('world!');
      break;
    default:
      console.log('没有找到命令');
      break;
  }
  rl.prompt();
});

rl.on('close',function(){
  console.log('欢迎下次再来');
  process.exit(0);
});
rl.on('pause', function() {
  console.log('Readline 输入暂停.');
});