import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Counter App - Redux Toolkit</h2>
        <h4 className="text-xl font-semibold mb-4 text-gray-600">Count: {count}</h4>
        <div className="space-x-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Add value
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Remove value
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;