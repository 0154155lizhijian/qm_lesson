import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
    
    searchRef=React.createRef();

    static contextTypes={
        router:PropTypes.object.isRequired
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const searchTerm =this.searchRef.current.value;
        this.context.router.history.push(`/search/${searchTerm}`);
    }
    render() {
        return (
            <div className="search">
                <form action="" onSubmit={ this.handleSubmit }>
                    <input type="text" ref={ this.searchRef } placeholder="Hoppy,Malt,Angry,New..."/>
                    <input type="submit"  />
                </form>
            </div>
        );
    }
}
export default Search;
