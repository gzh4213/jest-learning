# Jest命令行工具的使用

* f模式
只运行已经失败的文件

* o模式
只运行和修改相关的文件

* p模式

* t模式

* q模式

## 运行参数
* --watch
实时监听

* --coverage
生成覆盖率文件

## 异步代码测试

* 方式1
在test回调函数中添加done参数，当异步代码执行结束后，须调用done参数，否则test执行失败
```js
// 代码示例
test('fetchData 返回结果为 { success: true }', (done) => {
  fetchData(data => {
    expect(data).toEqual({
      success: true
    })
    done()
  })
})
```