import React from 'react';
import './App.css';

const nuns = [ 1, 2, 3, 4, 5];

const App = () => {
  const element = <h1>Hello JSX!</h1>
return (
  <div>
  {element}
  {nuns.map(num =><li>{ num }</li>)};
  </div>
);
}

export default App;