//배열안에 있는 요소의 타입은 달라도 괜찮음
const array = [1, 2, 3, 'a', {}];
console.log(array[0]);
//1


const objects = [{
        name: 'puppy'
    },
    {
        name: 'kitty'
    }
];

console.log(objects[0]);

//새로운 항목 추가 
objects.push({
    name: '멍뭉이'
});

//배열의 크기 
console.log(objects.length);

//ForEach loop
const superheros = [
    '아이언맨', '캡아', '블위'
];

function print(hero) {
    console.log(hero);
}

superheros.forEach(print);
superheros.forEach(function (hero) {
    console.log(hero);
});
superheros.forEach(hero => {
    console.log(hero);
})

//map
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);
const squared = array.map(n => n * n);
console.log(squared);

const items = [{
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const text = items.map(item => item.text);
console.log(text);

//특정 항목의 index를 구하는 함수
const superh = ['아맨', '캡아', '토르'];
const index = superh.indexOf('토르');
console.log(index);
//만약 -1이 나오면 없다는 것
const todos = [{
        id: 1,
        text: 'javascript',
        done: true,
    },
    {
        id: 2,
        text: 'javascript2',
        done: true,
    },
    {
        id: 3,
        text: 'javascript2',
        done: false,
    }
];
//특정 조건에서 index 찾기 
const index = todos.findIndex(todo => todos.id === 3);
console.log(index);

//특정 조건에서 값 찾기 
const todo = todos.find(todo => todos.id === 3);

//filter
const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);
// //id: 3,
// text: 'javascript2',
// done: false


//splice
const num = [10, 20, 30, 40];

const index = num.indexOf(30);

const spliced = num.splice(index, 1);
//index 부터 1개 삭제 
//spliced는 삭제한 배열값 저장

//slice
const cliced = num.slice(0, 2);
//0번 배열부터 2번 배열까지

//shift
const value = num.shift();
//맨 앞에 있는 원소를 하나씩 빼는것

//unshift
num.unshift(5);
//맨 앞에 5값을 추가

//pop
value = num.pop();
//맨 뒤에 있는 원소를 하나씩 빼는것

//push
num.push(50);
//맨 뒤에 50값을 추가 

//concat 
//여러개의 배열을 하나로 합침
//spread 방식 : [...arr1,...arr2];

//join
//배열의 값을 문자열로 만드는 것 
//파라미터가 들어가면 문자열 사이사이에 구분자를 넣는것 
//join(' ') 라면 1 2 3 4 

//reduce 
//배열의 모든 값을 계산 할 때 사용 
const num2 = [1, 2, 3, 4, 5];
const sum = num2.reduce((accumulator, current) => accumulator + current, 0);
// 0 : 초기 accumulator
// current : 배열의 값
// accumulator : 더한 값

//평균인 경우 
const aver = num2.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1){
        return accumulator + current / array.length;
    }
     return accumulator + current;
}, 0);
//

const alphabets = ['a','b','c','d','e','e'];
const count = alphabets.reduce((acc,current) => {
if(acc[current]){
    acc[current] += 1;
}else{
    acc[current] = 1;
}
return acc;
},{});

//counts : 
// a:1
// b:1
// c:1
// d:1
// e:2