import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Homepage from "./components/HomePage";
import FoF from './components/FoF'

//react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Homepage/>
          </Route>
          <Route>
            <FoF/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
