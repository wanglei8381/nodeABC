var os = require('os');
var fs = require('fs');
function format(str) {
  var pem = '-----BEGIN RSA PRIVATE KEY-----' + os.EOL;
  var offset = 64;
  var index = 0;
  while (index < str.length) {
    pem += str.substr(index, offset) + os.EOL;
    index += offset;
  }
  pem += '-----END RSA PRIVATE KEY-----' + os.EOL;
  return pem;
}

fs.writeFileSync('E:\\platform\\workspace\\pay\\pay\\ali_public_key.pem',format('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDI6d306Q8fIfCOaTXyiUeJHkrIvYISRcc73s3vF1ZT7XN8RNPwJxo8pWaJMmvyTn9N4HQ632qJBVHf8sxHi/fEsraprwCtzvzQETrNRwVxLO5jVmRGi60j8Ue1efIlzPXV9je9mkjzOmdssymZkh2QhUrCmZYI/FCEa3/cNMW0QIDAQAB'));