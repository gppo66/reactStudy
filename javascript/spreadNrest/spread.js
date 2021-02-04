const slime = {
    name: 'slime'
}

const cuteSlime = {
    ...slime,
    attribute: 'cute'
}

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
}
const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green'
}


// Array 

const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];



const numbers = [1, 2, 3, 4, 5];

const spreadNum = [...numbers, 1000, ...numbers];
// 1,2,3,4,5,1000,1,2,3,4,5



//함수의 인자에서 spread 사용 
//인자와 파라미터의 차이 
//인자 : 함수를 사용할 때 넣는 값 join(인자)
//파라미터 : 함수를 선언했을 때 넣는 값 function a(파라미터)

function sum(...rest){
    return rest.reduce((acc,current) => acc + current, 0);
}

const numbes = [1,2,3,4,5,6,7,8];
console.log(sum(...numbes));

