//侦听事件
export function on(ele,ev,handler) {
  if(ele.addEventListener){
    ele.addEventListener(ev,handler,false)
  }else{
    ele.attachEvent("on" + ev,function(){
      fn.call(handler)
    })
  }
}

//取消事件
export function off(ele,ev,handler){
  if(ele.removeEventListener){
    ele.removeEventListener(ev,handler,false)
  }else{
    ele.detachEvent('on'+ ev,function(){
      fn.call(handler)
    })
  }
}

//添加class
export function addClass(ele,cls){
  var oClass = ele.className.split(' ')
  if(!ele.className){
    ele.className = cls
    return
  }
  for(var i=0;i<oClass.length;i++){
    if(oClass[i] === cls){
      return
    }
  }

  ele.className += " " + clss
}

//移除class
export function removeClass(obj,sClass){
  var aClass = obj.className.split(' ')
  if(!obj.className)return
  for(var i = 0; i<aClass.length; i++){
    if(aClass[i] === sClass){
      aClass.splice(i,1)
      obj.className = aClass.join(' ')
      break
    }
  }
}

//判断类名包含
export function hasClass(ele,className){

  if(ele.classList){
    return ele.classList.contains(className)
  }else{
    return new RegExp('(^| )' + className + '( |$)','gi').test(ele.className)
  }

}

//获取样式
export function getStyle(ele,attr){
  return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(dom,false)[attr]
}

//获取页面可见区域的宽高
export function view(){
  return {
    w:document.documentElement.clientWidth,
    h:document.documentElement.clientHeight
  }
}
