# 单IMG元素的图像拉伸效果

### 介绍

无需任何其他元素辅助，直接一个孤零零的 <code>&lt;img&gt;</code> 标签就可以实现图像的拉伸效果。

优点是不受布局限制，适用场景更广泛，在富文本编辑器中由于只有一个 IMG 元素，因此，无需额外的开发成本，就能保留默认的图片编辑能力。

体验地址：https://zhangxinxu.gitee.io/only-img-resize/

### 使用说明

#### 示意

```html
<script type="module">
  import onlyImgResize from "./src/onlyImgResize.js";

  onlyImgResize({
    // 参数在这里
  });
</script>
```

#### 语法和参数

语法如下：

```js
onlyImgResize(options);
```

options 为可选参数，包括：

<dl>
    <dt>selector</dt>
    <dd>字符串值。默认值是 <code>'.resizable, [resizable]'</code>，表示识别为可拉伸图片的选择器。</dd>
    <dt>maxWidth</dt>
    <dd>数值或布尔值。默认是 <code>true</code>，表示有最大宽度限制，最大宽度值是第一个非内联祖先元素的宽度。支持设置为数值，指定最大宽度值。</dd>
    <dt>minWidth</dt>
    <dd>数值。默认是 <code>200</code>，表示拉伸宽度不能小于200。</dd>
    <dt>whenDisabled</dt>
    <dd>函数值，如果返回 true，表示禁用图像的拉伸，如果是 false，则拉伸执行。默认值是：<pre>function () {
    return window.imgResizable === false || document.imgResizable === false;
}</pre>表示，如果 <code>window.imgResizable</code> 或者 <code>document.imgResizable</code> 的值是 <code>false</code>，则禁用拉伸。</dd>
    <dt>onFinish</dt>
    <dd>函数值，默认是空函数，拖拽结束的时候触发。</dd>
</dl>

### 其他

此功能从实际项目中剥离，剥离过程可能会有实现上的疏漏，欢迎反馈。

点击图片之后，外面出现的一圈拖拽轮廓是使用 CSS <code>border-image</code> 属性实现的，若对此属性感兴趣，可以参见<a href="https://item.jd.com/13356308.html"> 《CSS新世界》</a> 对应章节。

更多信息可参见：“<a href="https://www.zhangxinxu.com/wordpress/2022/11/js-image-resize/">我用单img元素实现了JS图像拉伸效果</a>”
