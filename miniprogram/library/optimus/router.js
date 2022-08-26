// router.js
/**
 * 一个朴素的路由对象，打破最大10个页面栈大小的限制
 * 它还可以扩展，例如依用户控制页面的访问权限等
 * 
 * 
*/
export default {
  navigateTo(object) {
      if (getCurrentPages().length > 9) {
          this.redirectTo(object)
      } else {
          wx.navigateTo(object)
      }
  },
  navigateBack(object) {
      wx.navigateBack(object)
  },
  switchTab(object) {
      wx.switchTab(object)
  },
  redirectTo(object) {
      wx.redirectTo(object)
  },
  reLaunch(object) {
      wx.reLaunch(object)
  },
}