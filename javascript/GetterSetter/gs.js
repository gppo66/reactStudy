const numbers = {
    a: 1,
    b: 2,
    //getter func 특정 값 조회
    get sum() {
        console.log('sum func');
        return this.a + this.b;
    }
};

console.log(numbers.sum);

numbers.b = 5;


const dog = {
    _name: '멍멍이',
    //setter func 특정값 사용 
    set name(value) {
        console.log('이름이 바뀝니다.' + value);
        this._name = value;

    }
};

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name);