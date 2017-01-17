export default function (){
  if(global.navigator.appName == 'Microsoft Internet Explorer')
  {
    const { userAgent } = global.navigator
    if (userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/) != null){
      const version = parseFloat( RegExp.$1 );
      if(version < 11) {
        return false;
      }
    }
  }
  return true;
}
