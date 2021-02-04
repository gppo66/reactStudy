function isAnimal(text) {
//    return (
//        text ==='cat' || text ==='dog'
//    );
   const animals = ['cat','dog','turtle'];
   return animals.includes(text);

}

const isAni = (text) => ['cat','dog','turtle'].includes(text);

console.log(isAnimal('개'));
console.log(isAnimal('노트북'));

///////////////////////////////////////////////////////////////////////

function getSound(animal){
    const sounds = {
        개 : 'bowow',
        고양이 : 'meow',
        참새 : "짹짹"
    };
    return sounds[animal] || '...?'
}

console.log(getSound('개'));
console.log(getSound('인간'));


//////////////////////////////////

function makeSound(animal){
    const tasks = {
        개 : () => {
            console.log('머멍');
        },
        고양이() {
            console.log('야옹');
        }
    };
    const task = tasks[animal];
    if(!tasks[animal]){
        console.log('...?');
        return; 
    }
}