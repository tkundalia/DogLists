import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DogsListContainer from './Components/DogsListContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <main> 
            <DogsListContainer />
          </main>
      </header>
    </div>
  );
}

export default App;
