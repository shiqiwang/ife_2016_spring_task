### 页面布局

#### 基础知识点

+ display：block/inline/none/inline-block.
+ margin: auto
    - 当块级元素设置宽度后，可以利用```margin: auto;```使其居中显示
+ max-width/min-width
    - 设置最大/最小宽度
+ 盒模型：margin/border/padding/content
    - 设置```box-sizing: border-box;```属性解决元素内边距和边框增加它宽度的问题。
+ position: static/relative/fixed/absolute
    - static: 默认值
    - relative：相对它以前的位置来定位，其他元素不受影响
    - fixed：相对视窗定位
    - absolute：相对于最近的"positioned"的祖先定位，如果没有这样的祖先元素，则相对于body定位
+ float：right/left
    - 可用于实现文字环绕图片
+ clear：both/right/left/none
+ overflow：hidden/auto/visible/scroll/initial/inherit
+ column: column-count/column-gap
    - 需要加前缀，IE9不支持，用于实现文字的多栏布局
+ flexbox：
    - 兼容性不大好
    