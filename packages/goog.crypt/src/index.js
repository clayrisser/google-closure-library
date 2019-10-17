import 'google-closure-library';

goog.require('goog.crypt');

export default {
  get Aes() {
    goog.require('goog.crypt.Aes');
    return goog.crypt.Aes;
  },
  get BlobHasher() {
    goog.require('goog.crypt.BlobHasher');
    return goog.crypt.BlobHasher;
  },
  get Cbc() {
    goog.require('goog.crypt.Cbc');
    return goog.crypt.Cbc;
  },
  get Ctr() {
    goog.require('goog.crypt.Ctr');
    return goog.crypt.Ctr;
  },
  get Hash() {
    goog.require('goog.crypt.Hash');
    return goog.crypt.Hash;
  },
  get Hmac() {
    goog.require('goog.crypt.Hmac');
    return goog.crypt.Hmac;
  },
  get Md5() {
    goog.require('goog.crypt.Md5');
    return goog.crypt.Md5;
  },
  get Sha1() {
    goog.require('goog.crypt.Sha1');
    return goog.crypt.Sha1;
  },
  get Sha2() {
    goog.require('goog.crypt.Sha2');
    return goog.crypt.Sha2;
  },
  get Sha224() {
    goog.require('goog.crypt.Sha224');
    return goog.crypt.Sha224;
  },
  get Sha256() {
    goog.require('goog.crypt.Sha256');
    return goog.crypt.Sha256;
  },
  get Sha2_64bit() {
    goog.require('goog.crypt.Sha2_64bit');
    return goog.crypt.Sha2_64bit;
  },
  get Sha384() {
    goog.require('goog.crypt.Sha384');
    return goog.crypt.Sha384;
  },
  get Sha512() {
    goog.require('goog.crypt.Sha512');
    return goog.crypt.Sha512;
  },
  get Sha512_256() {
    goog.require('goog.crypt.Sha512_256');
    return goog.crypt.Sha512_256;
  },
  get byteArrayToHex() {
    return goog.crypt.byteArrayToHex;
  },
  get byteArrayToString() {
    return goog.crypt.byteArrayToString;
  },
  get hexToByteArray() {
    return goog.crypt.hexToByteArray;
  },
  get stringToByteArray() {
    return goog.crypt.stringToByteArray;
  },
  get stringToUtf8ByteArray() {
    return goog.crypt.stringToUtf8ByteArray;
  },
  get utf8ByteArrayToString() {
    return goog.crypt.utf8ByteArrayToString;
  },
  get xorByteArray() {
    return goog.crypt.xorByteArray;
  }
};
