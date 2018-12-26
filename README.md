# introduction

vue template for my dayily development

## offical plugins

- babel
- eslint
- less
- vuex
- router(History mode)

## feature

- auto inject `variables.less`/`mixins.less`

### mobile

#### aspect-ratio

```html
<div aspectratio w-3-1 class="box">
  <div aspectratio-content>aspectratio-content</div>
</div>
```

```css
[w-3-1] {
  aspect-ratio: '3:1';
}
.box {
  width: 300px;
}
```

#### px to vw

if you not want use this feature. use`.ignore` or `.haireline`.
