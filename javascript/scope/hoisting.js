//hoisting 은 가능한 지양해야 함 

myFunc();

function myFunc() {
    console.log('hello world');
}


//undefined
console.log(number);
var number = 2;

// 이런 식으로 해석함 
// var number;
// console.log(number);
// var number = 2;



// const 와 let 은 hoisting이 발생하지 않는다.
