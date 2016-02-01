var path = require('path');
console.log(path.normalize('/foo/bar//baz/asdf/quux/'));// \foo\bar\baz\asdf\quux\
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));// \foo\bar\baz\asdf
console.log(path.normalize('C:\Users\Administrator\Desktop\mas'));// C:UsersAdministratorDesktopmas
console.log(path.normalize('C:\\Users\\Administrator\\Desktop\\mas'));// C:\Users\Administrator\Desktop\mas
console.log(path.join('C:\\Users\\Administrator','Desktop\\mas'));// C:\Users\Administrator\Desktop\mas
console.log(path.join('Administrator','Desktop/mas'));// Administrator\Desktop\mas
console.log(path.resolve('/wwwroot', 'static_files/png/', '../gif/image.gif'));// e:\wwwroot\static_files\gif\image.gif
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));// e:\platform\workspace\nodeABC\test\wwwroot\static_files\gif\image.gif
console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('/baz/..'));// true
console.log(path.isAbsolute('qux/'));     // false
console.log(path.isAbsolute('.'));        // false
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')) //..\..\impl\bbb
console.log(path.dirname('/foo/bar/baz/asdf/quux')) // /foo/bar/baz/asdf
console.log(path.dirname('/foo/bar/baz/asdf/quux')) // /foo/bar/baz/asdf
console.log(path.basename('/foo/bar/baz/asdf/quux.html')) // quux.html
console.log(path.basename('/foo/bar/baz/asdf/quux.html','.html')) // quux
console.log(path.basename('/foo/bar/baz/asdf/quux.html','.htm')) // quux.html
console.log(path.extname('/foo/bar/baz/asdf/quux.html.htm')) // htm
console.log(path.basename('/foo/bar/baz/asdf/quux.html',path.extname('/foo/bar/baz/asdf/quux.html'))) // htm
console.log(path.sep)
