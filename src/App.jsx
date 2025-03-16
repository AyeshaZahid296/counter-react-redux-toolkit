import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './redux/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.count)
  return (
    <div>
      <h2>Counter App - Redux Toolkit</h2>
      <h4>Count: {count}</h4>
      <button onClick={() => dispatch(increment())}>Add value</button>
      <button onClick={() => dispatch(decrement())}>Remove value</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App