#### Flexbox简介

- 弹性框的子元素可以按 任意方向排列，而且可以改变自身的大小以适应父元素大小的变化，防止出现过多空白或者溢出。

#### Flexbox模型及术语

- 主轴：
- 主轴起点/主轴终点：
- 主轴长度：
- 侧轴：
- 侧轴起点/侧轴终点：
- 侧轴长度：

#### 使用Flexbox模型布局需要的属性

- display：flex|inline-flex;
- flex-direction: row(从左向右排列)|row-reverse(从右向左排列)|column(从上到下排列)|column-reverse(从下向上排列) (用于创建主轴，及定义伸缩项目放置在伸缩容器的方向)
- flex-wrap: nowrap(单行)|wrap(多行)|wrap-reverse(多行) (定义伸缩容器里是单行还是多行显示，侧轴的方向决定了新行堆放的方向)
- flex-flow: (是flex-direction和flex-wrap的缩写)
- justify-content: flex-start(向一行的起始位置对齐)|flex-end(结束)|center(中间)|space-between(平均分布在行里)|space-round(平均分布在行里) (定义伸缩项沿着主轴的对齐方式)
- align-content: flex-start|flex-end|center|space_between|space-around|stretch(拉伸占满) (调整伸缩项目在侧轴上的对齐方式)
- align-items: flex-start|flex-end|center|baseline|stretch 
- order:<interger> (控制伸缩项目在他们伸缩容器中出现的顺序，默认是按照文档流出现的先后顺序排列的)
- align-self: auto|flex-start|flex-start|flex-end|center|baseline|stretch 
- flex-grow: <number> 定义伸缩项目的扩展能力
- flex-shrink: <number> 定义伸缩项目收缩的能力(负值也有效果)
- flex-basis: <length>|auto 设置伸缩基准值 