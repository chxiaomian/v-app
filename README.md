# v-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


```
Reference:
https://segmentfault.com/a/1190000008473744

https://github.com/Justineo/vue-awesome


```


```
--host 0.0.0.0

http://192.168.1.5:8080/#/

```


```
package

npm install less less-loader --save

instead of
cnpm install less less-loader --save
npm uninstall

icon

npm install vue-svg-icon --save-dev

npm uninstall vue-svg-icon


cnpm install vue-awesome --save


cnpm install fontawesome --save


cnpm i vant -S
https://www.youzanyun.com/zanui/vant#/zh-CN/component/quickstart



```




```

tabbar

cnpm i --save v-tab-bar

```







```
遇到的问题?

1.  怎么在vue-cli的组件模板里使用font-awesome

https://segmentfault.com/q/1010000009795785

npm install font-awesome
在main.js里添加
import 'font-awesome/css/font-awesome.css'



2.  引入 BootStrap vue

cnpm install bootstrap-vue --save
cnpm install bootstrap --save
requires webpack configuration to load css files

{
 test: /\.css$/,
 loader: [
   'style-loader',
   'css-loader'
 ]
}



3. Mockjs

https://github.com/nuysoft/Mock/wiki/Getting-Started

http://mockjs.com/examples.html


cnpm install mockjs --save




4. 添加过渡动画


5. Vant UI

swiper

6. axios

拦截器

```


Todo
- [ ] 首屏加载动画
- [ ] 页面切换动画
- [ ] loading 动画
- [ ] 列表页下拉刷新 上拉加载
- [X] Todo app



```
一个很奇怪的bug

直接npm start 报错:
Module build failed: Unknown word (5:1)

切换到一个可以编译成功的版本


在切换回最新的版本就能解决了

css-loader  style-loader的问题

在main.js 中import css 就会这样

具体什么原因 不清楚....
....


update

```
