import React, {useRef, useState} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  const {username,email} = inputs;
  const onChange = e =>{
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }
  const [users,setUsers] = useState ([
    {
        id:1,
        username:'gppo65',
        email:'a@gmail.com'
    },
    {
        id:2,
        username:'gppo66',
        email:'a1@gmail.com'
    },
    {
        id:3,
        username:'gppo67',
        email:'a2@gmail.com'
    },
]);



const nextId = useRef(4);

const onCreate = () =>{
  const user = {
    id:nextId.current,
    username,
    email,
  };
  setUsers([...users, user]);
//  / setUsers(users.concat(user)); concat을 사용 

  setInputs({
    username:'',
    email:'',
  });
  console.log(nextId.current); //4
  nextId.current += 1;
};

const onRemove = id => {
  setUsers(users.filter(user => user.id !== id));
};
  return (
   <Wrapper>
     <Hello name="react" color="red" isSpecial/>
     <Hello color="pink"/>
     <Counter></Counter>
     <InputSample></InputSample>
     <CreateUser username={username}
      email={email}
       onChange={onChange}
        onCreate={onCreate}
        ></CreateUser>
     <UserList users={users} onRemove={onRemove}></UserList>
     
   </Wrapper>

    
  );
}

export default App;
