var a=1;
//try 里面的代码一定会执行
//如果try 代码中出现异常或者错误
//那么错误不在由系统处理,直接交由catch处理

//如果try中没有错误,catch不执行
try{
    console.log(a);
}catch(err){
    console.log("报错了");
}

const foo ='bar';
const baz ={foo}      //允许在对象中，直接写变量，这时 属性名韦变量名，属性值为变量的值
console.log(baz)
//等同于baz={foo:foo} //属性名:变量名

function fun() {
    console.log("d");
}
var obj ={
    a:1,
    fun:fun,
    b:2,
};
obj.fun();
//等同于
var obj={
    a:3,
    fun, //名称相同才行
    b:4,
};
obj.fun()

var obj ={
    name:"lisi",
    hh:function () {
        console.log(this.name);
    },
    //方法声明的简介形式
    kk(){
        console.log(this.name);
    }
};
obj.kk()

