// import logo from './logo.svg';
// import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './Actions'

function App() {
  const counter = useSelector((state)=>state.counter)
  const isLogged = useSelector((state)=>state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Hello</h1>
        <h1>counter {counter}</h1>
        <button onClick={()=>dispatch(increment(5))}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        {isLogged ? <h3>yes logged</h3>:""}
        {/* <h1>logged {isLogged}</h1> */}
    </div>
  );
}

export default App;
