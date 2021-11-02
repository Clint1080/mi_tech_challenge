import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import "./App.scss";
import Contact from "../components/Contact";
import Home from "../components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
