var getBody = require('raw-body');

var hasBody = function (req) {
  var encoding = 'transfer-encoding' in req.headers;
  var length = 'content-length' in req.headers && req.headers['content-length'] !== '0';
  return encoding || length;
}

var mime = function (req) {
  var str = req.headers['content-type'] || '';
  return str.split(';')[0];
};

var regexp = /^application\/([\w!#\$%&\*`\-\.\^~]*\+)?json$/i;

exports = module.exports = function json(req, res, next, options) {
  options = options || {};

  req.body = req.body || {};
  if (!hasBody(req)) return next();

  if (!regexp.test(mime(req))) return next();

  getBody(req, {
    limit: options.limit || '1mb',
    length: req.headers['content-length'],
    encoding: 'utf8'
  }, function (err, buf) {
    if(err) return next(err);
    try {
      req.body = JSON.parse(buf);
      next();
    } catch (err){
      err.body = buf;
      err.status = 400;
      next(err);
    }

  });

}