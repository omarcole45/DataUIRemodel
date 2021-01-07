import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path ="/" component={UserLogin}/>;
          <Route path ="/home/:userid" component={Home}/>;
      </Switch>
   
    </div>
  );
}

export default App;
