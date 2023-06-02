var aa = [
    'https://oqq7.github.io/a',
    'https://oqq7.github.io/z',
    'https://oqq7.github.io/x',
    'https://oqq7.github.io/c',
    ];
var sj = aa[Math.floor(Math.random()*aa.length)];

function setCookie(name,value){
  var Days = 800;
  var exp = new Date();
  exp.setTime(exp.getTime() + 10*900);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
function sz(){
    if(!getCookie("http_R")){
        setCookie("http_R",sj);
        
        return sj ;
     //   window.open(sj)
    }else{
    var url=getCookie("http_R");
    return url ;
     //   window.open(url)
    }
}
