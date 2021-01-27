# 控制塔项目前 端工程

> node v12.18.3

## 安装依赖

```
yarn install
```

### 启用开发环境 123

京东云版本

```
yarn serve

```

NeuHub 版本

```
yarn serve:neuhub
```

### 编译压缩生产包

京东云版本 dd

```
yarn build
```

NeuHub 版本

```
yarn build:neuhub
```

### 代码格式检查

```
yarn lint
```

### 使用 iconfont Unicode 添加成员联系 zhuhailiang4

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

### 设置路由角色权限

路由权限自动向下兼容，例如路由包含 QD 角色，则所有子路由自动获取该权限

```javascript
// src/router/compass.js
export default {
  path: '/compass',
  meta: {
    title: '企业控制塔',
    roles: ['admin', 'admin_general'],
  },
  component: () => import('../views/Compass'),
  children: [
    {
      path: 'sop',
      meta: {
        title: '企业S&OP', // 继承["admin", "admin_general"]
      },
      component: () => import('../views/Compass/SOP'),
      children: [
        {
          path: 'monitor',
          name: 'compass.sop.monitor',
          meta: {
            title: 'S&OP监控',
            roles: [
              // 继承["admin", "admin_general"]
              'MD_brand',
              'MD_sale',
              'RD_product',
              'PD_prod',
              'SD',
              'QD',
              'OD_warehouse',
              'OD_logistics',
              'CSD',
              'OMD',
            ],
          },
          component: () => import('../views/Compass/SOP/Monitor'),
        },
        {
          path: 'config',
          name: 'compass.sop.config',
          meta: {
            title: '计划配置', // 继承["admin", "admin_general"]
          },
          component: () => import('../views/Compass/SOP/Config'),
        },
      ],
    },
  ],
};
```
