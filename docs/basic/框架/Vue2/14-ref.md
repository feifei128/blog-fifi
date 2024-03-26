# ref

## ref到底有什么作用？
  引用DOM元素，引用组件。

## 如何使用呢？
- 引用DOM
  ![](/images/ref1.png)
  ![](/images/ref2.png)

- 引用组件：和引用DOM的原理一样，使用this.$refs.组件ref名.$refs.DOMref名
  ![](/images/ref3.png)

-   ！！注意！！
    -  问题描述：在实际开发中，动态的页面信息变化可能导致某元素暂时undefined（比如用按钮操控该元素显示或隐藏时），这样就无法用ref引用这个元素。
    -  解决方案：vue提供this.$nextTick(callback) 来延迟ref引用DOM的时间，使得在DOM元素被重新渲染后才被ref引用。
        ![](/images/ref4.png)