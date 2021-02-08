import React from 'react';

function Wrapper({children}){
    const style ={
        border: '2px solid black',
        padding: 16
    };
   //태그와 태그사이에 안에 있는 값을 넣을 떄 사용 
    return <div style={style}>{children}</div>

}

export default Wrapper;