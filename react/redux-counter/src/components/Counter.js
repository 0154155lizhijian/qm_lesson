import React,{Component} from 'react'

class Counter extends Component{
    render(){
        const {value,onDecrement,onIncrement} = this.props;
        return(
            <div>
                Clicked:{value} times
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
            </div>
        )
    }
}

export default Counter;