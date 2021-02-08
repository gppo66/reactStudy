import React from 'react';

function Hello({color,name, isSpecial}) {
    
    return <div style={{
        color
    }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
        </div>; //jsx
}

//기본값 
Hello.defaultProps ={
    name: '이름없음'
}
export default Hello;