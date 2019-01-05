import React from 'react'
import propTypes from 'prop-types'

const Counter = ({value,onIncrement,onDecrement,onIncrementAsync})=> {
    return (
      <div>
          <button onClick={onIncrementAsync}>Increment after 1 s</button>
          <button onClick={onIncrement}>Increment </button>
          <button onClick={onDecrement}>Decrement</button>
          <hr></hr>
          <div>Value：{value}</div>
      </div>
    )
}

Counter.propTypes = {
    value:propTypes.number.isRequired,
    onIncrement:propTypes.func.isRequired,
    onDecrement:propTypes.func.isRequired,
    onIncrementAsync:propTypes.func.isRequired
}

export default Counter