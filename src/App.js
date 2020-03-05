import React, {useEffect} from 'react';
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrepaidReserve } from './components/PrepaidReserve';
import { NotFound } from './components/NotFound';
import { FormReserve } from './components/FormReserve';


function App() {
  return (
    <main>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/reserve" component={PrepaidReserve} exact />
          <Route path="/reserve/form" component={FormReserve} exact />
          <Route component={NotFound} />
      </Switch>
    </main>

  );
}

export default App;
