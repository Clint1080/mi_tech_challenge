// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "../components/Header";
import "./App.scss";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Route from "../components/Route";
import Link from "../components/Navigation";

function App() {
  // return (
  //   <div className="App">
  //     <Router>
  //       <Header />
  //       <Switch>
  //         <Route path="/contact">
  //           <Contact />
  //         </Route>
  //         <Route path="/">
  //           <Home />
  //         </Route>
  //       </Switch>
  //     </Router>
  //   </div>
  // );

  return (
    <div className="App">
      <Route path="/">
        <Link href="/contact" className="contact_header_background">
          home
        </Link>
        <Contact />
      </Route>
      <Route path="/contact">
        <Link href="/" className="contact">
          contact
        </Link>
        <Home />
      </Route>
    </div>
  );
}

export default App;
