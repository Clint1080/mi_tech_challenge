import "./App.scss";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Route from "../components/Route";
import Link from "../components/Navigation";

function App() {
  return (
    <div className="App">
      <Route path="/contact">
        <Link href="/" className="contact_header_background">
          home
        </Link>
        <Contact />
      </Route>
      <Route path="/">
        <Link href="/contact" className="contact">
          contact
        </Link>
        <Home />
      </Route>
    </div>
  );
}

export default App;
