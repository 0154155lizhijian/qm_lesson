import React ,{Component} from 'react';
import Results from './Results';
import Search from './Search';

export default class Beer extends Component{
    componentDidMount(){
        this.loadBeers();
    }
    componentDidUpdate(prevProps){
        const currentSearchTerm = this.props.match.params.searchTerm;
        console.log(currentSearchTerm);
        // this.loadBeers(currentSearchTerm);
        const oldSearchTerm = prevProps.match.params.searchTerm;
        if(currentSearchTerm !== oldSearchTerm){
            this.loadBeers(currentSearchTerm)
        }
    }
    loadBeers = (searchTerm = "hops")=>{
        this.setState({
            loading:true
        })
        const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
        if(localStorageBeers){
                const localBeers = JSON.parse(localStorageBeers);
                this.setState({
                    beers:localBeers,
                    loading:false
                });
                return;
            }
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
        .then(data => data.json())
        .then(data => {
            // console.log(data)
            const beer = data.data || [];
            this.setState({
                beers:beer,
                loading:false
            })
        localStorage.setItem(`search-${searchTerm}`,JSON.stringify(this.state.beers))
        })
        .catch(err => console.error(err));
    }
    state = {
        beers:[],
        loading:true,  
    }
    render(){

        return(
            <div className="wrapper">
                <Search></Search>
                <Results beers = {this.state.beers} loading={this.state.loading}></Results>
            </div>
        )
    }
}