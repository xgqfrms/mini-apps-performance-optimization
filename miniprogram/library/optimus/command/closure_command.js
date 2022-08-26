// JS：command/closure_func_command.js
/**
 * 闭包命令
 * 
 * 
*/
import Command from "command.js"

/** 执行一个闭包函数的命令，需要手动标记完成
 * @param thisRef 如果不指定this，默认是当前对象
 */
class ClosureCommand extends Command{
  constructor(closure){
    super()
    this.#closure = closure 
  }
  #closure

  execute(){
    this.#closure?.()
    return this 
  }
}

export default ClosureCommand