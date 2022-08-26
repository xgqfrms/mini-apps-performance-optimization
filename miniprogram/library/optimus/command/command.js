// JS：command/command.js
/**
 * 命令基类，它也可以独立用于复合命令队列中
 * 
 * 
*/
import EventDispatcher from "../event_dispatcher.js"

/** 命令 */
class Command extends EventDispatcher {
  /** 临时数据仓 */
  data = null
  /** 是否已经完成 */
  get complete() {
    return this.$complete
  }
  $complete = false

  /** 执行 */
  execute() { 
    return this 
  }

  /** 标识命令完成 */
  markComplete() {
    this.$complete = true
    this.emit("complete")
    return this 
  }

  /** 添加完成事件监听，后添加的事件也能感知到事件完成 */
  onComplete(listener) {
    this.on("complete", listener)
    if (this.$complete) this.emit("complete")
    return this 
  }

  /** 释放，移除事件监听等 */
  dispose(){
    this.off()
    this.data = null 
  }
}

export default Command