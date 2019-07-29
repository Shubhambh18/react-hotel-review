import React from 'react';
import './App.css';
import GetHotels from './GetHotels/GetHotels.react';
import Header from './Header/Header.react';

function App() {
  
  return (
    <div className="App">
        <Header/> <br/><br/>
        <GetHotels/>
    
    </div>
  );
}

export default App;
