import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import ServiceDetails from "./ServiceDetails";

function Router() {
  return (
    <BrowserRouter>
     <div className="hit">
     <Link className="tabs" to="/">Go to Home</Link>
      <Link className="tabs"to="/About">Go to About</Link>
      <Link className="tabs" to="/Contact">Go to Contact</Link>
      <Link className="tabs" to="/Services">Go to Services</Link>
     </div>

      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route exact path="/Services" component={Services} />
      <Route path="/ServiceDetails/:id" component={ServiceDetails}/>
    </BrowserRouter>
  );
}

export default Router;
