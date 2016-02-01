var crypto = require('crypto');
var fs = require('fs');

/**
 *
 * Crypto库是随Nodejs内核一起打包发布的，主要提供了加密、解密、签名、验证等功能
 *
 * 属性：
 * DEFAULT_ENCODING
 * _toBuf
 *
 * Hash
 * createHash
 * getHashes
 *
 *
 * Cipher
 * createCipher
 * Cipheriv
 * createCipheriv
 * Decipher
 * createDecipher
 * Decipheriv
 * createDecipheriv
 * getCiphers
 *
 *
 * Sign
 * createSign
 * Verify
 * createVerify
 * publicEncrypt
 * publicDecrypt
 * privateEncrypt
 * privateDecrypt
 *
 *  Hmac
 * createHmac
 *
 *
 * DiffieHellman
 * createDiffieHellman
 * getDiffieHellman
 * createDiffieHellmanGroup
 * DiffieHellmanGroup
 * createECDH
 * pbkdf2
 * pbkdf2Sync
 * Certificate
 * setEngine
 * pseudoRandomBytes
 * randomBytes
 * prng
 * rng
 * getCurves
 * createCredentials
 * Credentials
 *
 * 常用算法：
 *  Hash算法
 *   名称    安全性   运算速度
 *   md5    中       快
 *   sha1   高       慢
 *
 *  对称算法
 *    名称   密钥长度       运算速度  安全性   资源消耗
 *    DES    56位          较快     低       中
 *    3DES   112/168       慢       中       高
 *    AES    128/192/256   快       高       低
 *
 *  非对称算法
 *    名称   成熟度   安全性   运算速度  资源消耗
 *    RSA   高       高       慢       高
 *    DSA   高       高       慢       只能用于数字签名
 *    ECC   低       高       快       低
 *
 *  对称算法与非对称算法比较
 *   名称    密钥管理                           安全性   运算速度
 *   对称    比较难,不适合互联网,一般用于内部系统  中       快好几个数量级,适合大数据量的加解密处理
 *   非对称  密钥容易管理                        高       慢,适合小数据量加解密或数据签名
 *
 *
 *  算法选择(从性能和安全性综合)
 *
 *  对称加密: AES(128位),
 *  非对称加密: ECC(160位)或RSA(1024),
 *  消息摘要: MD5
 *  数字签名:DSA
 *
 */

console.log('默认编码', crypto.DEFAULT_ENCODING);


console.log('############### Hash ###############');
console.log('支持的hash算法',crypto.getHashes());
var md5 = crypto.createHash('md5');
md5.update("foo");
console.log(md5.digest('hex'));
md5 = crypto.createHash('md5');
md5.update("foo");
console.log(md5.digest('hex'));
console.log('############### Hash End ###############');

console.log('############### HMAC ###############');
var key = 'appcan';
var hmac = crypto.createHmac('sha1', key);
hmac.update("foo");
console.log(hmac.digest('hex'));
console.log('############### HMAC End ###############');


console.log('############### 对称加密 ###############');
console.log('支持的对称算法',crypto.getCiphers());
var key = 'appcan';
var str = '';
var cip = crypto.createCipher('aes-128-ecb', key);
str += cip.update("foo", 'utf8', 'hex');
str += cip.final('hex');
console.log(str);
var decipher = crypto.createDecipher('aes-128-ecb', key);
str = decipher.update(str, 'hex', 'utf8');
str += decipher.final('utf8');
console.log(str);
console.log('############### 对称加密 End ###############');

console.log('############### 非对称加密 ###############');
//console.log('支持的非对称算法',crypto.getCiphers());
var key = '0123456789012345';//128/8 = 16
var key = '012345678901234567891234';//192/8 = 24
var key = '01234567890123456789012345678901';//256/8 = 32
var str = '';
var iv = '0123456789012345';//必须16位数
var cip = crypto.createCipheriv('aes-256-cbc', key, iv);
str += cip.update("foo", 'utf8', 'hex');
str += cip.final('hex');
console.log(str);
var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
str = decipher.update(str, 'hex', 'utf8');
str += decipher.final('utf8');
console.log(str);
console.log('############### 非对称加密 End ###############');


console.log('############### 签名加密 ###############');
var privatePem = fs.readFileSync('server.pem');
var publicPem = fs.readFileSync('cert.pem');
var key = privatePem.toString();
var pubkey = publicPem.toString();
console.log('##################',key);
var data = 'userId=ZY0600&lng=116.317451&lat=39.983714&timestamp=1452323425000';
var sign = crypto.createSign('RSA-SHA1');
sign.update(data,'utf-8');
//常用编码 'hex', 'binary' 或者'base64'
sign = sign.sign(key, 'base64');
console.log(sign);
var verify = crypto.createVerify('RSA-SHA1');
verify.update(data,'utf-8');
console.log(verify.verify(pubkey, sign, 'base64'));
console.log('############### 签名加密 End ###############');