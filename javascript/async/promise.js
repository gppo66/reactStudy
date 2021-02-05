function increaseAndPrint(n, callback){
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if(callback) {
            callback(increased);
        }
    },1000)
}

increaseAndPrint(0, n=>{
    increaseAndPrint(n, n=>{
        increaseAndPrint(n, n=>{
            increaseAndPrint(n,n=>{
                increaseAndPrint(n,n=>{

                })
            })
        })
    });
});


///////////////////promise////////////////////

const myPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        //resolve('result');
        reject(new Error());
    },1000)
});

myPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
})

//result 


function increaseNPrint(n){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const value = n + 1;
            if(value === 5){
                const error = new Error();
                error.name = 'Value is Five Error';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        },1000);
    });
}


increaseNPrint(0).then(n =>{
    console.log('result:',n);
})