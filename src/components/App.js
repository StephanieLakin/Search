import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar';

class App extends React.Component {
        onSearchSubmit(term) {
           axios.get('https://api.unsplash.com/search/photos', {
               params: {query: term},
               headers: {
               Authorization: 'Client-ID 2e1e9914e1914300a273dccfb86b47eed798037eaae129ebef384b3731d574ba' 
            }
           });
        }
    
    render() {
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
    </div>
    );
  }   
}

export default App;