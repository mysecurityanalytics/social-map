import React from 'react';
import "./App.css";
import MapComponent from './Components/Map/MapComponent';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Map" component={MapComponent} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;