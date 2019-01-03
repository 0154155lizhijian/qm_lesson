import React from 'react';
//EC = H(WrappedComponent)
var enhanceComponent = (Component) =>
class Enhance extends React.Component{
    render(){
        return(
            <section>
                <h1> i am high-order component</h1>
                <Component
                {...this.state}
                {...this.props}
                />
            </section>
        )
    }
}

export default enhanceComponent;
