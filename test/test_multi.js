var formidable = require('formidable'),
  http = require('http'),
  util = require('util');

http.createServer(function (req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

    if (req.method === 'POST') {
      var form = new formidable.IncomingForm();
      form.uploadDir = 'D:\\usr\\local\\files';
      form.parse(req, function (err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        console.log('###########################');
        console.log(files.upload);
        console.log(files.upload.path);
        console.log(files.upload.size);
        console.log(files.upload.name);
        console.log(files.upload.type);
        console.log(files.upload.hash);
        console.log(files.upload.lastModifiedDate);
        res.end(util.inspect({fields: fields, files: files}));
      });
    } else {

    }

    return;
  }

  // show a file upload form 
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="text" name="title"><br>' +
    '<input type="file" name="upload" multiple="multiple"><br>' +
    '<input type="file" name="upload2" multiple="multiple"><br>' +
    '<input type="submit" value="Upload">' +
    '</form>'
  );
}).listen(8080);