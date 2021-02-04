const objet = {
    a: 1
};

const {
    a,
    b = 2
} = Object;

console.log(a);
console.log(b);

const animal = {
    name: 'dog',
    type: 'puppy'
};

// const nickname = animal.name;
const {
    name: nickname
} = animal;

console.log(nickname);


// to Array 
const array = [1, 2];

const [one, two] = array;

console.log(one);
console.log(two);


//deepObject 

const delObject = {
    state: {
        information: {
            name: 'gppo',
            language: ['korean', 'eng']
        }
    },
    value: 5
}

const {
    name,
    languages
} = delObject.state.information;
const {
    value
} = delObject;

// const {
//     state: {
//         information: {
//             name,languages
//         }
//     },
//     value
// } = delObject;

const extracted = {
    name,
    languages,
    value
};

console.log(extracted);