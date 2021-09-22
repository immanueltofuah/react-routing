import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

function Router() {
  return (
    <BrowserRouter>
      <Link to="/">Go to Home</Link>
      <Link to="/About">Go to About</Link>
      <Link to="/Contact">Go to Contact</Link>
      <Link to="/Services">Go to Services</Link>

      <Route exact="true" path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Services" component={Services} />
    </BrowserRouter>
  );
}

export default Router;
