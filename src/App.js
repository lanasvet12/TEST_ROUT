/// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useParams, useHistory } from "react-router-dom";

import Home from './Home';
import Lesson from './Lesson';

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/lesson" exact>
            <Lesson />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50
  }
}
