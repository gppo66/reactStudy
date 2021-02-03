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

