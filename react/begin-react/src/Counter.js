//함수형 컴포넌트
// import React, {useState} from 'react';

// react lifecycle
// -마운트
//     constructor
//         컴포넌트가 처음 만들어 질 떄 사용
//     getDerivedStateFromProps
//         nextprops, prevState를 받아와서 해당 상태의 변경 점을 동기화 시킴
//         componentDidMount를 사용할 수도 있음
//     render
//     componentDidMount
//         외부 API 호출 가능
//         특정 DOM에 Event 설정 가능
// -업데이트
//     getDerivedStateFromProps
//         마운트와 업데이트 될 때 사용
//     shouldComponentUpdate
//         최적화를 하는 용도
//         메소드를 구현하지 않으면 항상 리렌더링
//     render
//     getSnapshotBeforeUpdate
//         브라우저에 변화를 적용하기 직전에 DOM에 반영 가능
//     componentDidUpdate
//         getSnapshotBeforeUpdate에서 적용된 것을 브라우저에 변화를 적용할 수 있음
//         prevProps, prevState,snapshot을 인자로 받아옴
// -언마운트
//     componentWillUnmount
//         컴포넌트가 사라지기 직전에 사용

import React, { useReducer, Component } from 'react';
import { render } from 'react-dom';

// function reducer(state,action) {
//     switch(action.type){
//         case 'INCREMENT':
//         return state + 1;
//         case 'DECREMENT':
//         return state - 1;
//         default:
//             throw new Error('Unhandled action');
//     }
// }

// function Counter() {
//     // const [number, setNumber] = useState(0);
//     const [number, dispatch] = useReducer(reducer,0);

//     const onIncrease =() =>{
//         // setNumber(number+1);
//         // setNumber(prevNumber => prevNumber + 1);
//         dispatch({
//             type:'INCREMENT'
//         })
//     };
//     const onDecrease =() =>{
//         // setNumber(number-1);
//         // setNumber(prevNumber => prevNumber - 1);
//         dispatch({
//             type:'DECREMENT'
//         })
//     };
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

//class 형 컴포넌트
class Counter extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         counter : 0
  //     };
  // }
  // }

  state = {
    counter: 0,
    fixed: 1,
    updateMe: {
      toggleMe: false,
      dontChangeMe: 1,
    },
  };

  //     this.handleIncrease = this.handleIncrease.bind(this);
  //     this.handleDecrease = this.handleDecrease.bind(this);
  // }

  handleIncrease = () => {
    console.log('increase');
    // this.setState({
    //     counter:this.state.counter + 1
    // });
    //함수형 업데이트
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    //바로 바꿔짐
  };
  handleDecrease = () => {
    console.log('decrease');
    //설정한 상태로 바꾸기를 요청
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  handleToggle = () => {
    this.setState({
      updateMe: {
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe,
      },
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값 : {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;
