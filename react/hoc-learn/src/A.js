import React,{Component} from 'react'

function A(B){
    return class Text extends Component{
        render(){
            return(
                <div>
                    <p>something enhance</p>
                    <B />
                </div>
            )
        }
    }
}
export default A;
