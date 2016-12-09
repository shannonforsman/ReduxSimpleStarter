import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
//const is an ES6 syntax - declaring a variable where it's the final value, we'll never reassign it (constant)

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


ReactDom.render(<App />, document.querySelector('.container'));
