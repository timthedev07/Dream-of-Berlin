import RouteControl from "./contexts/RouteControl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/master.css";
import Home from "./pages/Home";
import Celebrities from "./pages/Celebrities";
import Travel from "./pages/Travel";
import NotFound from "./pages/NotFound";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import TermsAndConditions from "./pages/TermsAndConditions";
import Footer from "./components/Footer";
import Sports from "./pages/Sports";

export const API_BASE_URL =
  "https://blue-ocean-international-test.herokuapp.com/api/v0/";

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
            <Route exact path="/celebrities">
              <Celebrities />
            </Route>
            <Route exact path="/travel-guide">
              <Travel />
            </Route>
            <Route exact path="/sports">
              <Sports />
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
