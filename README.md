# VUE 项目 —— 初始化

> node v12.18.3

## 安装依赖

```
yarn install
```

### 启用开发环境

```
yarn serve

```

### 编译压缩生产包

```
yarn build
```

### 代码格式检查

```
yarn lint
```

### 使用 iconfont Unicode

> 路径 src/assets/scss/reset.scss
> icon 有更新需要替换@font-face

```css
@font-face {
  font-family: 'iconfont'; /* project id 2172654 */
  src: url('//at.alicdn.com/t/font_2172654_szdf7yg820b.eot');
  src: url('//at.alicdn.com/t/font_2172654_szdf7yg820b.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2172654_szdf7yg820b.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2172654_szdf7yg820b.woff') format('woff'), url('//at.alicdn.com/t/font_2172654_szdf7yg820b.ttf')
      format('truetype'),
    url('//at.alicdn.com/t/font_2172654_szdf7yg820b.svg#iconfont') format('svg');
}
```
