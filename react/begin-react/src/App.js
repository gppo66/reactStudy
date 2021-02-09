//useMemo

//useReducer VS useState
//컴포넌트에서 관리하는 값이 여러개거나 할 때는 useReducer 를 선택하는 것을 추천
//setter를 여러개를 사용 할때는 useReducer 를 사용하는 것을 추천
//간단한거 : useState 복잡한것 : useReducer
import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useReducer,
  createContext,
} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './UseInputs';
import produce from 'immer';
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  // inputs:{
  //   username:'',
  //   email:'',
  // },

  users: [
    {
      id: 1,
      username: 'gppo65',
      email: 'a@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'gppo66',
      email: 'a1@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'gppo67',
      email: 'a2@gmail.com',
      active: false,
    },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    // case 'CHANGE_INPUT' :
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   }

    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    // return {
    //   inputs: initialState.inputs,
    //   users: state.users.concat(action.user)
    // }
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find(
          (user) => isSecureContext.id === action.id,
        );
        user.active = !user.active;
      });
    // return {
    //   ...state,
    //   users: state.users.map(users =>
    //     users.id === action.id
    //     ? {...users,active:!users.active}
    //     :users
    //     )
    // }
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    // return {
    //   ...state,
    //   users: state.users.filter(users => users.id !== action.id)
    // }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const { username, email } = form;
  const nextId = useRef(4);
  const { users } = state;
  // const{username, email} = state.inputs;

  // const onChange = useCallback(e => {
  //   const { name, value} = e.target;
  //   dispatch({
  //     type:'CHANGE_INPUT',
  //     name,
  //     value,
  //   })
  // },[]);
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
        // active,
      },
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  // const onToggle = useCallback(id =>{
  //   dispatch({
  //     type:'TOGGLE_USER',
  //     id
  //   });
  // },[]);
  // const onRemove = useCallback(id =>{
  //   dispatch({
  //     type:'REMOVE_USER',
  //     id
  //   });
  // },[]);

  const count = useMemo(() => countActiveUsers(users), users);
  //   const [inputs, setInputs] = useState({
  //     username:'',
  //     email:'',
  //   });
  //   const {username,email} = inputs;
  //   const onChange = useCallback(e =>{
  //     const {name,value} = e.target;
  //     setInputs({
  //       ...inputs,
  //       [name]:value
  //     })
  //   },[inputs]);
  //   const [users,setUsers] = useState ([
  //     {
  //         id:1,
  //         username:'gppo65',
  //         email:'a@gmail.com',
  //         active : true,
  //     },
  //     {
  //         id:2,
  //         username:'gppo66',
  //         email:'a1@gmail.com',
  //         active : false,
  //     },
  //     {
  //         id:3,
  //         username:'gppo67',
  //         email:'a2@gmail.com',
  //         active : false,
  //     },
  // ]);

  // const nextId = useRef(4);

  // const onCreate = useCallback(() =>{
  //   const user = {
  //     id:nextId.current,
  //     username,
  //     email,
  //   };
  //   // setUsers([...users, user]);
  //   setUsers(users => users.concat(user));
  // //  / setUsers(users.concat(user)); concat을 사용

  //   setInputs({
  //     username:'',
  //     email:'',
  //   });
  //   console.log(nextId.current); //4
  //   nextId.current += 1;
  // },[username,email]);

  // const onRemove = useCallback(id => {
  //   setUsers(users => users.filter(user => user.id !== id));
  // },[]);

  // const onToggle = useCallback(id =>{
  //   setUsers(users => users.map(
  //     user => user.id === id
  //     ?{...user, active: !user.active}
  //     : user
  //   ))
  // },[]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <Wrapper>
        <Hello name="react" color="red" isSpecial />
        <Hello color="pink" />
        <Counter></Counter>
        <InputSample></InputSample>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        ></CreateUser>
        <UserList
          users={users}
          //  onRemove={onRemove}
          //  onToggle={onToggle}
        ></UserList>
        <div>활성 사용자 수 : {count}</div>
      </Wrapper>
    </UserDispatch.Provider>
  );
}

export default App;
