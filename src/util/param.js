export default function (packagename) {
  let url = location.search; //获取url中"?"符后的字串
  let theRequest = {};
  let strs = [];
  if (url.indexOf("?") != -1) {
    let str = url.substr(1);
    strs = str.split("&");
    for(let i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
    }
  }
  theRequest['wakeup_time']=new Date().getTime();
  theRequest['wakeup_package']=packagename;
  return theRequest;
}
