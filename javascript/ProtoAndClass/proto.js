function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}
//객체들 끼리의 공유할 수 있는 값이나 함수를 설정할 수 있는 것 
Animal.prototype.say = function(){
    console.log(this.sound);
}

const dog = new Animal('dog','puppy','bowwow');
/////////////////////////////////////////////////////////////////////////
//상속 

function Dog(name,sound){
    Animal.call(this, 'dog',name,sound);
}
function Cat(name,sound){
    Animal.call(this, 'cat',name,sound);
}
Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;


