import React, { Suspense } from "react";
import Indoor from "./Components/Indoor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import AboutView from "./Components/AboutView";
import HomeView from "./Components/HomeView";
import LearnMoreView from "./Components/LearnMoreView";
import HelpPage from "./Components/HelpPage";

function App() {
  return (
    <Router basename="/">
      <div className="relative pb-10 min-h-screen">
        <NavigationBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/about">
              <AboutView />
            </Route>
            <Route path="/learnMore">
              <LearnMoreView />
            </Route>
            <Route path="/indoor">
              <Indoor />
            </Route>
            <Route path="/help/:id" component={HelpPage} />
          </Switch>
        </Suspense>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
