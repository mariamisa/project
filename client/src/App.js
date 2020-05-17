import React from 'react';
import GoogleAuth from './componant/googleLogin'
import Home from './componant/Home'

import './App.css';

function App() {
  return (
    <div className="App">
      <GoogleAuth/>
      <Home/>
    </div>
  );
}

export default App;
