true && true
true && false
true || false
false || true

//

function getName(animal) {
    if (animal) {
        return animal.name;
    }
    return undefined;
    // return animal && animal.name
}

const name = getName(dog);
//dog name 
// if getName(null) => undefind

// && = 값이 true 라면 뒤에 있는 값이 출력
//    = false  라면 앞에 있는 값이 출력

// || = 값이  true 라면 
// 앞에 값이 false 일때 뒤에 있는 값이 출력 
// 앞에 값이 true 라면 앞에 있는 값이 출력