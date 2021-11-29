import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/user" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
