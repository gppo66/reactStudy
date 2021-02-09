//비효율적 배열 렌더링 예시
//효율적 배열 렌더링 예시
//동적 데이터 배열 렌더링 예시
//useRef로 컴포턴트 안의 변수 만들기
//useRef를 사용하면 컴포넌트가 변경되어도 리렌더링이 되지 않는다.
//useEffect 사용
//useContext 사용

import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';

// const User = React.memo(function User({user,onRemove,onToggle}){
const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);
  // useEffect(() => {
  //     console.log('컴포넌트가 화면에 나타남');
  //     //props -> state
  //     //Rest API
  //     // D3 Video.js
  //     // setInterval , setTimeout
  //     return () => {
  //         // clear Interval, clear Timeout
  //         //라이브러리 인스턴스 제거

  //         console.log('컴포넌트가 화면에서 사라짐');
  //     }
  // },[])
  useEffect(() => {
    //특정 값이 업데이트 된 이후에 실행
    console.log('user 값이 설정');
    console.log(user);
    return () => {
      console.log('user 값이 바뀌기전');
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        // onClick={() => onToggle(id)}>
        onClick={() => dispatch({ type: 'TOGGLE_USER', id })}
      >
        {username}
      </b>
      &nbsp;
      <span> ({email})</span>
      {/* &nbsp;&nbsp;<button onClick={() => onRemove(id)}>삭제</button></div> */}
      &nbsp;&nbsp;
      <button onClick={() => dispatch({ type: 'REMOVE_USER', id })}>
        삭제
      </button>
    </div>
  );
});
// function UserList({users, onRemove,onToggle}){
function UserList({ users }) {
  // const users = [
  //     {
  //         id:1,
  //         username:'gppo65',
  //         email:'a@gmail.com'
  //     },
  //     {
  //         id:2,
  //         username:'gppo66',
  //         email:'a1@gmail.com'
  //     },
  //     {
  //         id:3,
  //         username:'gppo67',
  //         email:'a2@gmail.com'
  //     },
  // ];

  return (
    <div>
      <div>
        {/* <div><b>{users[0].username}</b> <span> ({users[0].email})</span></div>
               <div><b>{users[1].username}</b> <span> ({users[1].email})</span></div>
               <div><b>{users[2].username}</b> <span> ({users[2].email})</span></div> */}
        {/* <User user={users[0]}/>
               <User user={users[1]}/>
               <User user={users[2]}/> */}
        {users.map((user) => (
          <User
            user={user}
            key={user.id}
            // onRemove={onRemove}
            // onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(
  UserList /*(prevProps,nextProps) => nextProps,users === prevProps.users*/,
);
