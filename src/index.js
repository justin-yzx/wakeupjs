import copy from "./util/copy";
import os from "./util/os";
import check from "./util/check";
import tip from "./util/tip";
import aes from './util/aes'
import param from "./util/param";

window.wakeup={
  _el:null,
  init(option) {
    // 初始化
    let res = check(option);
    if(!res)console.error('wakeup初始化失败，请检查配置');
    this._el = document.querySelector(option.el);
    if(os.name === 'ios' && !option.type.ios){
      tip.noneApp('ios',this._el);
      return;
    }
    if(os.name === 'android' && !option.type.android){
      tip.noneApp('android',this._el);
      return;
    }
    if(os.browser === 'weixin'){
      tip.switchBrowser(this._el);
      return;
    }

    //安卓手机
    if(os.name === 'android'){
      if(option.url.androidJump){
        //需要跳转
        copy(aes.encrypt(JSON.stringify(param(option.package))));
        this._el.href='#';
        this._el.addEventListener('click',function () {
          let start = new Date(); //记录初始时间
          let t = 500;
          let ifr = document.createElement('iframe');

          ifr.src = option.url.androidJump+`/${location.search}`
          document.body.appendChild(ifr);
          ifr.onload = function() {
            ifr.style.display = 'none';
          };

          setTimeout(function() {
            document.body.removeChild(ifr);
            let end = new Date(); //记录结束时间
            if(end - start -t <= 30 ) { //两者之差小于30ms时跳转到下载页
              window.location.href =option.url.androidDownload;
            }
          }, t);
        },false)
      }else {
        //纯下载
        this._el.href=option.url.androidDownload;
      }
    }



    //苹果
    if(os.name === 'ios'){
      if(option.url.iosJump){
        //需要跳转
        copy(aes.encrypt(JSON.stringify(param())));
        this._el.href=option.url.iosJump+`/${location.search}`;
        this._el.addEventListener('click',function () {
          let start = new Date();
          setTimeout(function() {
            let end = new Date();
            if(end - start < 3000 && end - start > 2000) {
              window.location.href =option.url.iosDownload;
            }
          }, 2000);
        },false)
      }else {
        //纯下载
        this._el.href=option.url.iosDownload;
      }
    }




  }

}


if(process.env.NODE_ENV === 'development'){
  //初始化插件
  wakeup.init({
    el:'#wakeup',
    package:'com.remennovel',
    type:{
      android:true,
      ios:false
    },
    url:{
      androidDownload:'http://youqu-h5-2019.oss-cn-shenzhen.aliyuncs.com/yw/quzhuishu/dev/qzs_3.4.0-85_0326-19-33-07_340_jiagu_aligned_signed_slp1064_11974_002.apk',
      androidJump:'zscs-qzs://qdqx',
      iosDownload:'https://apps.apple.com/cn/app/id1493885764',
      iosJump:'weixin://',
    }
  })
}


