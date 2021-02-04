//falsy == true
//!이 붙어야함 
!undefined
!null
!0
!''
!NaN
!false

//truthy == false 

!3
!'hello'
!['array']
![]
!{}


const value = null;

const truthy = !!value; //value ? true : false;
console.log(truthy);

