import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import ShareRecipes from './components/ShareRecipes';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from './components/Recipes';

function App(){
  
    return(
      <Router>
        <Navbar/>
        <Route path = '/' exact>
          <Home/>
        </Route>
        <Route path = '/recipes'>
          <Recipes/>
        </Route>
        <Route path = '/create'>
          <ShareRecipes/>
        </Route>
      </Router>
    )
}

export default App;