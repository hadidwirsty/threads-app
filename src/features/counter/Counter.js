import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as counterSlice from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(counterSlice.selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(counterSlice.incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          type="button"
          className={styles.asyncButton}
          onClick={() => dispatch(counterSlice.incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(counterSlice.incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

export default Counter;
