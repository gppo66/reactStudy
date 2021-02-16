//useState를 이용한 api
//useReducer 를 이용한 api
//Custom Hook을 이용한 api
//react-async를 이용한 api
//장점 : 간편함
//단점 : 옵션이 복잡함
import React, { useState /*, useEffect, useReducer */ } from 'react';
// import axios from 'axios';
// import { useAsync } from 'react-async';
import User from './User';
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext';

// async function getUsers() {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users',
//   );
//   return response.data;
// }
//Loading, success, error
// function reducer(state, action) {
//   switch (action.type) {
//     case 'LOADING':
//       return {
//         loading: true,
//         data: null,
//         error: null,
//       };
//     case 'SUCCESS':
//       return {
//         loading: false,
//         data: action.data,
//         error: null,
//       };
//     case 'ERROR':
//       return {
//         loading: false,
//         data: null,
//         error: action.error,
//       };
//     default:
//       throw new Error(`Unhandled action type : ${action.type}`);
//   }
// }
function Users() {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;
  //   const [state, refetch] = useAsync(getUsers, [], true);
  //   const { data: users, error, isLoading, reload, run } = useAsync({
  //     deferFn: getUsers,
  //   });
  const [userId, setUserId] = useState(null);
  //   const [state, dispatch] = useReducer(reducer, {
  //     loading: false,
  //     data: null,
  //     error: null,
  //   });
  //   const [users, setUsers] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   const fetchUsers = async () => {
  //     dispatch({ type: 'LOADING' });
  //     try {
  //       //   setUsers(null);
  //       //   setError(null);

  //       //   setLoading(true);
  //       const response = await axios.get(
  //         'https://jsonplaceholder.typicode.com/users',
  //       );
  //       dispatch({ type: 'SUCCESS', data: response.data });
  //       // setUsers(response.data);
  //     } catch (e) {
  //       // setError(e);
  //       dispatch({ type: 'ERROR', error: e });
  //     }
  //     // setLoading(false);
  //   };
  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);

  //   const { loading, data: users, error } = state;
  const fetchData = () => {
    getUsers(dispatch);
  };
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
