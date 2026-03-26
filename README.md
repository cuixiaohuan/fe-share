# 灵集前端分享

一个基于 [impress.js](https://github.com/impress/impress.js) 的前端技术分享演示文稿，用于团队内部前端知识分享。

## 内容概览

- **什么是前端** - 前端的定义与职责介绍
- **前端学习路线** - 系统化的前端学习路径
- **前端基础技能** - HTML、CSS、JavaScript 及社区生态
- **前端不良习惯** - 常见问题与改进建议
  - 照搬原型、需求不清就写代码
  - 忽视模块化开发与代码复用
  - 能用就行、不关注优化
  - Git 提交信息随意
  - 未经自测直接发布代码
- **前端性能优化** - 常见优化手段与最佳实践
- **前端进阶六阶段** - 从入门到高级的成长路径

## 快速开始

### 本地运行

```bash
npm run open
```

或直接用浏览器打开 `index.html` 文件。

### 操作说明

| 按键 | 功能 |
| ---- | ---- |
| `→` / `Space` | 下一页 |
| `←` | 上一页 |
| 鼠标滚轮 | 前后翻页 |

## 技术栈

- [impress.js](https://github.com/impress/impress.js) - 3D 幻灯片展示框架
- HTML5 / CSS3
- Git + Husky + Commitlint - 规范化提交流程

## 项目结构

```
fe-share/
├── index.html        # 演示文稿主文件
├── css/
│   ├── impress.css   # impress.js 样式
│   ├── fonts.css     # 字体样式
│   └── presentation.css  # 自定义演示样式
├── js/
│   └── impress.js    # impress.js 核心库
├── img/              # 演示图片资源
└── package.json
```

## Git 提交规范

本项目使用 [Commitizen](https://github.com/commitizen/cz-cli) + [Commitlint](https://github.com/conventional-changelog/commitlint) 规范提交信息，遵循 [Conventional Commits](https://www.conventionalcommits.org/) 标准。

## 作者

**CuiXiaohuan**

- GitHub: [@cuixiaohuan](https://github.com/cuixiaohuan)

## License

ISC
