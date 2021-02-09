import React from "react";

//requied routing packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


//untill here we operate just like normal routes
//no issues as the nested route portion topic is just outer touched

function Topics() {

  //it helps us to match the url 
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
        {/* match has url obj which has present url in the browser */}
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
        {/* nested parameters could be any thing   */}
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}


          {/* but we haven't used our nested inside the topics so we need to make switches for the links too
          
          switches can be generalized too rathe than links
           */}

      <Switch>
        <Route path={`${match.path}/:topicId`}>

        {/* invokes a topic component which contain as per the parameter UIs */}
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  //to extract parameters we use useParams
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
