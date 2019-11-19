/**
 * 复习:
 * todoList案例:
 * 组件之间通信问题:
 * 父子组件之间通信,兄弟组件之间通信,间接的父子组件之间,任意组件之间通信
 * 1. props------父子之间
 * 2. 自定义事件---父子之间,父级组件向子级组件传递一个事件(自定义事件),事件就会有对应的回调,相当于把一个回调函数传入到子级组件中,子级组件可以调用该回调函数,传入数据,这个数据也可以从子级组件传到父级组件
 * 自定义事件,需要手动的分发(触发),$emit('事件名字',数据)--->就可以触发该事件
 * 3.PubSub---消息订阅,------任意组件之间通信(PubSub不属于Vue,也不属于React)
 * 4.插槽:
 * 具名插槽:插槽有name属性(有名字),用来占位,传递数据
 * <slot name="left" />     <标签 slot="left" />
 * 普通插槽和作用域插槽------>Vue的最后一天讲
 * 5.事件总线,Vue中每个组件都是一个对象,每个组件内部的this都是该组件的实例对象,并且直接或者间接的继承自Vue对象,那么Vue中的原型中的属性或者方法也都被继承
 * 一个组件对象中有components:{}里面可以注册其他的组件(必然要先引入),此时就形成了父子组件之间的关系(父级组件中的原型上的属性或者方法,子级组件上也可以使用)
 * 如果任意组件之间通信(父子,兄弟,间接的父子....)可以使用事件总线
 * 事件总线:就是在Vue的原型上添加了一个自定义的属性,该属性中存储了一个Vue的实例对象,该属性就是Vue实例对象,该属性就有了实例对象的所有的属性或者方法,所有的组件都直接或者间接的继承了Vue对象,也就可以使用这个属性,这个属性中有$on()和$emit()和$off()这三个主要的方法,可以绑定事件,可以分发事件,也可以解绑事件.所有的组件公用同一个属性(实例对象),任意组件之间的通信
 * 
 * 自定义事件总线和自定义PubSub
 * 
 * 
 * var result=f1(1,2)(obj)
 * console.log(result.age)
 * 
 * function f1(a,b){
 *  return function (obj){
 *    return {
 *    }
 *  }
 * }
 * 
 * 
 * 
 * 
 * 
 */