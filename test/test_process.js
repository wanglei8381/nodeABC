/**
 * process对象是一个全局对象，可以在任何地方访问到它。 它是EventEmitter的一个实例。
 *
 process.env对象：
 { ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\Administrator\\AppData\\Roaming',
  'asl.log': 'Destination=file',
  CommonProgramFiles: 'C:\\Program Files\\Common Files',
  'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
  CommonProgramW6432: 'C:\\Program Files\\Common Files',
  COMPUTERNAME: 'PC-20150306CIKT',
  ComSpec: 'C:\\Windows\\system32\\cmd.exe',
  DEVMGR_SHOW_DETAILS: '1',
  FP_NO_HOST_CHECK: 'NO',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\Administrator',
  LOCALAPPDATA: 'C:\\Users\\Administrator\\AppData\\Local',
  LOGONSERVER: '\\\\PC-20150306CIKT',
  MOZ_PLUGIN_PATH: 'D:\\soft\\Foxit Reader\\plugins\\',
  //node依赖包的位置
  NODE_PATH: 'D:\\soft\\AppCanStudioEnterpriseV3.1\\HDK\\emulator\\mas\\node_modules',
  //CPU的个数
  NUMBER_OF_PROCESSORS: '4',
  //操作系统的名字
  OS: 'Windows_NT',
  //环境变量
  Path: 'C:\\Program Files (x86)\\Common Files\\NetSarang;C:\\ProgramData\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Intel\\iCLS Client\\;C:\\Program Files\\Intel\\iCLS Client\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files\\Intel\\Intel(R) Management Engine Components\\IPT;C:\\Program Files (x86)\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files (x86)\\Intel\\Intel(R) Management Engine Components\\IPT;D:\\soft\\SlikSvn\\bin;D:\\soft\\TortoiseSVN\\bin;D:\\platform\\nodejs;D:\\soft\\OpenVPN\\bin;C:\\Users\\Administrator\\AppData\\Roaming\\npm',
  PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
  PROCESSOR_ARCHITECTURE: 'AMD64',
  PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 60 Stepping 3, GenuineIntel',
  PROCESSOR_LEVEL: '6',
  PROCESSOR_REVISION: '3c03',
  ProgramData: 'C:\\ProgramData',
  ProgramFiles: 'C:\\Program Files',
  'ProgramFiles(x86)': 'C:\\Program Files (x86)',
  ProgramW6432: 'C:\\Program Files',
  PSModulePath: 'C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules\\',
  PUBLIC: 'C:\\Users\\Public',
  SESSIONNAME: 'Console',
  SystemDrive: 'C:',
  SystemRoot: 'C:\\Windows',
  TEMP: 'C:\\Users\\ADMINI~1\\AppData\\Local\\Temp',
  TMP: 'C:\\Users\\ADMINI~1\\AppData\\Local\\Temp',
  USERDOMAIN: 'PC-20150306CIKT',
  USERNAME: 'Administrator',
  USERPROFILE: 'C:\\Users\\Administrator',
  windir: 'C:\\Windows',
  windows_tracing_flags: '3',
  windows_tracing_logfile: 'C:\\BVTBin\\Tests\\installpackage\\csilogfile.log' }
 */

process.stdin.setEncoding('utf8');
process.stdout.setEncoding('utf8');
process.stderr.setEncoding('utf8');

console.log('当前文件的目录', process.cwd());
console.log('切换目录', process.chdir('e:\\platform\\workspace\\nodeABC') || '', process.cwd());

//标准输出流
process.stdout.write('标准输出流\n');
process.stderr.write('标准错误输出流\n');

/*process.stdin.on('readable',function(){
 var chunk = process.stdin.read();
 if(chunk !== null){
 process.stdout.write('data: ' + chunk);
 }
 });*/

console.log('title', process.title);
console.log('node已经运行的时间（秒）', process.uptime());
console.log('node版本', process.version);
console.log('node版本详情', process.versions);
console.log('node发布信息', process.release);
console.log('操作系统平台', process.platform);
console.log('进程', process.pid);
console.log('主模块', process.mainModule);
console.log('操作系统CPU架构', process.arch);
console.log('命令行参数', process.argv);
console.log('环境变量', process.env);
console.log('内存使用情况', process.memoryUsage());
/*var oldmask, newmask = 0022;
 oldmask = process.umask(newmask);
 console.log('Changed umask from: ' + oldmask.toString(8) +
 ' to ' + newmask.toString(8));*/

//POSIX platforms
if (process.getuid) {
  console.log('uid', process.getuid());
}

//process.stdout.on('data',function(data){
//  console.log('out',data);
//});

/*
 process.on('uncaughtException', function(err) {
 console.error('Caught exception: ' + err);
 });
 nonexistentFunc();*/
