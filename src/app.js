import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import {Dashboard} from './pages/dashboard/dashboard';
import  RegistrationPage from './pages/registration/registrationPage';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/user" component={Dashboard}/>
          <Route exact path="/registration" component={RegistrationPage}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
