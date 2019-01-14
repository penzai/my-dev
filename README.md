# 介绍

自己使用的基于`vue cli 3`搭建的模板。

由于`vue create`的项目不能满足业务需求，每次都要去做同样的事情，所以这个模板由此而生。

## 官方插件（自动安装）

- babel
- eslint
- less
- vuex
- router

## 特性

### less

自动在每个`.less`中提前注入 `variables.less`/`mixins.less`。

### request

使用`axios`进行请求, 并做了一定的封装。

### eslint

设置 eslint 的检测规则为最多选择集`extends: "plugin:vue/recommended"`，默认为`"extends": "plugin:vue/essential"`。

> 私认为规范本身没有对错，规则越多，代码统一度越高，所以多多益善。

默认代码警告只能在终端查看，用命令行`yarn lint`格式化，我推荐结合 IDE 来进行处理，这里给出`vscode`使用方法：

1. 安装`eslint`；
2. 配置`settings.json`。

```js
// settings.json
{
  // 在保存的时候格式化
  "eslint.autoFixOnSave": true,
  // 实时监测并提示
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ]
}
```

### icon

icon使用`svg-sprite-loader`在`icons`文件夹集中处理，调整只需要对文件夹下的图标进行处理。

另外可以使用`yarn svgo`命令对该文件下svg图标进行优化处理。

## 分支: mobile

用于移动端H5页面开发，添加了`vw`自适应。

### aspect-ratio

固定宽高比，使用格式如下。

> ❗️设置`aspect-ratio: "3:1";`的块，不能再进行其它属性的设置。

```html
<div aspectratio w-3-1 class="box">
  <div aspectratio-content>aspectratio-content</div>
</div>
```

```css
[w-3-1] {
  aspect-ratio: "3:1";
}
.box {
  width: 300px;
}
```

### px to vw

所有`px`单位转为`vw`，如果想写死高度，使用`.ignore` or `.haireline`样式。
