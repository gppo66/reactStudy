function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function makeError(){
    await sleep(1000);
    const error = new Error();
    throw error;
}
async function process(){
    // console.log('hi');
    // await sleep(1000);
    // console.log('hello');
    //make error
    try{
        await makeError();
    }catch(e){
        console.error(e);
    }
}

process();

//  hi
//  1초후
//  hello


process().then(value => {
    console.log(value);
});
//true

// Promise all 

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () =>{
    await sleep(500);
    return '토끼';
}

const getTurtle = async() =>{
    await sleep(3000);
    return '거북이';
}


async function proc() {
    //배열 안에 값 꺼내기 
    const [dog,rabbit,turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(results);    
}

proc();
//멍멍이
//토끼
//거북이 


//promise.race  각 promise 중 가장 빠른 것을 출력 
//promise.all 각 promise 중 하나라도 에러가 나면 전부 에러 
//promise.race 가장 빨리 끝난 것이 에러일 때 에러 






