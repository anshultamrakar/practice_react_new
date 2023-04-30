import React from 'react'
import './App.css';
import {Route , Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Header from './pages/Header';


function App() {
  return (
    <div>
       <Header/>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
