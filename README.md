# mini apps performance optimization

> 小程序性能优化

## 小程序优化示例项目目录

- cloudfunctions 云函数本地目录
- `go_stopwatch` Go 语言编写的 stopwatch 示例，编译 `WebAssembly` 文件给小程序用
- miniprogram 真正的小程序项目主目录
- tools 小程序瘦身工具为主编写几个小脚本，包括图片压缩、生成雪碧图、替换本地链接、上传腾讯 cos
- plugin 一个开发插件目录，给小程序项目测试插件异步化用的
- `server` Go 编写的后端程序源码，基于 `iris` 框架构建


## 使用 GO `gin` web 框架 实现热更新

```sh
# install go package???
# 安装 Gin 软件包
$ go get -u github.com/gin-gonic/gin


# export DEBUG=true && export PORT=8080 && gin --appPort=8080 --port=3000 run main.go

```
