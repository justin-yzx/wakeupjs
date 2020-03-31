export default function (option) {
  let dom = option.el;

  if(!option.package){
    console.error('package为空')
    return false
  }

  if(typeof dom !== 'string'){
    console.error('el字段需要字符串')
    return false
  }
  if(document.querySelector(dom) == null){
    console.error('找不到对应的元素')
    return false
  }

  if(document.querySelector(dom).tagName !== 'A'){
    console.error('el元素需要为a标签')
    return false
  }

  if(option.type.android){
    if(!option.url.androidDownload){
      console.error('type字段android为true的时候，androidDownload下载地址为必须')
      return false
    }
  }
  if(option.type.ios){
    if(!option.url.iosDownload){
      console.error('type字段ios为true的时候，iosDownload下载地址为必须')
      return false
    }
  }

  return true
}
