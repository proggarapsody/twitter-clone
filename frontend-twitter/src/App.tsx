import React from 'react';
import Button from '@material-ui/core/Button';
import SignIn from './pages/SignIn';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        <Route path="/signIn" render={() => <SignIn />} />
        <Route path="/home" component={MainPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
