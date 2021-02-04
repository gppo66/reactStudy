
//scope global 
const value = 'hello!';

function myFunc() {
    console.log(value);
    //hello
}

function otherFunc(){
    //scope function
    value = 'bye';
    console.log(value);
    //bye
}

myFunc();
otherFunc();

console.log(value);
//hello




function blockFunc(){
    const value = 'bye';
    //scope block 
    const anotherValue = 'world';
    function functionInside(){
        console.log(value);
        //bye
        console.log(anotherValue);
        //world 
    }
    functionInside();
}

console.log(anotherValue);
//error