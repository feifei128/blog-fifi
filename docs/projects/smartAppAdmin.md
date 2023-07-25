# 智能家电后台

> 一个用于提升技术的练习项目，采用 Mock.js 模拟异步请求（后续开发只需替换接口），提供了基本的后台业务逻辑模块。由于 Ant Design Pro V6 的快速脚手架对 UMI 4 仅支持简易版本，所以本项目适用于对快速上手 Ant Design Pro V6 + UMI 4 的开发有需求的小伙伴。

## 📖 介绍

1. 技术栈：Ant Design Pro V6 + UMI 4 + Ant Design 5 + Mock.js
2. [项目源码](https://github.com/feifei128/smart-appliance-admin)
3. 项目还在开发过程中~~~ 未完成的功能尚存许多~

## 🔖 业务模块

- 登录

  ![avatar](/images/智能家居系统1.png)

- 工作台

  ![avatar](/images/智能家居系统2.png)

- 客户管理

  ![avatar](/images/智能家居系统3.png)

  点击客户的名字可以查看详情：

  ![avatar](/images/智能家居系统4.png)

  返回客户信息列表，点击【新建】按钮以新建客户：

  ![avatar](/images/智能家居系统5.png)

- 员工管理

  ![avatar](/images/智能家居系统6.png)

  点击【考勤】查看员工的上下班打卡时间，鼠标 hover 时会显示具体时间：
  ![avatar](/images/智能家居系统7.png)

  提供对员工禁用启用的操作，用以区分该员工是否在职：
  ![avatar](/images/智能家居系统8.png)
  （注：已禁用的员工信息行置灰显示。其实这里还可以多做一些样式，比如将【禁用/启用】按钮换成【开关】、工作状态列字段也可以做一些 Tag 样式，都很简单。）

  禁用/启用成功后会弹出 Modal 提示，在 3s 后自动关闭。

  ![avatar](/images/智能家居系统9.png)
  （注：这里可以加个 icon 美化一下）

  员工业绩列表：
  ![avatar](/images/智能家居系统10.png)

- 订单管理

  ![avatar](/images/智能家居系统11.png)

  点击【查看订单信息】：

  ![avatar](/images/智能家居系统12.png)

- 设备管理

  在设备管理模块，用 Mockjs 生成了这样几种智能家具的类型，贴两种图展示一下：
  ![avatar](/images/智能家居系统13.png)

  ![avatar](/images/智能家居系统14.png)
