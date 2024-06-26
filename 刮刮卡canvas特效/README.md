# scratchcard

[刮刮卡](https://www.bootstrapmb.com/item/14729)

## 使用方法

```
new ScratchCard({
    canvas: document.getElementById('canvas'),
    coverImg: 'scratch-2x.jpg',
    pixelRatio: 2,
    doneCallback: function() {
      console.log('done')
    }
});
```

| 参数           | 说明                                                             | 默认 |
| :------------- | ---------------------------------------------------------------- | ---: |
| canvas         | canvas 元素                                                      | null |
| showAllPercent | 直接全部刮开的百分比                                             |   65 |
| coverImg       | 图片图层                                                         | null |
| coverColor     | 纯色图层，例如：#cccccc。如果图片图层值不为 null，则纯色图层无效 | null |
| doneCallback   | 全部刮开回调                                                     | null |
| radius         | 屏幕倍数                                                         |   20 |
| pixelRatio     | 屏幕倍数                                                         |    1 |
| fadeOut        | 展现全部的淡出效果时间（ms）                                     | 2000 |

本 Demo 详细讲解请关注我的微信公众号，查阅文章《一张刮刮卡竟包含这么多前端知识点》

微信公众号：卧梅又闻花

头条号：卧梅又闻花

![image](https://wx3.sinaimg.cn/large/475dd357ly1gbh774dw0dj210n0ku443.jpg)
