const names = ['dog', 'cat', 'snake'];
objects.entries(names);
objects.keys(names);
objects.values(names);

for (let i = 0; i < 19; i++) {
    //logic
}
let i = 0;
while (i < 10) {
    //logic
}

//for of loop
const numbers = [1, 2, 3, 4, 5, 6, 7];
for (let number of numbers) {
    // logic
}

//for in loop 객체에 대한 반복적인 작업일 때 사용 
for (let key in names){
    console.log(`${key} : ${names[key]}`);
    
}