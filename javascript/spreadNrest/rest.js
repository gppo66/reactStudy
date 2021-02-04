const purpleCuteSlime = {
    name:'슬라임',
    attribute:'cute',
    color:'purple'
};

const { color, ...rest} = purpleCuteSlime;
//color = purple
//rest = name: 슬라임 attribute : cute 
//rest 는 cute Clime으로 바꿀수도 있음 

const {attribute, ...slime} = cuteSlime;
console.log(slime);
//name : 슬라임 


//퍼져있는 것들을 모아오는 역할을 함 


//Array 

const numbers = [1,2,3,4,5,6];

const [one,...rest] = numbers ;
console.log(one); // 1
console.log(rest); // 2,3,4,5,6


//Function parameter 

// function sum(a,b,c,d,e,f,g) {
//     return a+b+c+d+e+f+g;
// } 일때 파라미터의 값을 다 넣지 않았을 경우 NaN 이 뜨기 때문에 rest를 사용해야한다. 

function sum(...rest){
    return rest.reduce((acc,current) => acc + current, 0);
}

