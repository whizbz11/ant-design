---
category: Components
subtitle: drawer
type: Feedback
title: Drawer
---

向下弹出的列表。

## API
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 抽屉的类属性 | string | `drawer` |
| bodyStyle | Drawer 面板 样式 | object | {} |
| mask | 是否展示遮罩 | Boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| maskStyle | 遮罩样式 | object | {} |
| visible | 抽屉是否可见 | boolean | false |
| getContainer | 指定 抽屉挂载节点 | (instance)=> HTMLElement | `body` |
| width | 抽屉的宽度 | string | `60vw` |
| placement | 抽屉的方向 | `left` 或 `right` | `left` |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |


