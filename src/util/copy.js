import os from './os'
let text = ''
export default function (copytext) {
  text= "data:image/png;base64," + copytext;
  function cp(){
    try {
      if ("ios" === os.name) {
        var odiv = document.createElement("div");
        var odivcopy = odiv;
        if( odiv.attachShadow){
          odivcopy = odiv.attachShadow({mode: "open"})
        }
        var ospan = document.createElement("span");
        ospan.innerText = text;
        odivcopy.appendChild(ospan);
        document.body.appendChild(odiv);
        (function (e) {
          var i = document.getSelection();
          var n = document.createRange();
          n.selectNodeContents(e);
          i.removeAllRanges();
          i.addRange(n)
          var t = document.execCommand("Copy");
          document.getSelection().removeAllRanges();
          document.body.removeChild(odiv);
          document.body.removeEventListener('click',cp)
          document.getElementById('lsstyle').remove()
        })(ospan);
      } else {
        var oinput =document.createElement('input');
        oinput.style.position='fixed';
        oinput.style.left='-200px';
        oinput.style.top='-200px';
        document.body.appendChild(oinput);
        setTimeout(function () {
          (function () {
            oinput.value = text;
            oinput.select();
            document.execCommand("Copy");
            document.body.removeEventListener('click',cp)
            oinput.remove();
          })()
        },0)
      }
    } catch (e) {
      console.log(e)
      alert(e)
    }
  }
  if("ios" === os.name){
    var style = document.createElement("style");
    style.id='lsstyle'
    style.appendChild(document.createTextNode("*{cursor: pointer;}"));
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
  }
  document.body.addEventListener('click',cp,false)
}
