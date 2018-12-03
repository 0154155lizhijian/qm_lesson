import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'

class HelloUser extends React.Component{
    
    render(){
        return(  
            <App />   
        )  
    }
}
ReactDOM.render(<HelloUser/>, document.getElementById('root'));

serviceWorker.unregister();
