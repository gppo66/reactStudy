const dog = {
    //key
    name: 'dogy',
    age: 2,
    cute: true,
    'key with space': 'hello',
};

console.log(dog.name);
console.log(dog.age);
console.log(dog.cute);


const ironman = {
    name: 'Tony Stark',
    actor: 'Robert D J',
    alias: 'ironman',
};

function print(hero) {

    const text = '${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.';
    console.log(text);
}

//비구조 할당 

function print2(hero) {
    //function print2({ alias, name, actor }){
    const {
        alias,
        name,
        actor
    } = hero;
    const text = '${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.';
    console.log(text);
}

//객체에 함수 넣기

const cat = {
    name: 'kitty',
    sound: "meow",
    say() {
        //화살표 함수를 사용할 시 this 사용 불가 
        console.log(this.sound);
    }
};

cat.say();