// import CryptoJS from 'crypto-js';
import CryptoJS from './aes-lib';
//crypto-js包体太大，打完包快500kb，引入谷歌单独的aes包，单独aes包没有ecb模式，已经补充好
//单独包下载地址  https://code.google.com/archive/p/crypto-js/downloads?page=1

export default {

  encrypt(word){
    var key = CryptoJS.enc.Utf8.parse("46cc793c46cc793c53dc451b53dc451b");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  },

  decrypt(word){
    var key = CryptoJS.enc.Utf8.parse("46cc793c46cc793c53dc451b53dc451b");
    var decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  }
}
