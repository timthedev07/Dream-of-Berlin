import RouteControl from "./contexts/RouteControl";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./css/master.css";
import Home from "./pages/Home";
import Travel from "./pages/Travel";
import NotFound from "./pages/NotFound";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import TermsAndConditions from "./pages/TermsAndConditions";
import Footer from "./components/Footer";
import Sports from "./pages/Sports";
import Parties from "./pages/Parties";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function App() {
  return (
    <div className="App">
      <Router>
        <RouteControl>
          <Switch>
            {/* Information pages */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Redirect to="/" />
            </Route>
            <Route exact path="/travel-guide">
              <Travel />
            </Route>
            <Route exact path="/sports">
              <Sports />
            </Route>
            <Route exact path="/political-parties">
              <Parties />
            </Route>

            {/* Policies */}
            <Route exact path="/terms-and-conditions">
              <TermsAndConditions />
            </Route>
            <Route exact path="/privacy-policies">
              <PrivacyPolicies />
            </Route>

            {/* 404 */}
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </RouteControl>
      </Router>
      <Footer />
    </div>
  );
}
