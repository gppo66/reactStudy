// input 상태 관리하기
// 여러개의 input 상태 관리하기
// useRef로 특정 DOM 선택하기 
import React,{useState,useRef} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });
    const nameInput = useRef();
    const {name,nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        // const nextInputs  = {
        //     ...inputs
        // };
        // nextInputs[name] =value;
        
        setInputs({
            ...inputs,
            [name]:value,
        });
    }
    const onReset = () =>{
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();
    }
    return (
        <div>
            <input name="name" onChange={onChange} placeholder="이름" value={name} ref={nameInput}/>
            <input name="nickname" onChange={onChange} placeholder="닉네임" value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;