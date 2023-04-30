import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import FoodApp from './FoodApp';
import { BrowserRouter as Router , Route   } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       <FoodApp/>
    </Router>
  </React.StrictMode>
);

