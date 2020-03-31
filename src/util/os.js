const ua = navigator.userAgent.toLowerCase();
//判断Android、IOS
let name;
//判断浏览器
let browser;


if (ua.indexOf("android") > -1 || ua.indexOf("linux") > -1) {
  name = 'android'
}else if (ua.indexOf("iphone") > -1 || ua.indexOf("ios") > -1) {
  name = 'ios'
}else {
  name = 'other'
}

if (ua.match(/MicroMessenger/i) == "micromessenger") {
  browser = 'weixin'
} else if (ua.match(/QQ/i) == "qq") {
  browser = 'qq'
} else if (ua.match(/Alipay/i) == "alipay") {
  browser = 'alipay'
} else if (ua.match(/Alipay/i) == "alipay") {
  browser = 'alipay'
} else {
  browser = 'other'
}


export default {
  name,
  browser
}
