import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const count = useSelector((state) => state.count)
  return (
    <div>
      <h2>Counter App - Redux Toolkit</h2>
      <h4>Count: {count}</h4>
    </div>
  )
}

export default App