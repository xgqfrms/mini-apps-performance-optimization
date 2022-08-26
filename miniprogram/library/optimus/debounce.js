/**
 * 一个朴素的防抖动函数
 * 
 * 
*/
function debounce(func, wait = 50){
  let timer = null

  return function(...args) {
    const context = this 
    if (timer) {
      clearTimeout(timer)
      console.log("防抖少许");
    }
    timer = setTimeout(() => {
      func.call(context, ...args)
    }, wait)
  }
}

export default debounce