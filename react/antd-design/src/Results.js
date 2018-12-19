import React ,{Component} from 'react'
import Detail from './Detail'
import Loader from './Loader'
import propTypes from 'prop-types';

export default class Result extends Component{
    static propTypes = {
        beers:propTypes.array.isRequired,
        Loading:propTypes.bool.isRequired
    } 
    render(){
        if(this.props.Loading){
            return <Loader message="Beer run!"></Loader>;
        }
        return(  
            <div className='results'>
                <div className="beers">
                    {
                        this.props.beers.map((beer,i)=><Detail beer={beer} key={i}></Detail>)
                    }
                </div>
            </div>
        )
    }
}