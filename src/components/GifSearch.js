// import React, {Component } from "react";
// class GifSearch extends Component {
    
//     state = {
//         query: ""
//     }

//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.fetchGIFs(this.state.query)
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />

//                 </form>
//             </div>
//         )
//     }
// }
// export default GifSearch;

import React, { useState } from 'react';

function GifSearch({ handleSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(query);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
