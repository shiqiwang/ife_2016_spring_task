#### 清除浮动
- clear：both/none/right/left
- overflow：hidden/scroll/auto
- clearfix
    ```css
    .class:before,
    .class:after {
        content: "";
        display: table;
    }
    .class:after {
        clear: both;
    } 
    .class {
        *zoom: 1;
    }
    ```
    
#### 浮动布局
浮动可以创建一个自然流布局

#### 利用position布局
- static：默认值，不接受位置属性的设置
- relative：相对自己原来的默认位置定位，任然属于自然流。要注意的是top的优先级高于bottom的优先级
- absolute：设置了该属性的元素将脱离文档流。相对于最近的设置了relative或absolute的祖先元素定位，没有则相对于body
- fixed：相对于浏览器窗口定位

#### 设置元素层叠顺序
-z-index属性，数值越大离我们越近

#### 关于居中
- 水平居中
    + inline/inline-* 元素：在它的块级父元素上设置```text:align: center;```
    + 设置了宽度的block元素：设置他的左右margin值为auto。
    + 多个block元素按列居中：把这些block元素的display属性设置为inline-block后在设置margin
- 垂直居中
    + inline/inline-*元素
        * 单行：设置上下padding值相等或者设置line-height值等于height值
        * 多行：设置上下padding值相等/vertical-align/如果父元素高度固定，可以设置为```fatherElement {display: flex; justify-content: center; flex-direction: column; height: px/%;}```
    + block元素：
        * 高度已知：```.parent {position: relative;} .child {postion: absolute; top: 50%; margin-top: -1/2height;}```
        * 高度未知: ```.parent {position: relative;} .child {position: absolute; top: 50%; transform: translateY(-50%);}```
        * 利用flexbox：不用管高度是否已知，```.parent {display: flex; flex-direction: column; justify-content: center;}```
- 水平和垂直均居中
    + 高宽固定：```.parent {position: relative;} .child {width: px; height: px; position: absolute; top: 50%; left: 50%; margin: -1/2height 0 0 -1/2width;}```
    + 高宽未知：```.parent {position: relative;} .child {position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}```
    + 利用flexbox：```.parent {display: flex; justify-content: center; align-items: center;}```
