//비효율적 배열 렌더링 예시 
//효율적 배열 렌더링 예시 
//동적 데이터 배열 렌더링 예시 
//useRef로 컴포턴트 안의 변수 만들기 
//useRef를 사용하면 컴포넌트가 변경되어도 리렌더링이 되지 않는다. 
import React from 'react';


function User({user,onRemove}){
    const {username,email,id} = user;
    return(
        <div><b>{username}</b> <span> ({email})</span>
        &nbsp;&nbsp;<button onClick={() => onRemove(id)}>삭제</button></div>
    );
}
function UserList({users, onRemove}){
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
               {
                   users.map(
                       user => (<User user={user}
                                      key={user.id}
                                      onRemove={onRemove}
                          />)
                   )
               }
            </div>
        </div>
    )
}

export default UserList;