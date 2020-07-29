import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Information } from './components/Information';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4'>
        <Switch>
          <Route path={'/'} exact component={ Home } />
          <Route path={'/info'} component={ Information } />
        </Switch>      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
